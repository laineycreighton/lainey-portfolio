import { useEffect } from 'react'
import { site } from '../data/site.js'
import { about } from '../data/about.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'

export default function About() {
  useEffect(() => {
    document.title = `About | ${site.name}`
    return () => { document.title = `${site.name} | ${site.role}` }
  }, [])

  return (
    <>
      <section className="hero container" aria-labelledby="about-title">
        <div className="hero-text">
          <Reveal as="p" className="eyebrow">About</Reveal>
          <Reveal delay={60}><h1 id="about-title" className="page-title">{about.title}</h1></Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" className="about-p" key={i} delay={120 + i * 60}>{p}</Reveal>
          ))}
        </div>
        <Reveal className="hero-photo" delay={120}>
          <Img
            src={site.headshot.src}
            alt={site.headshot.alt}
            ratio="3 / 4"
            label="Headshot"
            size="1200 × 1600 px · 3:4"
            eager
          />
        </Reveal>
      </section>

      {about.earlyPhoto?.src && (
        <section className="container" aria-label="Early live production">
          <Reveal as="figure" className="about-figure">
            <Img src={about.earlyPhoto.src} alt={about.earlyPhoto.alt} ratio="3 / 2" />
            <figcaption>{about.earlyPhoto.caption}</figcaption>
          </Reveal>
        </section>
      )}

      <section className="section container" aria-labelledby="outside-title">
        <Reveal className="narrow-block">
          <p className="eyebrow">Outside of work</p>
          <h2 id="outside-title" className="sr-only">Outside of work</h2>
          <p className="outside">{about.outside}</p>
        </Reveal>
      </section>
    </>
  )
}
