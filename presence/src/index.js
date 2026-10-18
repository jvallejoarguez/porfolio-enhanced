import { DurableObject } from 'cloudflare:workers';

// One shared room for the homepage. Each visitor is a WebSocket; the room
// relays where their pointer sits over the stack diagram, nothing else.
const MAX_PEERS = 50;
const COLORS = 6;
const MIN_MOVE_MS = 30;
// Positions are fractions of the diagram's box, with a margin around it.
const MIN_POS = -0.2;
const MAX_POS = 1.3;

function position(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return undefined;
  if (value < MIN_POS || value > MAX_POS) return undefined;
  return Math.round(value * 1000) / 1000;
}

export class Presence extends DurableObject {
  // Last move per socket, for throttling. Lost on hibernation, which is fine.
  lastMove = new WeakMap();

  async fetch() {
    const sockets = this.ctx.getWebSockets();
    if (sockets.length >= MAX_PEERS) {
      return new Response('Room is full', { status: 503 });
    }

    const [client, server] = Object.values(new WebSocketPair());
    const peer = {
      id: crypto.randomUUID().slice(0, 8),
      color: Math.floor(Math.random() * COLORS),
      x: null,
      y: null,
    };

    this.ctx.acceptWebSocket(server);
    server.serializeAttachment(peer);

    const peers = sockets
      .map((ws) => ws.deserializeAttachment())
      .filter(Boolean);
    server.send(JSON.stringify({ type: 'welcome', you: peer, peers }));
    this.broadcast({ type: 'join', peer }, server);

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(ws, message) {
    if (typeof message !== 'string' || message.length > 120) return;

    let data;
    try {
      data = JSON.parse(message);
    } catch {
      return;
    }

    const peer = ws.deserializeAttachment();
    if (!peer || data?.type !== 'move') return;

    const now = Date.now();
    if (now - (this.lastMove.get(ws) ?? 0) < MIN_MOVE_MS) return;
    this.lastMove.set(ws, now);

    // null, null hides the pointer (it left the diagram or the tab).
    let x = null;
    let y = null;
    if (data.x !== null || data.y !== null) {
      x = position(data.x);
      y = position(data.y);
      if (x === undefined || y === undefined) return;
    }

    ws.serializeAttachment({ ...peer, x, y });
    this.broadcast({ type: 'move', id: peer.id, x, y }, ws);
  }

  webSocketClose(ws) {
    this.leave(ws);
  }

  webSocketError(ws) {
    this.leave(ws);
  }

  leave(ws) {
    const peer = ws.deserializeAttachment();
    if (peer) this.broadcast({ type: 'leave', id: peer.id }, ws);
    try {
      ws.close(1000, 'Bye');
    } catch {
      // Already closed.
    }
  }

  broadcast(message, except) {
    const text = JSON.stringify(message);
    for (const ws of this.ctx.getWebSockets()) {
      if (ws === except) continue;
      try {
        ws.send(text);
      } catch {
        // The socket is closing; webSocketClose will tidy up.
      }
    }
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/ws') {
      return new Response('Not found', { status: 404 });
    }
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected a WebSocket', { status: 426 });
    }

    const allowed = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim());
    if (!allowed.includes(request.headers.get('Origin'))) {
      return new Response('Forbidden', { status: 403 });
    }

    const room = env.PRESENCE.get(env.PRESENCE.idFromName('home'));
    return room.fetch(request);
  },
};
