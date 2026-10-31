export default function MeetMaye() {
  return (
    <section className="meet-maye shell" aria-labelledby="meet-maye-title">
      <figure className="meet-maye-portrait">
        <img
          src="/about/maye-portrait-1086.jpg"
          srcSet="/about/maye-portrait-640.jpg 640w, /about/maye-portrait-1086.jpg 1086w"
          sizes="(max-width: 760px) 100vw, 40vw"
          width="1086"
          height="1448"
          loading="lazy"
          alt="Maye seated in a pink floral dress during a studio photoshoot."
        />
        <figcaption><span>MAYE</span><span>The person behind the work</span></figcaption>
      </figure>
      <div className="meet-maye-copy">
        <p className="eyebrow">BEHIND THE COLLECTION</p>
        <h2 id="meet-maye-title">Hi, I’m <em>Maye.</em></h2>
        <p className="meet-maye-lead">Welcome to my little world of creativity.</p>
        <p>I’m the creator behind Maiye Museum. This collection brings together my work in editorial design, photo editing, and visual identity.</p>
        <p>For me, each project is a chance to explore how images, color, and type can tell a story. Take a look around and get to know me through the things I create.</p>
        <ul className="meet-maye-disciplines" aria-label="Creative disciplines"><li>Editorial design</li><li>Raster graphics</li><li>Brand identity</li></ul>
        <a href="#collections" className="text-link">Explore my work <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
