// A tiny games grid where one tile is the impostor. Decorative.
const tiles = [
  { tone: 'blue', glyph: '7' },
  { tone: 'outline', glyph: '♠' },
  { tone: 'mustard', glyph: 'A' },
  { tone: 'teal', glyph: '♥' },
  { tone: 'impostor' },
  { tone: 'pink', glyph: '★' },
  { tone: 'outline', glyph: 'K' },
  { tone: 'violet', glyph: '♦' },
  { tone: 'cream', glyph: '3' },
];

export default function GameTiles() {
  return (
    <div className="tiles" aria-hidden="true">
      {tiles.map((tile, index) => (
        <span key={index} className={`tile tile--${tile.tone}`}>
          {tile.glyph ?? (
            <span className="eyes">
              <span className="eye" />
              <span className="eye" />
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
