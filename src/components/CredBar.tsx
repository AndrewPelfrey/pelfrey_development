import useReveal from "../hooks/useReveal";

type Item = { icon: string; text: string };

const items: Item[] = [
  { icon: "📱", text: "Mobile-first" },
  { icon: "🔍", text: "SEO-ready" },
  { icon: "⚡", text: "Fast load" },
  { icon: "🔒", text: "Secure SSL" },
  { icon: "☁️", text: "Managed hosting" },
];

export default function CredBar() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <div ref={wrapRef} className="container grid grid-4 credbar in-once">
        {items.map(({ icon, text }, i) => (
          <div
            key={text}
            className="card pad cred-item"
            style={{ textAlign: "center", animationDelay: `${i * 0.08}s` }}
          >
            <span className="cred-icon" aria-hidden="true">{icon}</span>
            <span className="cred-text">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
