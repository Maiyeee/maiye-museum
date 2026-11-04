import assets from './productAssets.json'

const products = [
  {
    id: 'pastel-bouquets',
    title: 'Pastel bouquets',
    category: 'FLOWERS',
    description: 'Lavender, blush, and sunny yellow blooms in ribbon-tied wraps.',
    alt: 'Three flower bouquets in lavender, pink, and yellow, with glittery wrapping and white ribbon bows.',
  },
  {
    id: 'floral-bouquet',
    title: 'Garden bouquet',
    category: 'FLOWERS',
    description: 'A colorful floral arrangement in lavender and pink wrapping.',
    alt: 'A large bouquet of purple, pink, yellow, and white flowers in layered lavender wrapping with a pink ribbon bow.',
  },
  {
    id: 'flower-mirror-keychain',
    title: 'Flower mirror keychain',
    category: 'ACCESSORIES',
    description: 'A pink flower-shaped keepsake, shown from the front and back.',
    alt: 'Front and back of a pink flower mirror keychain with a silver ball chain, green leaf details, and front and back labels on a plum background.',
  },
]

export default function Products({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2'
  return (
    <section className={`products-section shell${standalone ? ' products-page' : ''}`} aria-labelledby="products-title">
      <div className="products-heading">
        <div><p className="eyebrow">COLOR, TEXTURE & LITTLE DELIGHTS</p><Heading id="products-title">Products</Heading></div>
        <p>Bouquets in bloom and a flower-shaped keepsake. A closer look at color, texture, and thoughtful details.</p>
      </div>
      <div className="products-grid">
        {products.map(product => {
          const asset = assets[product.id]
          const largest = asset.variants[asset.variants.length - 1]
          return (
            <article className="product-card" key={product.id}>
              <a className="product-image-link" href={`/products/${asset.original}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${product.title.toLowerCase()} image in a new tab`}>
                <img
                  src={`/products/${largest.file}`}
                  srcSet={asset.variants.map(item => `/products/${item.file} ${item.width}w`).join(', ')}
                  sizes="(max-width: 760px) 100vw, 33vw"
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  alt={product.alt}
                />
              </a>
              <p className="eyebrow">{product.category}</p>
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <a className="text-link" href={`/products/${asset.original}`} target="_blank" rel="noopener noreferrer">View image <span aria-hidden="true">↗</span><span className="visually-hidden">: {product.title} (opens in a new tab)</span></a>
            </article>
          )
        })}
      </div>
      {!standalone && <a className="text-link products-all-link" href="#products">Explore Products <span aria-hidden="true">↗</span></a>}
    </section>
  )
}
