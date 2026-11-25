import assets from './beachAssets.json'

const scenes = [
  {
    id: 'shaded-shore',
    title: 'Beneath the leaves',
    caption: 'Clear water, soft sand, and sunlight filtering through the trees.',
    alt: 'Turquoise water and pale sand beneath leafy branches, with a leaning tree, dappled shadows, and distant mountains across the sea.',
  },
  {
    id: 'seaside-shelter',
    title: 'A seat by the sea',
    caption: 'A shaded spot to watch the waves meet the shore.',
    alt: 'A sandy beach and blue sea viewed from an open bamboo shelter with a thatched roof and wooden seating.',
  },
]

export default function Beach() {
  return (
    <section className="unwind-page beach-page shell" aria-labelledby="beach-title">
      <header className="unwind-heading">
        <div><p className="eyebrow">BY THE WATER</p><h1 id="beach-title">Beach</h1></div>
        <div className="unwind-intro"><p className="unwind-lead">A little closer to the shore.</p><p>Clear water, leafy shade, and a quiet view of the sea. Two moments to slow down and stay awhile.</p></div>
      </header>
      <div className="unwind-gallery beach-gallery">
        {scenes.map(scene => {
          const asset = assets[scene.id]
          const largest = asset.variants[asset.variants.length - 1]
          return (
            <figure className="unwind-moment beach-scene" key={scene.id}>
              <a className="unwind-image-link" href={`/beach/${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${scene.title.toLowerCase()} at full resolution in a new tab`}>
                <img
                  src={`/beach/${largest.file}`}
                  srcSet={asset.variants.map(item => `/beach/${item.file} ${item.width}w`).join(', ')}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  alt={scene.alt}
                />
              </a>
              <figcaption><h2>{scene.title}</h2><p>{scene.caption}</p><a className="text-link" href={`/beach/${asset.original}`} target="_blank" rel="noopener noreferrer">View full image<span className="visually-hidden">: {scene.title} (opens in a new tab)</span></a></figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
