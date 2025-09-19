import useReveal from "../hooks/useReveal";

type Service = {
  title: string;
  blurb: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Web Design & Build",
    blurb: "Modern sites that convert visitors into calls and bookings.",
    href: "/services",
  },
  {
    title: "SEO Foundations",
    blurb: "Structure, metadata, and performance to help you get found.",
    href: "/services",
  },
  {
    title: "Hosting & Care",
    blurb: "Managed hosting, updates, backups, and priority support.",
    href: "/services",
  },
];

export default function ServicesPreview() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">What I Do</h2>
        <div ref={wrapRef} className="grid grid-3 svc-wrap">
          {services.map((s, i) => (
            <article key={s.title} className="card pad svc-card" style={{ ["--i" as any]: i }}>
              <h3 style={{ margin: "0 0 .25rem" }}>{s.title}</h3>
              <p className="p" style={{ margin: 0 }}>{s.blurb}</p>
              <div style={{ marginTop: ".75rem" }}>
                <a className="btn ghost sheen" href={s.href}>Learn more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
