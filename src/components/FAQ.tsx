import useReveal from "../hooks/useReveal";

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: "How much does a site cost?", a: "After a short call, I’ll give you a clear, fixed quote based on the scope." },
  { q: "How long does it take?", a: "A focused 1–3 page site is often 1–2 weeks, depending on content and approvals." },
  { q: "Do you handle hosting and updates?", a: "Yes. Managed hosting, backups, updates, and priority support are available." },
];

export default function FAQ() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">FAQ</h2>
        <div ref={ref} className="faq-wrap">
          {faqs.map((f) => (
            <details key={f.q} className="card pad faq-item">
              <summary>{f.q}</summary>
              <p className="p" style={{ margin: ".5rem 0 0" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
