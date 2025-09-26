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
    <section className="faq-wrap in vibe-section section">
      <div className="vibe-backdrop" aria-hidden="true" />

      <div className="container">
        <h2 className="h2">FAQs</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item vibe-card">
              <summary>{f.q}</summary>
              <div className="faq-content">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
