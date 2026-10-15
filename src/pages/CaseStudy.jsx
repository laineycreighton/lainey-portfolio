import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'
import { site } from '../data/site.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'
import diagrams from '../components/diagrams/index.js'
import ComingSoon from './ComingSoon.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const study = caseStudies[index]

  useEffect(() => {
    if (study) document.title = `${study.title} | ${site.name}`
    return () => { document.title = `${site.name} | ${site.role}` }
  }, [study])

  if (!study || !study.detail) return <ComingSoon />

  const d = study.detail
  const next = caseStudies[(index + 1) % caseStudies.length]
  const Diagram = d.diagram ? diagrams[d.diagram] : null

  return (
    <article className="case-page">
      <header className="container case-hero">
        <Reveal>
          <Link className="back-link" to="/#work"><span aria-hidden="true">←</span> All work</Link>
        </Reveal>
        <Reveal as="p" className="eyebrow" delay={60}>
          Case study {String(index + 1).padStart(2, '0')} · {study.kicker}
        </Reveal>
        <Reveal delay={120}><h1 className="page-title">{study.title}</h1></Reveal>
        <Reveal as="p" className="lede" delay={180}>{study.summary}</Reveal>
      </header>

      <div className="container">
        <Reveal className="case-hero-img">
          <Img
            src={d.heroImage}
            alt={d.heroImageAlt}
            ratio="16 / 9"
            label={d.heroImageAlt}
            size="1600 × 900 px · 16:9"
            fallback={{ value: String(index + 1).padStart(2, '0') }}
          />
        </Reveal>
      </div>

      <div className="container case-layout">
        <aside className="scope" aria-labelledby="scope-title">
          <Reveal>
            <h2 id="scope-title" className="scope-title">Scope at a glance</h2>
            <dl>
              {d.scope.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="tags" aria-label="Skills shown">
              {d.skills.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Reveal>
        </aside>

        <div className="case-content">
          <Reveal as="section" aria-labelledby="challenge-title">
            <h2 id="challenge-title">The challenge</h2>
            {d.challenge.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>

          <section aria-labelledby="approach-title">
            <Reveal><h2 id="approach-title">My approach</h2></Reveal>
            <ol className="approach">
              {d.approach.map((step, i) => (
                <Reveal as="li" key={step.heading}>
                  <span className="approach-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.heading}</h3>
                  {step.body.map((p, j) => <p key={j}>{p}</p>)}
                </Reveal>
              ))}
            </ol>
          </section>

          {Diagram && (
            <Reveal as="figure" className="diagram">
              <Diagram />
              {d.diagramCaption && <figcaption>{d.diagramCaption}</figcaption>}
            </Reveal>
          )}

          <section aria-labelledby="result-title">
            <Reveal><h2 id="result-title">{d.resultHeading || 'The result'}</h2></Reveal>
            <ul className="results">
              {d.results.map((r, i) => (
                <Reveal as="li" key={r.label} delay={i * 80}>
                  <span className="result-value">{r.value}</span>
                  <span className="result-label">{r.label}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              {d.resultText.map((p, i) => <p key={i}>{p}</p>)}
            </Reveal>
          </section>
        </div>
      </div>

      <nav className="container next-case" aria-label="Next case study">
        <Link to={`/work/${next.slug}`} className="next-link">
          <span className="eyebrow">Next case study</span>
          <span className="next-title">{next.title} <span aria-hidden="true">→</span></span>
        </Link>
      </nav>
    </article>
  )
}
