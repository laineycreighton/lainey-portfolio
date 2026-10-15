import { Link } from 'react-router-dom'
import { site, credentials, framework } from '../data/site.js'
import { caseStudies } from '../data/caseStudies.js'
import { gallery, galleryIntro } from '../data/gallery.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'
import CaseCard from '../components/CaseCard.jsx'

function Headline() {
  const { headline, headlineEmphasis } = site
  if (headlineEmphasis && headline.endsWith(headlineEmphasis)) {
    const lead = headline.slice(0, headline.length - headlineEmphasis.length)
    return <h1 className="hero-title">{lead}<em>{headlineEmphasis}</em></h1>
  }
  return <h1 className="hero-title">{headline}</h1>
}

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-text">
          <Reveal as="p" className="eyebrow">{site.name}</Reveal>
          <Reveal delay={80}><Headline /></Reveal>
          <Reveal as="ul" className="subline" delay={160} aria-label="Highlights">
            {site.subline.map((s) => <li key={s}>{s}</li>)}
          </Reveal>
          <Reveal className="hero-actions" delay={240}>
            <Link className="btn btn-primary" to="/#work">View my work</Link>
            <Link className="btn btn-secondary" to="/process">How I run programs</Link>
          </Reveal>
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

      <section className="container stats-wrap" aria-label="Results at a glance">
        <ul className="stats">
          {site.stats.map((s, i) => (
            <Reveal as="li" key={s.value} delay={i * 80}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="work" className="section container" aria-labelledby="work-title">
        <Reveal className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Six programs, start to finish.</h2>
          <p className="section-intro">
            Each one shows the scope, the budget, the people involved, and what changed because of it.
          </p>
        </Reveal>
        <div className="case-grid">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 80}>
              <CaseCard study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="rooms-title">
        <Reveal className="section-head">
          <p className="eyebrow">Rooms and events</p>
          <h2 id="rooms-title">{galleryIntro.lede}</h2>
        </Reveal>
        <ul className="rooms-teaser">
          {gallery.filter((g) => !g.tall).slice(0, 3).map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 80}>
              <Link to="/rooms" className="rooms-teaser-link" aria-label={`${g.title}, see the gallery`}>
                <Img src={g.src} alt={g.alt} ratio="3 / 2" label={g.title} size="1600 × 1067 px · 3:2" />
                <span>{g.title}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <Link className="text-link" to="/rooms">See the full gallery <span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>

      <section className="section band" aria-labelledby="process-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How I run programs</p>
            <h2 id="process-title">Same five steps, whether it's a single room or a $2M program.</h2>
          </Reveal>
          <ol className="framework">
            {framework.map((f, i) => (
              <Reveal as="li" key={f.step} delay={i * 70}>
                <span className="framework-num">{i + 1}</span>
                <h3>{f.step}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link className="text-link" to="/process">See how I prioritize, manage risk, and report up <span aria-hidden="true">→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section container" aria-labelledby="creds-title">
        <Reveal className="section-head">
          <p className="eyebrow">Credentials</p>
          <h2 id="creds-title">Certified to the standard.</h2>
        </Reveal>
        <ul className="creds">
          {credentials.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 60}>
              <strong>{c.name}</strong>
              <span>{c.detail}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <Link className="text-link" to="/capabilities">See all capabilities <span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>
    </>
  )
}
