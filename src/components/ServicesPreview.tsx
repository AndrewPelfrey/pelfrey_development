import useReveal from "../hooks/useReveal";

type Service = {
  icon: string;
  title: string;
  line1: string;   // plain-English benefit
  line2?: string;  // optional supporting line
  href: string;
};

const services: Service[] = [
  {
    icon: "🖥️",
    title: "Design & Build",
    line1: "A modern website that looks great and is easy to use.",
    line2: "We handle the tech so you can focus on your business.",
    href: "/services",
  },
  {
    icon: "🔎",
    title: "Get Found on Google",
    line1: "Set up the right way so customers can find you.",
    line2: "Clear wording, clean structure, and fast pages.",
    href: "/services",
  },
  {
    icon: "🛠️",
    title: "Hosting & Care",
    line1: "We keep your site running, safe, and up to date.",
    line2: "Backups, updates, and quick help when you need it.",
    href: "/services",
  },
];

export default function ServicesPreview() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 underglow" style={{ marginBottom: ".5rem" }}>What I Do</h2>
        <p className="p" style={{ marginTop: 0, opacity: .9 }}>
          Practical services that help customers find you, trust you, and contact you.
        </p>

        <div ref={wrapRef} className="grid grid-3 svc-wrap in-once">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card pad svc-card pop-in"
              style={{ ["--i" as any]: i }}
            >
              <div className="svc-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-text">{s.line1}</p>
              {s.line2 && <p className="svc-text muted">{s.line2}</p>}
              <div className="svc-cta">
                <a className="btn ghost sheen arrow-move" href={s.href}>
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
