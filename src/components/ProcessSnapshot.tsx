import useReveal from "../hooks/useReveal";

type Step = { n: string; title: string; text: string; icon: string };

const steps: Step[] = [
  { n: "01", icon: "🧭", title: "Discovery",       text: "Goals, customers, pages, and examples." },
  { n: "02", icon: "✏️", title: "Design",          text: "Simple blueprint → polished look you approve." },
  { n: "03", icon: "🧱", title: "Build",            text: "Fast, phone-friendly site that’s easy to use & easy to find." },
  { n: "04", icon: "🚀", title: "Launch & Care",    text: "Launch, then we handle hosting, backups, and updates." },
];

export default function ProcessSnapshot() {
  const gridRef = useReveal<HTMLDivElement>(); // toggles .in when visible (kept)

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 underglow" style={{ marginBottom: ".5rem" }}>How it works</h2>
        <p className="p" style={{ marginTop: 0, opacity: .9 }}>
          A simple, guided path from idea to launch—no tech headaches.
        </p>

        {/* data-scroll enables scroll-progress animations via CSS var --p */}
        <div ref={gridRef} className="process-grid in-once" data-scroll>
          <div className="timeline" aria-hidden="true" />

          {steps.map((s, i) => (
            <article
              key={s.n}
              className={`card pad process-item ${i % 2 ? "right" : "left"}`}
              style={{ ["--i" as any]: i }}
            >
              <div className="step-dot" aria-hidden="true" />
              <div className="step-num">{s.n}</div>
              <div className="step-head">
                <span className="step-icon" aria-hidden="true">{s.icon}</span>
                <h3 className="step-title">{s.title}</h3>
              </div>
              <p className="p" style={{ margin: 0 }}>{s.text}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}>
          <a className="btn ghost sheen" href="/process">See full process</a>
        </div>
      </div>
    </section>
  );
}
