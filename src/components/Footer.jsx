import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{site.name} · Reno, NV · Open to remote</p>
        <ul>
          <li><a href={`mailto:${site.email}`}>Email</a></li>
          <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  )
}
