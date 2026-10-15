import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

const nav = [
  { to: '/#work', label: 'Work' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/process', label: 'Process' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark">{site.name}</Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
