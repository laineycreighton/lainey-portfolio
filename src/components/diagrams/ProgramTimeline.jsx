// Eight week program plan as a simple Gantt view. Phases are illustrative.

const weeks = 8
const phases = [
  { name: 'Scope and budget', from: 1, to: 2 },
  { name: 'Design and quote', from: 2, to: 3 },
  { name: 'Vendor contracts', from: 3, to: 4 },
  { name: 'Logistics', from: 4, to: 7 },
  { name: 'Install and run', from: 8, to: 8 },
  { name: 'Closeout', from: 8, to: 8, last: true },
]

export default function ProgramTimeline() {
  return (
    <div>
      <p className="wb-title">The plan: 8 weeks, one schedule</p>
      <div className="wb-shifts pt" role="list" aria-label="Program phases across 8 weeks">
        {phases.map((p) => {
          const left = ((p.from - 1) / weeks) * 100
          const width = ((p.to - p.from + 1) / weeks) * 100
          return (
            <div role="listitem" className="wb-shift" key={p.name} aria-label={`${p.name}: week ${p.from}${p.to !== p.from ? ` to ${p.to}` : ''}`}>
              <span className="wb-shift-label">{p.name}</span>
              <span className="wb-track">
                <span className={`wb-bar ${p.last ? 'pt-last' : ''}`} style={{ left: `${left}%`, width: `${width}%` }} />
              </span>
            </div>
          )
        })}
        <div className="wb-shift wb-axis" aria-hidden="true">
          <span className="wb-shift-label">Week</span>
          <span className="pt-ticks">
            {Array.from({ length: weeks }, (_, i) => <span key={i}>{i + 1}</span>)}
          </span>
        </div>
      </div>
    </div>
  )
}
