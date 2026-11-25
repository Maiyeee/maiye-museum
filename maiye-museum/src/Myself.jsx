const photos = [
  { src: '/myself/myself-1.jpg', alt: 'Maye smiling in a close-up portrait beside a pink pillow.' },
  { src: '/myself/myself-2.jpg', alt: 'A close-up selfie of Maye wearing pink.' },
  { src: '/myself/myself-3.jpg', alt: 'Maye smiling in a close-up selfie.' },
]

export default function Myself() {
  return (
    <section className="shell inner-page myself-page" aria-labelledby="myself-title">
      <div className="page-intro"><h1 id="myself-title">Myself</h1></div>
      <div className="myself-gallery">
        {photos.map((photo, index) => (
          <figure className="myself-photo" key={photo.src}>
            <a className="unwind-image-link" href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open personal photo ${index + 1} at full size in a new tab`}>
              <img src={photo.src} width="1920" height="1080" loading={index === 0 ? 'eager' : 'lazy'} alt={photo.alt} />
            </a>
          </figure>
        ))}
      </div>
    </section>
  )
}
