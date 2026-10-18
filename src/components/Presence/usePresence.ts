import { useCallback, useEffect, useRef, useState } from 'react';

export type Peer = {
  id: string;
  color: number;
  x: number | null;
  y: number | null;
};

type Message =
  | { type: 'welcome'; you: Peer; peers: Peer[] }
  | { type: 'join'; peer: Peer }
  | { type: 'move'; id: string; x: number | null; y: number | null }
  | { type: 'leave'; id: string };

const SEND_EVERY_MS = 50;
const MAX_RETRY_MS = 15000;

// Shares this visitor's pointer with everyone else on the homepage through
// the presence worker. Without VITE_PRESENCE_URL it stays off.
export function usePresence() {
  const url = import.meta.env.VITE_PRESENCE_URL;
  const [live, setLive] = useState(false);
  const [peers, setPeers] = useState<Map<string, Peer>>(() => new Map());
  const socket = useRef<WebSocket | null>(null);
  const pending = useRef<{ x: number | null; y: number | null } | null>(null);
  const lastSent = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!url) return;
    const address = url;

    let retry = 1000;
    let retryTimer: number | undefined;
    let stopped = false;

    function connect() {
      const ws = new WebSocket(address);
      socket.current = ws;

      ws.onopen = () => {
        retry = 1000;
      };

      ws.onmessage = (event) => {
        let message: Message;
        try {
          message = JSON.parse(event.data);
        } catch {
          return;
        }
        if (message.type === 'welcome') setLive(true);
        setPeers((current) => {
          const next = new Map(current);
          switch (message.type) {
            case 'welcome':
              next.clear();
              for (const peer of message.peers) next.set(peer.id, peer);
              break;
            case 'join':
              next.set(message.peer.id, message.peer);
              break;
            case 'move': {
              const peer = next.get(message.id);
              if (peer)
                next.set(peer.id, { ...peer, x: message.x, y: message.y });
              break;
            }
            case 'leave':
              next.delete(message.id);
              break;
          }
          return next;
        });
      };

      ws.onclose = () => {
        if (stopped) return;
        socket.current = null;
        setLive(false);
        setPeers(new Map());
        retryTimer = window.setTimeout(connect, retry);
        retry = Math.min(retry * 2, MAX_RETRY_MS);
      };
    }

    connect();

    return () => {
      stopped = true;
      window.clearTimeout(retryTimer);
      const ws = socket.current;
      if (!ws) return;
      // Closing mid-handshake can leave the room counting a ghost, so wait
      // for the socket to open and then close it cleanly.
      if (ws.readyState === WebSocket.CONNECTING) {
        ws.onopen = () => ws.close();
        ws.onmessage = null;
      } else {
        ws.close();
      }
    };
  }, [url]);

  const flush = useCallback(() => {
    timer.current = undefined;
    const next = pending.current;
    pending.current = null;
    const ws = socket.current;
    if (!next || !ws || ws.readyState !== WebSocket.OPEN) return;
    if (next.x === lastSent.current.x && next.y === lastSent.current.y) return;
    lastSent.current = next;
    ws.send(JSON.stringify({ type: 'move', ...next }));
  }, []);

  // Positions are fractions of the diagram's box; null hides the pointer.
  const move = useCallback(
    (x: number | null, y: number | null) => {
      pending.current = { x, y };
      if (timer.current === undefined) {
        timer.current = window.setTimeout(flush, SEND_EVERY_MS);
      }
    },
    [flush],
  );

  useEffect(() => {
    function hideWhenAway() {
      if (document.visibilityState === 'hidden') move(null, null);
    }
    document.addEventListener('visibilitychange', hideWhenAway);
    return () => document.removeEventListener('visibilitychange', hideWhenAway);
  }, [move]);

  return { live, peers: [...peers.values()], move };
}
