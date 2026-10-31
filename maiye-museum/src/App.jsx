import { useEffect, useState } from 'react'
import './App.css'

const exhibits = ['01', '02', '03']
const getRoute = () => {
  const route = window.location.hash.slice(1)
  return ['collections', 'about', ...exhibits.map(id => `exhibit-${id}`)].includes(route) ? route : 'home'
}
const Arrow = () => <span aria-hidden="true">↗</span>
function Artwork({ number = '01', hero = false }) {
  return <div role="img" aria-label={`Image placeholder for exhibit ${number}`} className={`artwork art-${number}${hero ? ' art-hero' : ''}`}><div className="art-inner"><div className="arch"><span className="orb" /></div><span className="art-note">IMAGE TO BE REVEALED</span></div><span className="art-number">{number}</span></div>
}
function Card({ number }) {
  return <a className="exhibit-card" href={`#exhibit-${number}`}><Artwork number={number} /><div className="card-caption"><div><p className="eyebrow">EXHIBIT {number}</p><h3>A story to come</h3></div><span className="circle-arrow"><Arrow /></span></div><p className="card-note">Reserved for the collection</p></a>
}
const Gallery = () => <div className="gallery-grid">{exhibits.map(number => <Card key={number} number={number} />)}</div>
function Home() {
  return <><section className="home-hero shell"><div className="hero-copy"><p className="eyebrow"><span className="tiny-star">✳</span> A SPACE FOR DISCOVERY</p><h1>Every piece.<br />A <em>world</em><br />within.</h1><p className="intro">An invitation to pause, look closer, and discover the stories held within a collection.</p><a href="#collections" className="button">Explore the collection <Arrow /></a><p className="hero-footnote"><span /> Take your time. There is much to discover.</p></div><div className="hero-display"><div className="display-top"><span>THE MAIYE COLLECTION</span><span>NO. 001</span></div><Artwork hero /><div className="display-caption"><span>A place for something meaningful.</span><i>Collection preview</i></div></div></section><div className="invitation"><span>LOOK CLOSELY</span><b aria-hidden="true">✳</b><span>WONDER FREELY</span><b aria-hidden="true">✳</b><span>STAY A LITTLE LONGER</span></div><section className="shell collection-section"><div className="section-heading"><div><p className="eyebrow">THE GALLERY</p><h2>Room for <em>discovery.</em></h2></div><a className="text-link" href="#collections">View the collection <Arrow /></a></div><Gallery /></section><section className="about-strip shell"><span className="large-star" aria-hidden="true">✳</span><div><p className="eyebrow">BEYOND THE FRAME</p><h2>Some things deserve<br />a closer <em>look.</em></h2></div><div><p>A museum is a space to be curious. Here, each piece will have room to breathe, and every story a place to unfold.</p><a className="text-link" href="#about">About the museum <Arrow /></a></div></section></>
}
function Collections() {
  return <section className="shell inner-page"><div className="page-intro"><p className="eyebrow">EXPLORE AT YOUR OWN PACE</p><h1>The <em>collection.</em></h1><p className="intro">A gallery of stories, waiting to unfold. Choose an exhibit to step inside.</p></div><div className="gallery-toolbar"><span>ALL EXHIBITS</span><span>03 RESERVED SPACES</span></div><Gallery /><p className="collection-notice">The gallery is taking shape. Images, titles, and stories will be revealed here.</p></section>
}
function About() {
  return <section className="shell inner-page about-page"><div className="page-intro"><p className="eyebrow">THE IDEA BEHIND THE SPACE</p><h1>A place to<br /><em>look closer.</em></h1><p className="intro">Welcome to Maiye Museum, a digital space for a collection and the stories it will hold.</p></div><div className="about-story"><span className="large-star" aria-hidden="true">✳</span><h2>Made for<br /><em>curiosity.</em></h2><p>Walk through the gallery at your own pace. Spend a moment with a piece, open its story, and follow your curiosity to the next.</p><p>This museum is still taking shape. The story behind its collection will find its home here.</p><a className="text-link" href="#collections">Step into the gallery <Arrow /></a></div></section>
}
function Exhibit({ number }) {
  const index = exhibits.indexOf(number)
  return <section className="shell inner-page"><a href="#collections" className="text-link back-link">← Back to the collection</a><div className="exhibit-detail"><Artwork number={number} /><div className="exhibit-story"><p className="eyebrow">THE MAIYE COLLECTION / {number}</p><h1>A story<br /><em>to come.</em></h1><p className="intro">A space reserved for a piece of the collection.</p><dl><div><dt>EXHIBIT</dt><dd>{number}</dd></div><div><dt>TITLE & CAPTION</dt><dd>To be revealed</dd></div></dl><p>The image and its story will be displayed here as the museum takes shape.</p></div></div><nav className="exhibit-pagination" aria-label="Exhibits"><a className="text-link" href={index > 0 ? `#exhibit-${exhibits[index - 1]}` : '#collections'}>{index > 0 ? '← Previous exhibit' : 'Return to gallery'}</a><a className="text-link" href={index < exhibits.length - 1 ? `#exhibit-${exhibits[index + 1]}` : '#collections'}>{index < exhibits.length - 1 ? 'Next exhibit →' : 'View all exhibits'}</a></nav></section>
}
function App() {
  const [route, setRoute] = useState(getRoute)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const navigate = () => {
      if (window.location.hash === '#main-content') return
      setRoute(getRoute())
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
    window.addEventListener('hashchange', navigate)
    return () => window.removeEventListener('hashchange', navigate)
  }, [])
  useEffect(() => {
    const title = route.startsWith('exhibit-') ? `Exhibit ${route.slice(-2)}` : { home: 'A World Within', collections: 'The Collection', about: 'About the Museum' }[route]
    document.title = `${title} — Maiye Museum`
  }, [route])
  const active = route.startsWith('exhibit-') ? 'collections' : route
  return <><a href="#main-content" className="skip-link">Skip to content</a><header className="site-header shell"><a href="#home" className="wordmark" aria-label="Maiye Museum home">maiye<span>MUSEUM</span></a><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button><nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{[['home', 'Home'], ['collections', 'Collections'], ['about', 'About']].map(([key, label]) => <a key={key} href={`#${key}`} aria-current={active === key ? 'page' : undefined}>{label}</a>)}</nav><span className="header-note">A WORLD WITHIN.</span></header><main id="main-content" tabIndex={-1}>{route === 'home' ? <Home /> : route === 'collections' ? <Collections /> : route === 'about' ? <About /> : <Exhibit number={route.slice(-2)} />}</main><footer className="site-footer shell"><a className="wordmark" href="#home">maiye<span>MUSEUM</span></a><p>A little wonder. A lasting impression.</p><span>© {new Date().getFullYear()} Maiye Museum</span><a href="#collections">Explore <Arrow /></a></footer></>
}
export default App
