// A simplified War Board: spaces by day, color coded by AV complexity,
// then one day turned into staggered shifts. Illustrative, not real data.

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const spaces = [
  { name: 'Ballroom', cells: [3, 3, 0, 2, 3] },
  { name: 'Salon A', cells: [1, 2, 2, 0, 1] },
  { name: 'Salon B', cells: [0, 2, 1, 1, 2] },
  { name: 'Boardroom', cells: [1, 1, 1, 1, 0] },
]
// Cells to flag as a tight turnaround: [rowIndex, dayIndex]
const flags = ['0-1', '2-4']

const levelName = ['No event', 'Light AV', 'Medium AV', 'Heavy AV']

const shifts = [
  { label: 'Tech 1', start: 0, end: 50, note: 'Early setup' },
  { label: 'Tech 2', start: 10, end: 60 },
  { label: 'Tech 3', start: 30, end: 80 },
  { label: 'Tech 4', start: 50, end: 100, note: 'Strike' },
]
const ticks = ['6a', '10a', '2p', '6p', '10p']

export default function WarBoard() {
  return (
    <div className="wb">
      <p className="wb-title">The board: spaces by day</p>
      <div className="wb-grid" role="table" aria-label="Sample week: event spaces by day, color coded by AV complexity">
        <div role="row" className="wb-row">
          <span role="columnheader" className="wb-head" />
          {days.map((d) => <span role="columnheader" className="wb-head" key={d}>{d}</span>)}
        </div>
        {spaces.map((s, r) => (
          <div role="row" className="wb-row" key={s.name}>
            <span role="rowheader" className="wb-space">{s.name}</span>
            {s.cells.map((lvl, c) => {
              const flagged = flags.includes(`${r}-${c}`)
              return (
                <span
                  role="cell"
                  key={c}
                  className={`wb-cell lvl-${lvl} ${flagged ? 'is-flag' : ''}`}
                  aria-label={`${levelName[lvl]}${flagged ? ', tight turnaround' : ''}`}
                />
              )
            })}
          </div>
        ))}
      </div>
      <ul className="wb-legend" aria-hidden="true">
        <li><span className="wb-cell lvl-1" />Light AV</li>
        <li><span className="wb-cell lvl-2" />Medium AV</li>
        <li><span className="wb-cell lvl-3" />Heavy AV</li>
        <li><span className="wb-cell is-flag" />Tight turnaround</li>
      </ul>

      <p className="wb-arrow" aria-hidden="true">↓</p>

      <p className="wb-title">The staffing plan: Tuesday</p>
      <div className="wb-shifts" role="list" aria-label="Staggered technician shifts for Tuesday">
        {shifts.map((s) => (
          <div role="listitem" className="wb-shift" key={s.label}>
            <span className="wb-shift-label">{s.label}</span>
            <span className="wb-track">
              <span className="wb-bar" style={{ left: `${s.start}%`, width: `${s.end - s.start}%` }}>
                {s.note && <span className="wb-note">{s.note}</span>}
              </span>
            </span>
          </div>
        ))}
        <div className="wb-shift wb-axis" aria-hidden="true">
          <span className="wb-shift-label" />
          <span className="wb-ticks">{ticks.map((t) => <span key={t}>{t}</span>)}</span>
        </div>
      </div>
    </div>
  )
}
