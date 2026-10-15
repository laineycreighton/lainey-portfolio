import { useEffect } from 'react'
import { site, credentials } from '../data/site.js'
import { capabilitiesIntro, capabilityGroups } from '../data/capabilities.js'
import Reveal from '../components/Reveal.jsx'

export default function Capabilities() {
  useEffect(() => {
    document.title = `${capabilitiesIntro.title} | ${site.name}`
    return () => { document.title = `${site.name} | ${site.role}` }
  }, [])

  return (
    <>
      <header className="container case-hero">
        <Reveal as="p" className="eyebrow">Capabilities</Reveal>
        <Reveal delay={60}><h1 className="page-title">{capabilitiesIntro.title}</h1></Reveal>
        <Reveal as="p" className="lede" delay={120}>{capabilitiesIntro.lede}</Reveal>
      </header>

      <section className="container cap-grid" aria-label="Capability groups">
        {capabilityGroups.map((g, i) => (
          <Reveal as="section" className="cap-group" key={g.name} delay={(i % 2) * 80} aria-labelledby={`cap-${i}`}>
            <h2 id={`cap-${i}`}>{g.name}</h2>
            {g.note && <p className="cap-note">{g.note}</p>}
            <ul className="cap-list">
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className="section container" aria-labelledby="cert-title">
        <Reveal className="section-head">
          <p className="eyebrow">Certifications</p>
          <h2 id="cert-title">Credentials</h2>
        </Reveal>
        <ul className="creds">
          {credentials.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 60}>
              <strong>{c.name}</strong>
              <span>{c.detail}</span>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  )
}
