import type { CSSProperties, PointerEvent } from 'react';
import StackDiagram from '../StackDiagram/StackDiagram';
import { usePresence } from './usePresence';

const colors = [
  'var(--blue)',
  'var(--mustard)',
  'var(--coral)',
  'var(--teal)',
  'var(--pink)',
  'var(--violet)',
];

function visible(value: number | null): value is number {
  return value !== null && value >= -0.05 && value <= 1.05;
}

// The stack diagram, with everyone else's pointer drawn over it live.
export default function LiveStack() {
  const { live, peers, move } = usePresence();
  const count = peers.length + 1;

  function track(event: PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    move(
      (event.clientX - box.left) / box.width,
      (event.clientY - box.top) / box.height,
    );
  }

  return (
    <div
      className="live-stack"
      onPointerMove={track}
      onPointerLeave={() => move(null, null)}
    >
      <StackDiagram
        live={
          live && (
            <span className="live-count">
              {count === 1
                ? 'Just you · open another tab'
                : `${count} people here right now`}
            </span>
          )
        }
      />
      {peers.map(
        (peer) =>
          visible(peer.x) &&
          visible(peer.y) && (
            <svg
              key={peer.id}
              className="live-cursor"
              viewBox="0 0 16 20"
              aria-hidden="true"
              style={
                {
                  left: `${peer.x * 100}%`,
                  top: `${peer.y * 100}%`,
                  color: colors[peer.color % colors.length],
                } as CSSProperties
              }
            >
              <path d="M1 1 L1 16 L5 12 L8 19 L11 17.6 L8 11 L14 11 Z" />
            </svg>
          ),
      )}
    </div>
  );
}
