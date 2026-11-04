import { useEffect, useState } from 'react'
import './App.css'
import Products from './Products'
import MeetMaye from './MeetMaye'
import ThemeToggle from './ThemeToggle'
import VectorExhibit, { VectorImage } from './VectorExhibit'

const exhibits = ['01', '02', '03']
const getRoute = () => {
  const route = window.location.hash.slice(1)
  return ['collections', 'products', 'about', ...exhibits.map(id => `exhibit-${id}`)].includes(route) ? route : 'home'
}
const Arrow = () => <span aria-hidden="true">↗</span>
const indesignPath = '/collections/indesign/'
const rasterPath = '/collections/raster/'

function RasterImage({ collage = false, card = false }) {
  const name = collage ? 'photo-collage' : 'before-after'
  return (
    <img
      className="raster-image"
      src={`${rasterPath}${name}-1280.jpg`}
      srcSet={`${rasterPath}${name}-640.jpg 640w, ${rasterPath}${name}-1280.jpg 1280w, ${rasterPath}${name}-1920.jpg 1920w`}
      sizes={card ? '(max-width: 760px) 100vw, 30vw' : '(max-width: 760px) 100vw, (max-width: 1392px) 92vw, 1280px'}
      width="3508"
      height="2480"
      loading="lazy"
      alt={collage
        ? 'Nature’s Beauty photo collage: overlapping white-bordered photographs of red and purple flowers, a blue sky, and a coastal sunset on a pale green background.'
        : 'Before and After portrait comparison, with the original on the left and a warmer, more saturated version on the right against a purple wall.'}
    />
  )
}

function MagazineImage({ second = false, hero = false }) {
  const name = second ? 'Magazine2' : 'Magazine'
  return (
    <img
      className="magazine-image"
      src={`${indesignPath}${name}-1280.jpg`}
      srcSet={`${indesignPath}${name}-640.jpg 640w, ${indesignPath}${name}-1280.jpg 1280w`}
      sizes={hero ? '(max-width: 760px) 100vw, 45vw' : '(max-width: 760px) 100vw, 50vw'}
      width="2480"
      height="3508"
      loading={hero ? 'eager' : 'lazy'}
      fetchPriority={hero ? 'high' : 'auto'}
      alt={second
        ? 'Marielle Studio fashion layout with a red plaid dress on a cream background, titled The Everyday Dress.'
        : 'Marielle magazine cover with gold lettering over a café portrait, subtitled Life, Style, Stories. Volume 01, September 2026, Personal Edition.'}
    />
  )
}

function Artwork({ number = '01', hero = false }) {
  if (number === '01') return <div className={`artwork magazine-frame${hero ? ' art-hero' : ''}`}><MagazineImage hero={hero} /></div>
  if (number === '02') return <div className="artwork raster-frame"><RasterImage collage card /></div>
  return <div className="artwork vector-frame"><VectorImage card /></div>
}
function Card({ number }) {
  if (number === '02') return (
    <a className="exhibit-card" href="#exhibit-02">
      <Artwork number={number} />
      <div className="card-caption"><div><p className="eyebrow">EXHIBIT 02 · RASTER GRAPHICS</p><h3>Color & perspective</h3></div><span className="circle-arrow"><Arrow /></span></div>
      <p className="card-note">Portrait editing & nature photo collage</p>
    </a>
  )
  if (number === '01') return (
    <a className="exhibit-card" href="#exhibit-01">
      <Artwork number={number} />
      <div className="card-caption"><div><p className="eyebrow">EXHIBIT 01 · INDESIGN</p><h3>Marielle</h3></div><span className="circle-arrow"><Arrow /></span></div>
      <p className="card-note">Magazine cover & fashion layout</p>
    </a>
  )
  return <a className="exhibit-card" href="#exhibit-03"><Artwork number="03" /><div className="card-caption"><div><p className="eyebrow">EXHIBIT 03 · VECTOR GRAPHICS</p><h3>Modern beauty</h3></div><span className="circle-arrow"><Arrow /></span></div><p className="card-note">Marielle brand identity & design studies</p></a>
}
const Gallery = () => <div className="gallery-grid">{exhibits.map(number => <Card key={number} number={number} />)}</div>
function Home() {
  return <><section className="home-hero shell"><div className="hero-copy"><p className="eyebrow"><span className="tiny-star">✳</span> A SPACE FOR DISCOVERY</p><h1>Every piece.<br />A <em>world</em><br />within.</h1><p className="intro">An invitation to pause, look closer, and discover the stories held within a collection.</p><a href="#collections" className="button">Explore the collection <Arrow /></a><p className="hero-footnote"><span /> Take your time. There is much to discover.</p></div><div className="hero-display"><div className="display-top"><span>THE MAIYE COLLECTION</span><span>NO. 001</span></div><Artwork hero /><div className="display-caption"><span>Marielle — Personal Edition.</span><i>InDesign · September 2026</i></div></div></section><div className="invitation"><span>LOOK CLOSELY</span><b aria-hidden="true">✳</b><span>WONDER FREELY</span><b aria-hidden="true">✳</b><span>STAY A LITTLE LONGER</span></div><section className="shell collection-section"><div className="section-heading"><div><p className="eyebrow">THE GALLERY</p><h2>Room for <em>discovery.</em></h2></div><a className="text-link" href="#collections">View the collection <Arrow /></a></div><Gallery /></section><Products /><MeetMaye /><section className="about-strip shell"><span className="large-star" aria-hidden="true">✳</span><div><p className="eyebrow">BEYOND THE FRAME</p><h2>Some things deserve<br />a closer <em>look.</em></h2></div><div><p>A museum is a space to be curious. Here, each piece will have room to breathe, and every story a place to unfold.</p><a className="text-link" href="#about">About the museum <Arrow /></a></div></section></>
}
function Collections() {
  return <section className="shell inner-page"><div className="page-intro"><p className="eyebrow">EXPLORE AT YOUR OWN PACE</p><h1>The <em>collection.</em></h1><p className="intro">A gallery of stories, waiting to unfold. Choose an exhibit to step inside.</p></div><div className="gallery-toolbar"><span>ALL EXHIBITS</span><span>03 EXHIBITS</span></div><Gallery /><p className="collection-notice">Explore three rooms: InDesign, Raster Graphics, and Vector Graphics.</p></section>
}
function About() {
  return <><section className="shell inner-page about-page"><div className="page-intro"><p className="eyebrow">THE IDEA BEHIND THE SPACE</p><h1>A place to<br /><em>look closer.</em></h1><p className="intro">Welcome to Maiye Museum, a digital space for a collection and the stories it will hold.</p></div><div className="about-story"><span className="large-star" aria-hidden="true">✳</span><h2>Made for<br /><em>curiosity.</em></h2><p>Walk through the gallery at your own pace. Spend a moment with a piece, open its story, and follow your curiosity to the next.</p><p>This museum is still taking shape. The story behind its collection will find its home here.</p><a className="text-link" href="#collections">Step into the gallery <Arrow /></a></div></section><MeetMaye /></>
}
function Exhibit({ number }) {
  if (number === '01') return <InDesignExhibit />
  if (number === '02') return <RasterExhibit />
  return <VectorExhibit />
}

