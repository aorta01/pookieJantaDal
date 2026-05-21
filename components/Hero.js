export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* <div className="hero-eyebrow">Establishment 2026 &nbsp;•&nbsp; Bharat</div> */}
      <h1 className="hero-headline">
        For Those <span className="crimson">Who Cares</span>
      </h1>
      <div className="hero-rule" />
      <p className="hero-tagline">No More Rants. Only Results.</p>
      <p className="hero-sub-hi">
        <b>Rants</b> nahi, <b>Results</b> chahiye.
      </p>

      <div className="hero-ctas">
        <a href="#join" className="btn-primary">
          <span>Join Pookie Janta Dal</span>
        </a>
        <a href="#demands" className="btn-outline">
          Read the Demands
        </a>
      </div>

      <div className="hero-establishment">Pookie Janta Dal &nbsp;·&nbsp; Est. 2026</div>
      <div className="hero-founder">
        Founder: <b>Kaushal</b>
      </div>
    </section>
  );
}
