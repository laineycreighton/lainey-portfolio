// The LED wall business case: two options compared on total cost, then the review.

const options = [
  {
    name: 'Keep projection',
    tone: 'warn',
    items: ['Repair bills with every failure', 'Rental equipment during downtime', 'Recurring and hard to predict'],
  },
  {
    name: 'Replace with LED wall',
    tone: 'accent',
    items: ['One planned capital purchase', 'No downtime rentals', 'Cost known up front'],
  },
]

export default function LedCase() {
  return (
    <div role="img" aria-label="Business case comparing the total cost of keeping projection screens against replacing them with an LED wall, presented in weekly capital reviews with the decision pending">
      <p className="wb-title" aria-hidden="true">The comparison: total cost of ownership</p>
      <div className="dm-pillars led-options" aria-hidden="true">
        {options.map((o) => (
          <div className={`dm-pillar led-${o.tone}`} key={o.name}>
            <h4>{o.name}</h4>
            <ul>{o.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="wb-arrow" aria-hidden="true">↓</p>
      <div className="dm-out" aria-hidden="true">
        <strong>Weekly capital review</strong>
        <span>Decision pending</span>
      </div>
    </div>
  )
}
