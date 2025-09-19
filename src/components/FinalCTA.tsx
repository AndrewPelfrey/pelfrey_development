import useReveal from "../hooks/useReveal";

export default function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section">
      <div ref={ref} className="container">
        <div className="card pad final-cta">
          <h2 className="h2" style={{ marginBottom: ".5rem" }}>
            Ready to get more customers?
          </h2>
          <p className="p" style={{ margin: 0 }}>
            Get a free website checkup and a clear action plan — no pressure, no jargon.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
          </div>
        </div>
      </div>
    </section>
  );
}
