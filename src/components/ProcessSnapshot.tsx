import useReveal from "../hooks/useReveal";

type Step = { n: string; title: string; text: string };

const steps: Step[] = [
  { n: "01", title: "Discovery", text: "Goals, audience, examples, and scope." },
  { n: "02", title: "Design", text: "Wireframe → visual design you approve." },
  { n: "03", title: "Build", text: "Performant, SEO-ready, responsive code." },
  { n: "04", title: "Launch & Care", text: "Deploy, analytics, hosting/maintenance." },
];

export default function ProcessSnapshot() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">How it works</h2>

        <div ref={wrapRef} className="process-grid">
          <div className="timeline" aria-hidden="true" />
          {steps.map((s, i) => (
            <div key={s.n} className={`card pad process-item ${i % 2 ? "right" : "left"}`} style={{ ["--i" as any]: i }}>
              <div className="step-num">{s.n}</div>
              <h3 style={{ margin: ".25rem 0" }}>{s.title}</h3>
              <p className="p" style={{ margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}>
          <a className="btn ghost sheen" href="/process">See full process</a>
        </div>
      </div>
    </section>
  );
}
