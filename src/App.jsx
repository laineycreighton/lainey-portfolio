import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Process from './pages/Process.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Capabilities from './pages/Capabilities.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Gallery />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
