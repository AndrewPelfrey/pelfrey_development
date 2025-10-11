import useReveal from "../hooks/useReveal";

export default function AboutPreview() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 underglow">Who I Am</h2>

        {/* removed "card", kept padding + reveal */}
        <div ref={wrapRef} className="about-preview pad in-once">
          <p className="p" style={{ margin: 0 }}>
            I’ve always loved figuring out how things work online—now I help small
            businesses take advantage of that.
          </p>

          <div className="ap-underline" aria-hidden="true" />
          <div className="ap-sparks" aria-hidden="true" />

          <div style={{ marginTop: ".75rem" }}>
            <a className="btn ghost sheen" href="/about">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
