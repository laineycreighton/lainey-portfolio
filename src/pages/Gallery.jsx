import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site.js'
import { gallery, galleryIntro } from '../data/gallery.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'

export default function Gallery() {
  const dialogRef = useRef(null)
  const [open, setOpen] = useState(null)
  const photos = gallery.filter((g) => g.src)

  useEffect(() => {
    document.title = `${galleryIntro.title} | ${site.name}`
    return () => { document.title = `${site.name} | ${site.role}` }
  }, [])

  function show(item) {
    setOpen(photos.indexOf(item))
    dialogRef.current?.showModal()
  }

  function step(dir) {
    setOpen((i) => (i + dir + photos.length) % photos.length)
  }

  function onKey(e) {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  const current = open !== null ? photos[open] : null

  return (
    <>
      <header className="container case-hero">
        <Reveal as="p" className="eyebrow">Gallery</Reveal>
        <Reveal delay={60}><h1 className="page-title">{galleryIntro.title}</h1></Reveal>
        <Reveal as="p" className="lede" delay={120}>{galleryIntro.lede}</Reveal>
      </header>

      <section className="container gallery-wrap" aria-label="Photos">
        <ul className="gallery">
          {gallery.map((g, i) => (
            <Reveal as="li" key={i} delay={(i % 3) * 60}>
              <figure>
                {g.src ? (
                  <button className="gallery-btn" type="button" onClick={() => show(g)} aria-label={`View larger: ${g.title}`}>
                    <Img src={g.src} alt={g.alt} ratio={g.tall ? '2 / 3' : '3 / 2'} />
                  </button>
                ) : (
                  <Img
                    src=""
                    alt={g.alt}
                    ratio={g.tall ? '2 / 3' : '3 / 2'}
                    label={g.title}
                    size={g.tall ? '1067 × 1600 px · 2:3' : '1600 × 1067 px · 3:2'}
                  />
                )}
                <figcaption>
                  <strong>{g.title}</strong>
                  <span>{g.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setOpen(null)}
        onKeyDown={onKey}
        onClick={(e) => { if (e.target === dialogRef.current) dialogRef.current.close() }}
        aria-label={current ? current.title : 'Photo viewer'}
      >
        {current && (
          <div className="lightbox-inner">
            <img src={current.src} alt={current.alt} />
            <div className="lightbox-bar">
              <p><strong>{current.title}</strong> {current.detail}</p>
              <div className="lightbox-actions">
                {photos.length > 1 && (
                  <>
                    <button type="button" className="btn btn-secondary" onClick={() => step(-1)} aria-label="Previous photo">←</button>
                    <button type="button" className="btn btn-secondary" onClick={() => step(1)} aria-label="Next photo">→</button>
                  </>
                )}
                <button type="button" className="btn btn-primary" onClick={() => dialogRef.current.close()}>Close</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
