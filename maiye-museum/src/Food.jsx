import assets from './foodAssets.json'

const dishes = [
  {
    id: 'cafe-table',
    title: 'At the café',
    caption: 'Sandwiches, fries, a berry pastry, and iced drinks at the table.',
    alt: 'A café table with a sandwich and fries, a blueberry pastry, and two tall green iced drinks.',
  },
  {
    id: 'ramen-for-two',
    title: 'Ramen for two',
    caption: 'Two bowls of noodles, golden toppings, and warm broth.',
    alt: 'Two black bowls of ramen with sliced meat, a breaded cutlet, corn, green onions, and an egg on a wooden table.',
  },
  {
    id: 'crab-in-sauce',
    title: 'Crab in sauce',
    caption: 'Bright shells and a rich sauce, fresh from the pan.',
    alt: 'Red-orange crab pieces coated in a thick sauce, with steam rising from the pan.',
  },
  {
    id: 'chicken-and-eggs',
    title: 'Chicken & eggs',
    caption: 'Chicken pieces and boiled eggs in a glossy brown sauce.',
    alt: 'Chicken pieces and whole and halved boiled eggs simmering in brown sauce with a bay leaf.',
  },
  {
    id: 'sauteed-greens',
    title: 'Sautéed greens',
    caption: 'Leafy greens and tender stems, glistening in the pan.',
    alt: 'Bright green leafy vegetables and long stems sautéed with garlic and small red pepper pieces in a black pan.',
  },
  {
    id: 'golden-bites',
    title: 'Golden bites',
    caption: 'Bite-sized pieces with crisp, browned edges.',
    alt: 'Golden-brown meat pieces with crisp edges and visible layers of fat in a clear container.',
  },
  {
    id: 'saucy-shrimp',
    title: 'Saucy shrimp',
    caption: 'Shell-on shrimp coated in a glossy sauce.',
    alt: 'Orange shell-on shrimp coated in a glossy sauce with chopped garlic and seasoning in a metal pan.',
  },
]

export default function Food() {
  return (
    <section className="unwind-page food-page shell" aria-labelledby="food-title">
      <header className="unwind-heading">
        <div><p className="eyebrow">MOMENTS AT THE TABLE</p><h1 id="food-title">Food</h1></div>
        <div className="unwind-intro"><p className="unwind-lead">A little comfort, one plate at a time.</p><p>From café tables to bowls of noodles and dishes from the pan. A collection of color, texture, and everyday comfort.</p></div>
      </header>
      <div className="unwind-gallery food-gallery">
        {dishes.map(dish => {
          const asset = assets[dish.id]
          const largest = asset.variants[asset.variants.length - 1]
          return (
            <figure className="unwind-moment food-scene" key={dish.id}>
              <a className="unwind-image-link" href={`/food/${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${dish.title.toLowerCase()} at full resolution in a new tab`}>
                <img
                  src={`/food/${largest.file}`}
                  srcSet={asset.variants.map(item => `/food/${item.file} ${item.width}w`).join(', ')}
                  sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  alt={dish.alt}
                />
              </a>
              <figcaption><h2>{dish.title}</h2><p>{dish.caption}</p><a className="text-link" href={`/food/${asset.original}`} target="_blank" rel="noopener noreferrer">View full image<span className="visually-hidden">: {dish.title} (opens in a new tab)</span></a></figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
