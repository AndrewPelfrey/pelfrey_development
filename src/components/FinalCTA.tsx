import useReveal from "../hooks/useReveal";

export default function FinalCTA() {
  return (
    <section className="final-cta cta-enhanced card pad">
      {/* decorative glow layer */}
      <div className="cta-backdrop" aria-hidden="true" />

      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="h2">Ready to fix your website?</h2>
        <p className="p" style={{ margin: "0 0 1rem" }}>
          Free checkup and action plan—no obligation.
        </p>

        <div style={{ display: "inline-flex", gap: ".6rem", flexWrap: "wrap" }}>
          <a className="btn primary cta-boost" href="/contact">Get a Free Website Checkup</a>
          <a className="btn ghost" href="/work">See Work</a>
        </div>
      </div>
    </section>
  );
}

