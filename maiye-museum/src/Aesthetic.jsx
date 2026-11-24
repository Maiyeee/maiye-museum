import assets from './aestheticAssets.json'

const scenes = [
  {
    id: 'iced-drinks',
    title: 'A quiet pause',
    caption: 'Two iced drinks, deep tones, and a moment to linger.',
    alt: 'An overhead close-up of a green iced drink and a brown iced drink with clear lids and black straws on a dark table.',
  },
  {
    id: 'pendant-lights',
    title: 'Light & texture',
    caption: 'Sculptural pendant lights beneath a slatted wooden ceiling.',
    alt: 'Glowing pendant lights with curved wooden shades hanging beneath a wood-slatted ceiling, with greenery below.',
  },
  {
    id: 'gallery-wall',
    title: 'Stories in frames',
    caption: 'An intimate corner of art, color, and warm light.',
    alt: 'Black-framed artworks arranged across two gallery walls under warm amber lighting.',
  },
  {
    id: 'warm-interior',
    title: 'An evening glow',
    caption: 'Timber beams, candle-style bulbs, and little points of light.',
    alt: 'A dim interior with wooden ceiling beams, circular candle-style chandeliers, bottle shelving, plants, and glowing spherical lights.',
  },
]

export default function Aesthetic() {
  return (
    <section className="unwind-page aesthetic-page shell" aria-labelledby="aesthetic-title">
      <header className="unwind-heading">
        <div><p className="eyebrow">BEAUTY IN THE DETAILS</p><h1 id="aesthetic-title">Aesthetic</h1></div>
        <div className="unwind-intro"><p className="unwind-lead">Ordinary moments, thoughtfully seen.</p><p>Warm light, rich textures, and quiet corners. A collection of small details that set the mood.</p></div>
      </header>
      <div className="unwind-gallery sunset-gallery aesthetic-gallery">
        {scenes.map(scene => {
          const asset = assets[scene.id]
          const largest = asset.variants[asset.variants.length - 1]
          return (
            <figure className="unwind-moment aesthetic-scene" key={scene.id}>
              <a className="unwind-image-link" href={`/aesthetic/${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${scene.title.toLowerCase()} at full resolution in a new tab`}>
                <img
                  src={`/aesthetic/${largest.file}`}
                  srcSet={asset.variants.map(item => `/aesthetic/${item.file} ${item.width}w`).join(', ')}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  alt={scene.alt}
                />
              </a>
              <figcaption><h2>{scene.title}</h2><p>{scene.caption}</p><a className="text-link" href={`/aesthetic/${asset.original}`} target="_blank" rel="noopener noreferrer">View full image<span className="visually-hidden">: {scene.title} (opens in a new tab)</span></a></figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
