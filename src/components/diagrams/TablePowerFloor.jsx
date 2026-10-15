// Simple top down floor plan: before (cable runs from the walls) and after (a station at every table).

const cols = [70, 150, 230]
const rows = [70, 140, 210]
const tables = rows.flatMap((y) => cols.map((x) => ({ x, y })))

function Room({ children, title }) {
  return (
    <svg viewBox="0 0 300 280" role="img" aria-labelledby={`${title}-t`} className="floor">
      <title id={`${title}-t`}>{title}</title>
      <rect x="10" y="10" width="280" height="260" rx="6" className="floor-room" />
      {children}
    </svg>
  )
}

function Tables() {
  return tables.map((t, i) => <circle key={i} cx={t.x} cy={t.y} r="22" className="floor-table" />)
}

export default function TablePowerFloor() {
  return (
    <div className="floor-pair">
      <div>
        <Room title="Before: cable runs across the floor">
          <rect x="4" y="133" width="12" height="14" className="floor-outlet" />
          <rect x="284" y="133" width="12" height="14" className="floor-outlet" />
          <path d="M16 140 H48 M16 140 C30 110 40 80 48 70 M16 140 C30 170 40 200 48 210" className="floor-cable" />
          <path d="M92 70 H128 M92 140 H128 M92 210 H128" className="floor-cable" />
          <path d="M284 140 H252 M284 140 C270 110 260 80 252 70 M284 140 C270 170 260 200 252 210" className="floor-cable" />
          <Tables />
        </Room>
        <p className="floor-label"><span className="dot dot-warn" aria-hidden="true" />Before: cable from two walls, one charge per event</p>
      </div>
      <div>
        <Room title="After: a power station at every table">
          <Tables />
          {tables.map((t, i) => (
            <rect key={i} x={t.x - 7} y={t.y - 7} width="14" height="14" rx="2" className="floor-station" />
          ))}
        </Room>
        <p className="floor-label"><span className="dot dot-accent" aria-hidden="true" />After: a station at every table, sold per day</p>
      </div>
    </div>
  )
}
