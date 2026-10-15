import { Link } from 'react-router-dom'

// Shown for any address that doesn't match a page.
export default function ComingSoon() {
  return (
    <section className="section container narrow">
      <p className="eyebrow">Page not found</p>
      <h1 className="page-title">That page doesn't exist.</h1>
      <p className="lede">The link may be old or mistyped.</p>
      <p style={{ marginTop: 24 }}><Link className="btn btn-primary" to="/">Back to home</Link></p>
    </section>
  )
}
