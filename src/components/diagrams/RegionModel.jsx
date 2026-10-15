// Three states, one standard: the shared systems every property ran on.

const states = ['Washington', 'Oregon', 'Wyoming']
const standard = ['One forecast', 'One quote structure', 'One staffing approach']

export default function RegionModel() {
  return (
    <div role="img" aria-label="Properties in Washington, Oregon, and Wyoming all running on one forecast, one quote structure, and one staffing approach">
      <p className="wb-title" aria-hidden="true">10+ properties, three states</p>
      <div className="rm-states" aria-hidden="true">
        {states.map((s) => <span className="rm-state" key={s}>{s}</span>)}
      </div>
      <p className="wb-arrow" aria-hidden="true">↓</p>
      <div className="dm-out rm-standard" aria-hidden="true">
        <strong>One standard</strong>
        <ul>{standard.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </div>
  )
}
