import assets from './unwindAssets.json'

const moments = [
  {
    id: 'under-the-trees',
    title: 'Under the trees',
    caption: 'Sunlit leaves, passing clouds, and a little room to breathe.',
    alt: 'Looking up at a blue sky with soft clouds framed by sunlit green tree branches.',
  },
  {
    id: 'out-at-sea',
    title: 'Out at sea',
    caption: 'Open water and a horizon that invites you to slow down.',
    alt: 'Turquoise sea viewed from beneath the canopy of an outrigger boat, with white supports and rigging in the foreground.',
  },
  {
    id: 'by-the-shore',
    title: 'By the shore',
    caption: 'Small treasures resting where the sea meets the sand.',
    alt: 'A white flower with a yellow center and a small collection of seashells arranged on gray sand.',
  },
]

export default function Unwind() {
  return (
    <section className="unwind-page shell" aria-labelledby="unwind-title">
      <header className="unwind-heading">
        <div><p className="eyebrow">A QUIETER CORNER</p><h1 id="unwind-title">Unwind</h1></div>
        <div className="unwind-intro"><p className="unwind-lead">A moment to slow down.</p><p>A little sky, a little sea, and the beauty in between. Take your time with these quiet scenes.</p></div>
      </header>
      <div className="unwind-gallery">
        {moments.map(moment => {
          const asset = assets[moment.id]
          const largest = asset.variants[asset.variants.length - 1]
          return (
            <figure className="unwind-moment" key={moment.id}>
              <a className="unwind-image-link" href={`/unwind/${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${moment.title.toLowerCase()} at full resolution in a new tab`}>
                <img
                  src={`/unwind/${largest.file}`}
                  srcSet={asset.variants.map(item => `/unwind/${item.file} ${item.width}w`).join(', ')}
                  sizes="(max-width: 760px) 100vw, 33vw"
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  alt={moment.alt}
                />
              </a>
              <figcaption><h2>{moment.title}</h2><p>{moment.caption}</p><a className="text-link" href={`/unwind/${asset.original}`} target="_blank" rel="noopener noreferrer">View full image<span className="visually-hidden">: {moment.title} (opens in a new tab)</span></a></figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
