// The operating model built from zero: three pillars that feed one portfolio.

const pillars = [
  { name: 'Process', items: ['Scope and intake', 'Delivery standards', 'Close out'] },
  { name: 'Pricing', items: ['Quoting system', 'Standard estimates', 'Clear client options'] },
  { name: 'Capacity', items: ['Subrental vendors', 'Freelance technicians', 'Labor scheduling'] },
]

export default function DeptModel() {
  return (
    <div className="dm" role="img" aria-label="Operating model: process, pricing, and capacity pillars feeding a portfolio of 250+ projects a year">
      <p className="wb-title" aria-hidden="true">The operating model</p>
      <div className="dm-pillars" aria-hidden="true">
        {pillars.map((p) => (
          <div className="dm-pillar" key={p.name}>
            <h4>{p.name}</h4>
            <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="wb-arrow" aria-hidden="true">↓</p>
      <div className="dm-out" aria-hidden="true">
        <strong>250+ projects a year</strong>
        <span>One owner. One standard.</span>
      </div>
    </div>
  )
}
