// src/components/home/Testimonials.tsx
type Testimonial = { author: string; role?: string; text: string };

const testimonials: Testimonial[] = [
  {
    author: "Real Client",
    role: "Small Business Owner",
    text: "Andrew was fast, communicative, and the site brought in more calls. The process was simple and clear.",
  },
  {
    author: "Another Client",
    role: "Owner",
    text: "Clear plan, great results. Our inquiries increased within weeks after launch.",
  },
  {
    author: "Local Contractor",
    role: "Founder",
    text: "He modernized our site and made it easy for customers to request quotes. Huge difference.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">What clients say</h2>

        <div className="testi-grid testi-wrap">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="card pad testi-card" style={{ ["--i" as any]: i }}>
              <div className="quote" aria-hidden="true">“</div>
              <p className="p" style={{ margin: 0 }}>{t.text}</p>
              <footer style={{ marginTop: ".5rem", opacity: .85 }}>
                — {t.author}{t.role ? `, ${t.role}` : ""}
              </footer>
              <span className="sweep" aria-hidden="true" />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
