import assets from './sunsetAssets.json'

const scenes = [
  {
    id: 'amber-horizon',
    title: 'Amber horizon',
    caption: 'The last edge of the sun above a sea of rolling waves.',
    alt: 'A setting sun at the ocean horizon beneath a vivid orange sky, with dark waves and gold reflections in the foreground.',
  },
  {
    id: 'evening-promenade',
    title: 'Evening on the promenade',
    caption: 'Streetlights come on as the waterfront settles into evening.',
    alt: 'People seated along a waterfront promenade beside motorcycles and lit streetlights, beneath dark clouds and an orange sunset.',
  },
  {
    id: 'one-last-photograph',
    title: 'One last photograph',
    caption: 'A glowing sky, caught in the frame before the light fades.',
    alt: 'Silhouetted hands holding a phone to photograph an orange sunset over calm water and shoreline rocks.',
  },
  {
    id: 'palms-at-dusk',
    title: 'Palms at dusk',
    caption: 'Palm silhouettes and a quiet pier against the evening glow.',
    alt: 'An orange sunset reflected on the sea beside palm trees, a rocky shore, and a pier extending over the water.',
  },
]

export default function Sunset() {
  return (
    <section className="unwind-page sunset-page shell" aria-labelledby="sunset-title">
      <header className="unwind-heading">
        <div><p className="eyebrow">THE LAST LIGHT</p><h1 id="sunset-title">Sunset</h1></div>
        <div className="unwind-intro"><p className="unwind-lead">The day, in its last light.</p><p>Orange skies, quiet water, and moments worth holding onto. A small collection of sunsets to linger over.</p></div>
      </header>
      <div className="unwind-gallery sunset-gallery">
        {scenes.map(scene => {
          const asset = assets[scene.id]
          const largest = asset.variants[asset.variants.length - 1]
          return (
            <figure className="unwind-moment sunset-scene" key={scene.id}>
              <a className="unwind-image-link" href={`/sunset/${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${scene.title.toLowerCase()} at full resolution in a new tab`}>
                <img
                  src={`/sunset/${largest.file}`}
                  srcSet={asset.variants.map(item => `/sunset/${item.file} ${item.width}w`).join(', ')}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  alt={scene.alt}
                />
              </a>
              <figcaption><h2>{scene.title}</h2><p>{scene.caption}</p><a className="text-link" href={`/sunset/${asset.original}`} target="_blank" rel="noopener noreferrer">View full image<span className="visually-hidden">: {scene.title} (opens in a new tab)</span></a></figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
