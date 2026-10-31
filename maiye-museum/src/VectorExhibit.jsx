import assets from './vectorAssets.json'

const base = '/collections/vector/'
const works = {
  logo: { title: 'The signature', note: 'Primary & secondary logo', alt: 'Marielle Modern Beauty logo sheet showing a gold M and leaf monogram on rose beige, with a secondary gold wordmark on ivory.' },
  'color-palette': { title: 'A considered palette', note: 'Primary & secondary colors', alt: 'Marielle color palette with soft blush, rose beige, champagne gold, deep brown, ivory, dusty rose, warm taupe, and sage swatches.' },
  fonts: { title: 'A voice in type', note: 'Cormorant Garamond & Montserrat', alt: 'Marielle typography sheet pairing Cormorant Garamond and Montserrat, with font weights, alphabets, numbers, and wordmark examples.' },
  moodboard: { title: 'The world of Marielle', note: 'Brand moodboard', alt: 'Marielle moodboard combining the monogram, blush and gold colors, letterhead, business cards, and a perfume bottle reference.' },
  'business-card-front': { title: 'Business card / front', note: 'The brand at a glance', alt: 'Front of the Marielle business card: a gold leaf monogram and Modern Beauty wordmark centered on a soft blush background.' },
  'business-card-back': { title: 'Business card / back', note: 'Contact layout', alt: 'Back of the Marielle business card with a gold border, monogram, and contact information arranged beside black icons.' },
  letterhead: { title: 'A letter, with character', note: 'Branded correspondence', alt: 'Marielle letterhead with a gold monogram, fine black border, sample letter, script signature, and contact footer.' },
  mockup: { title: 'From mark to object', note: 'Product mockup', alt: 'Marielle product mockup: a clear bottle with a black cap and a blush label carrying the gold monogram, photographed in directional light.' },
  'before-after': { title: 'Before & after', note: 'Portrait study · JPG edition', alt: 'Side-by-side portrait study showing the original at left and a warmer, more saturated edit at right.' },
  'photo-collage': { title: 'Nature’s beauty', note: 'Photo collage · Gold edition', alt: 'Nature’s Beauty collage with overlapping white-bordered flower and sunset photographs, tape details, and a gold background.' },
}

export function VectorImage({ id = 'business-card-front', card = false }) {
  const asset = assets[id]
  const largest = asset.variants[asset.variants.length - 1]
  return <img
    className="vector-image"
    src={`${base}${largest.file}`}
    srcSet={asset.variants.map(item => `${base}${item.file} ${item.width}w`).join(', ')}
    sizes={card ? '(max-width: 760px) 100vw, 30vw' : '(max-width: 760px) 100vw, 50vw'}
    width={asset.width}
    height={asset.height}
    loading="lazy"
    alt={works[id].alt}
  />
}

function VectorWork({ id }) {
  const asset = assets[id]
  const work = works[id]
  const isPdf = asset.original.endsWith('.pdf')
  return (
    <article className="vector-work">
      <figure>
        <a className="original-art-link" href={`${base}${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${work.title} ${isPdf ? 'PDF' : 'original image'} in a new tab`}><VectorImage id={id} /></a>
        <figcaption><span>{work.note}</span><span>{isPdf ? 'PDF' : 'JPG'}</span></figcaption>
      </figure>
      <h3>{work.title}</h3>
      <div className="vector-actions">
        <a className="text-link" href={`${base}${asset.original}`} target="_blank" rel="noopener noreferrer">{isPdf ? 'Open PDF' : 'View original'} <span aria-hidden="true">↗</span></a>
        <a className="text-link" href={`${base}${asset.original}`} download={asset.original}>Download {isPdf ? 'PDF' : 'JPG'} <span aria-hidden="true">↓</span></a>
      </div>
    </article>
  )
}

export default function VectorExhibit() {
  return (
    <section className="shell inner-page vector-exhibit">
      <a href="#collections" className="text-link back-link">← Back to the collection</a>
      <div className="vector-intro">
        <div><p className="eyebrow">EXHIBIT 03 / VECTOR GRAPHICS</p><h1>Marielle.<br /><em>Modern beauty.</em></h1></div>
        <div><p className="intro">A visual identity, from its first mark to the objects that carry it. Explore the Marielle brand kit in blush, gold, and ivory.</p><dl><div><dt>DISCIPLINE</dt><dd>Vector graphics · Brand identity</dd></div><div><dt>ON DISPLAY</dt><dd>10 pieces · Brand kit & image studies</dd></div></dl></div>
      </div>
      <section className="vector-section" aria-labelledby="identity-title">
        <div className="vector-section-heading"><div><p className="eyebrow">01 / THE VISUAL LANGUAGE</p><h2 id="identity-title">A mark of <em>identity.</em></h2></div><p>A leaf-shaped monogram, a warm palette, and a pairing of Cormorant Garamond with Montserrat form the foundation of the brand.</p></div>
        <div className="vector-grid">{['logo', 'color-palette', 'fonts', 'moodboard'].map(id => <VectorWork key={id} id={id} />)}</div>
      </section>
      <section className="vector-section" aria-labelledby="stationery-title">
        <div className="vector-section-heading"><div><p className="eyebrow">02 / IN THE DETAILS</p><h2 id="stationery-title">An identity in <em>hand.</em></h2></div><p>The monogram carries through both sides of the business card and onto the letterhead, with fine borders and generous space.</p></div>
        <div className="vector-grid">{['business-card-front', 'business-card-back'].map(id => <VectorWork key={id} id={id} />)}</div>
        <div className="vector-grid vector-application-grid"><VectorWork id="letterhead" /><div className="vector-application"><p className="eyebrow">03 / BEYOND THE PAGE</p><h2>From a drawing<br />to an <em>object.</em></h2><p>The product mockup places the blush label and gold identity onto a bottle, showing how the design translates to a physical surface.</p><VectorWork id="mockup" /></div></div>
      </section>
      <section className="vector-section" aria-labelledby="studies-title">
        <div className="vector-section-heading"><div><p className="eyebrow">04 / ADDITIONAL STUDIES</p><h2 id="studies-title">Another <em>perspective.</em></h2></div><p>The folder also includes a portrait comparison and a gold-background nature collage, with tape details and a different arrangement from the Raster Graphics edition.</p></div>
        <div className="vector-grid">{['before-after', 'photo-collage'].map(id => <VectorWork key={id} id={id} />)}</div>
        <a className="text-link related-exhibit" href="#exhibit-02">Explore the Raster Graphics exhibit <span aria-hidden="true">↗</span></a>
      </section>
      <nav className="exhibit-pagination" aria-label="Exhibits"><a className="text-link" href="#exhibit-02">← Previous exhibit</a><a className="text-link" href="#collections">View all exhibits</a></nav>
    </section>
  )
}
