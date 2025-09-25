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

        {/* stage adds glow background; aria-hidden so it’s decorative */}
        <div className="testi-stage">
          <div className="testi-backdrop" aria-hidden="true" />

          <div className="testi-grid testi-wrap in">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testi-card" style={{ ["--i" as any]: i }}>
                <p className="testi-text">“{t.text}”</p>
                <footer className="testi-footer">— {t.author}{t.role ? `, ${t.role}` : ""}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
