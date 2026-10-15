import { useEffect, useState } from 'react'
import { site, contact } from '../data/site.js'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.title = `Contact | ${site.name}`
    return () => { document.title = `${site.name} | ${site.role}` }
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <>
      <header className="container case-hero">
        <Reveal as="p" className="eyebrow">Contact</Reveal>
        <Reveal delay={60}><h1 className="page-title">{contact.title}</h1></Reveal>
        <Reveal as="p" className="lede" delay={120}>{contact.lede}</Reveal>
      </header>

      <section className="container contact-grid" aria-label="Ways to reach me">
        <Reveal className="contact-card contact-primary">
          <p className="eyebrow">Email</p>
          <a className="contact-big" href={`mailto:${site.email}`}>{site.email}</a>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>Email me</a>
            <button className="btn btn-secondary" type="button" onClick={copyEmail}>
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>
          <p className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</p>
        </Reveal>

        <Reveal className="contact-card" delay={80}>
          <p className="eyebrow">LinkedIn</p>
          <p className="contact-mid">linkedin.com/in/lainey-creighton</p>
          <a className="btn btn-secondary" href={site.linkedin} target="_blank" rel="noreferrer">
            View profile <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      </section>

      <section className="section container" aria-labelledby="facts-title">
        <Reveal>
          <h2 id="facts-title" className="sr-only">Quick facts</h2>
          <dl className="facts">
            {contact.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  )
}
