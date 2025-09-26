import useReveal from "../hooks/useReveal";

type Item = { icon: string; title: string; help: string };

const items: Item[] = [
  { icon: "📱", title: "Looks great on phones", help: "Your site is easy to read and use on any screen." },
  { icon: "🔍", title: "Easier to find on Google", help: "We set things up the right way so customers can discover you." },
  { icon: "⚡", title: "Loads quickly", help: "Pages open fast so people don’t bounce." },
  { icon: "🔒", title: "Safe & secure", help: "The little lock in the address bar—customer info stays protected." },
  { icon: "☁️", title: "We keep it running", help: "Hosting, updates, and fixes handled for you." },
];

export default function CredBar() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <div ref={wrapRef} className="container grid grid-4 credbar in-once">
        {items.map(({ icon, title, help }, i) => (
          <div
            key={title}
            className="card pad cred-item"
            style={{ textAlign: "center", animationDelay: `${i * 0.08}s` }}
          >
            <span className="cred-icon" aria-hidden="true">{icon}</span>
            <span className="cred-title">{title}</span>
            <small className="cred-help">{help}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
