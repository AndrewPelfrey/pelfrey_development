import useReveal from "../hooks/useReveal";

const feature = {
  name: "All Outdoor Fence",
  summary:
    "Lead-gen site for a landscaping/fencing business. Result: higher call volume and faster quote requests.",
  bullets: [
    "Mobile-first redesign",
    "Netlify Forms → Google Sheets",
    "95+ Lighthouse performance",
  ],
  ctaHref: "/work",
};

export default function FeaturedProject() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Featured project</h2>

        <article ref={ref} className="card pad feat-card">
          <div className="feat-badge" aria-hidden="true">★</div>
          <h3 style={{ margin: "0 0 .25rem" }}>{feature.name}</h3>
          <p className="p" style={{ margin: 0 }}>{feature.summary}</p>
          <ul className="p" style={{ marginTop: ".5rem" }}>
            {feature.bullets.map((b) => <li key={b}>✅ {b}</li>)}
          </ul>
          <a className="btn ghost sheen" href={feature.ctaHref}>View details</a>
        </article>
      </div>
    </section>
  );
}
