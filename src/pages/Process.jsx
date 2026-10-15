import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site, framework } from '../data/site.js'
import { processIntro, values, prioritize, manage, communicate, tools } from '../data/process.js'
import Reveal from '../components/Reveal.jsx'

export default function Process() {
  useEffect(() => {
    document.title = `${processIntro.title} | ${site.name}`
    return () => { document.title = `${site.name} | ${site.role}` }
  }, [])

  return (
    <>
      <header className="container case-hero">
        <Reveal as="p" className="eyebrow">Process</Reveal>
        <Reveal delay={60}><h1 className="page-title">{processIntro.title}</h1></Reveal>
        <Reveal as="p" className="lede" delay={120}>{processIntro.lede}</Reveal>
      </header>

      <section className="section band" aria-labelledby="framework-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">My delivery framework</p>
            <h2 id="framework-title">Intake to close out.</h2>
          </Reveal>
          <ol className="framework framework-full">
            {framework.map((f, i) => (
              <Reveal as="li" key={f.step} delay={i * 70}>
                <span className="framework-num">{i + 1}</span>
                <h3>{f.step}</h3>
                <p>{f.text}</p>
                <p className="framework-output"><span>Output</span>{f.output}</p>
                <p className="pmp-tag">PMP: {f.pmp}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal as="p" className="framework-note">
            It maps to the PMP process groups. I use it because it works on a real portfolio of deadlines, not because it’s in the book.
          </Reveal>
        </div>
      </section>

      <section className="section container" aria-labelledby="values-title">
        <Reveal className="section-head">
          <p className="eyebrow">Values</p>
          <h2 id="values-title">{values.heading}</h2>
        </Reveal>
        <ul className="creds values">
          {values.items.map((v, i) => (
            <Reveal as="li" key={v.name} delay={i * 60}>
              <strong>{v.name}</strong>
              <span>{v.text}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section container" aria-labelledby="prio-title">
        <div className="split">
          <Reveal>
            <p className="eyebrow">Prioritization</p>
            <h2 id="prio-title">{prioritize.heading}</h2>
            {prioritize.body.map((p, i) => <p className="split-p" key={i}>{p}</p>)}
            <Link className="text-link" to="/work/the-war-board">See the board in the War Board case study <span aria-hidden="true">→</span></Link>
          </Reveal>
          <ol className="rules">
            {prioritize.rules.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80}>
                <span className="approach-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container" aria-labelledby="manage-title">
        <Reveal className="section-head">
          <p className="eyebrow">Vendors, budgets, and risk</p>
          <h2 id="manage-title">No surprises at delivery.</h2>
        </Reveal>
        <div className="card-row">
          {manage.map((m, i) => (
            <Reveal key={m.heading} className="info-card" delay={i * 80}>
              <h3>{m.heading}</h3>
              <p>{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="comm-title">
        <Reveal className="narrow-block">
          <p className="eyebrow">Stakeholders</p>
          <h2 id="comm-title">{communicate.heading}</h2>
          {communicate.body.map((p, i) => <p className="split-p" key={i}>{p}</p>)}
        </Reveal>
      </section>

      <section className="section container" aria-labelledby="tools-title">
        <Reveal className="section-head">
          <p className="eyebrow">Tools</p>
          <h2 id="tools-title">What I use every day.</h2>
        </Reveal>
        <ul className="tools">
          {tools.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 60}>
              <strong>{t.name}</strong>
              <span>{t.use}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <Link className="text-link" to="/capabilities">See all capabilities <span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>

      <section className="section container" aria-labelledby="proc-cta">
        <Reveal className="cta">
          <h2 id="proc-cta">See it applied.</h2>
          <p>Six case studies, each with the scope, the approach, and the result.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/#work">View my work</Link>
            <Link className="btn btn-secondary" to="/contact">Contact</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