function InDesignExhibit() {
  return (
    <section className="shell inner-page indesign-exhibit">
      <a href="#collections" className="text-link back-link">← Back to the collection</a>
      <div className="exhibit-detail">
        <a className="original-art-link" href={`${indesignPath}Magazine.png`} target="_blank" rel="noopener noreferrer" aria-label="Open the Marielle magazine cover at full resolution in a new tab"><Artwork number="01" /></a>
        <div className="exhibit-story">
          <p className="eyebrow">EXHIBIT 01 / INDESIGN</p>
          <h1>Marielle.<br /><em>A personal edition.</em></h1>
          <p className="intro">Life, style, and stories, brought together through editorial design.</p>
          <dl>
            <div><dt>DISCIPLINE</dt><dd>InDesign · Editorial design</dd></div>
            <div><dt>ISSUE</dt><dd>Volume 01 · September 2026</dd></div>
            <div><dt>ON DISPLAY</dt><dd>Magazine cover & fashion layout</dd></div>
          </dl>
          <p>A café portrait anchors the magazine cover. Gold lettering, white cover lines, and a personal feature bring its life-and-style theme into focus.</p>
          <div className="exhibit-actions"><a className="button" href={`${indesignPath}Magazine.pdf`} target="_blank" rel="noopener noreferrer">Open magazine PDF <Arrow /></a><a className="text-link" href={`${indesignPath}Magazine.pdf`} download="Marielle-Magazine.pdf">Download PDF ↓</a></div>
          <p className="viewing-note">Select either artwork to open the full-resolution image. The PDF opens in a new tab.</p>
        </div>
      </div>
      <section className="companion-layout" aria-labelledby="fashion-title">
        <div className="companion-story"><p className="eyebrow">A SECOND LOOK / FASHION LAYOUT</p><h2 id="fashion-title">The everyday<br /><em>dress.</em></h2><p>A Marielle Studio layout pairs a red plaid dress with a warm cream background, rust-colored typography, and a fine border.</p><p>From the cover to the fashion page, the exhibit explores how photographs, type, and spacing give a printed piece its character.</p><a className="text-link" href={`${indesignPath}Magazine2.png`} target="_blank" rel="noopener noreferrer">View full-resolution layout <Arrow /></a></div>
        <figure><a className="original-art-link" href={`${indesignPath}Magazine2.png`} target="_blank" rel="noopener noreferrer" aria-label="Open The Everyday Dress layout at full resolution in a new tab"><MagazineImage second /></a><figcaption><span>MARIELLE STUDIO</span><span>Fashion · Lifestyle · Everyday</span></figcaption></figure>
      </section>
      <nav className="exhibit-pagination" aria-label="Exhibits"><a className="text-link" href="#collections">Return to gallery</a><a className="text-link" href="#exhibit-02">Next exhibit →</a></nav>
    </section>
  )
}
function RasterExhibit() {
  return (
    <section className="shell inner-page raster-exhibit">
      <a href="#collections" className="text-link back-link">← Back to the collection</a>
      <div className="raster-intro">
        <div><p className="eyebrow">EXHIBIT 02 / RASTER GRAPHICS</p><h1>Color.<br /><em>A new perspective.</em></h1></div>
        <div className="raster-summary"><p className="intro">Two ways of seeing a photograph: through a change in color, and through the company it keeps.</p><dl><div><dt>DISCIPLINE</dt><dd>Raster graphics</dd></div><div><dt>ON DISPLAY</dt><dd>Portrait comparison & photo collage</dd></div></dl></div>
      </div>
      <section className="raster-work" aria-labelledby="comparison-title">
        <div className="raster-work-heading"><div><p className="eyebrow">WORK 01 / PORTRAIT EDITING</p><h2 id="comparison-title">Before & <em>after.</em></h2></div><p>The supplied comparison places the original portrait beside an edited version, showing a shift toward warmer tones and richer reds and purples.</p></div>
        <figure><a className="original-art-link" href={`${rasterPath}before-after.png`} target="_blank" rel="noopener noreferrer" aria-label="Open the complete Before and After comparison at full resolution in a new tab"><RasterImage /></a><figcaption><span>BEFORE & AFTER</span><span>Original left · Edited right</span></figcaption></figure>
        <div className="raster-work-actions"><a className="text-link" href={`${rasterPath}before-after.png`} target="_blank" rel="noopener noreferrer">View full-resolution comparison <Arrow /></a><a className="text-link" href={`${rasterPath}before-after.png`} download="Before-and-After.png">Download original PNG ↓</a></div>
      </section>
      <section className="raster-work" aria-labelledby="collage-title">
        <div className="raster-work-heading"><div><p className="eyebrow">WORK 02 / PHOTO COLLAGE</p><h2 id="collage-title">Nature’s <em>beauty.</em></h2></div><p>Flowers, blue skies, and a coastal sunset meet in an overlapping arrangement. White photo borders and a pale green background hold the composition together.</p></div>
        <figure><a className="original-art-link" href={`${rasterPath}photo-collage.png`} target="_blank" rel="noopener noreferrer" aria-label="Open the complete Nature’s Beauty collage at full resolution in a new tab"><RasterImage collage /></a><figcaption><span>NATURE’S BEAUTY</span><span>Photo collage</span></figcaption></figure>
        <div className="raster-work-actions"><a className="text-link" href={`${rasterPath}photo-collage.png`} target="_blank" rel="noopener noreferrer">View full-resolution collage <Arrow /></a><a className="text-link" href={`${rasterPath}photo-collage.png`} download="Natures-Beauty-Photo-Collage.png">Download original PNG ↓</a></div>
      </section>
      <nav className="exhibit-pagination" aria-label="Exhibits"><a className="text-link" href="#exhibit-01">← Previous exhibit</a><a className="text-link" href="#exhibit-03">Next exhibit →</a></nav>
    </section>
  )
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
    const title = {
      home: 'A World Within',
      collections: 'The Collection',
      products: 'Products',
      about: 'About the Museum',
      'exhibit-01': 'Marielle — InDesign',
      'exhibit-02': 'Color & Perspective — Raster Graphics',
      'exhibit-03': 'Modern Beauty — Vector Graphics',
    }[route] ?? `Exhibit ${route.slice(-2)}`
    document.title = `${title} — Maiye Museum`
  }, [route])
  const active = route.startsWith('exhibit-') ? 'collections' : route
  return <><a href="#main-content" className="skip-link">Skip to content</a><header className="site-header shell"><a href="#home" className="wordmark" aria-label="Maiye Museum home">maiye<span>MUSEUM</span></a><nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{[['home', 'Home'], ['collections', 'Collections'], ['products', 'Products'], ['about', 'About']].map(([key, label]) => <a key={key} href={`#${key}`} aria-current={active === key ? 'page' : undefined}>{label}</a>)}</nav><div className="header-actions"><ThemeToggle /><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button></div></header><main id="main-content" tabIndex={-1}>{route === 'home' ? <Home /> : route === 'collections' ? <Collections /> : route === 'products' ? <Products standalone /> : route === 'about' ? <About /> : <Exhibit number={route.slice(-2)} />}</main><footer className="site-footer shell"><a className="wordmark" href="#home">maiye<span>MUSEUM</span></a><p>A little wonder. A lasting impression.</p><span>© {new Date().getFullYear()} Maiye Museum</span><a href="#collections">Explore <Arrow /></a></footer></>
}
export default App
