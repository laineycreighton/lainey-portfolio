import { Link } from 'react-router-dom'
import Img from './Img.jsx'

export default function CaseCard({ study, index }) {
  return (
    <article className="case-card">
      <Link to={`/work/${study.slug}`} className="case-link">
        <Img
          src={study.image}
          alt={study.imageAlt}
          ratio="3 / 2"
          fallback={{ value: String(index + 1).padStart(2, '0') }}
          size="1200 × 800 px · 3:2"
        />
        <div className="case-body">
          <p className="eyebrow">
            <span className="case-num">{String(index + 1).padStart(2, '0')}</span> {study.kicker}
          </p>
          <h3>{study.title}</h3>
          <p className="case-summary">{study.summary}</p>
          {study.metric && (
            <p className="case-metric">
              <strong>{study.metric.value}</strong> {study.metric.label}
            </p>
          )}
          <span className="case-cta">Read the case study <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  )
}
