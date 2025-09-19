import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";

export default function Contact() {
  useTitle("Contact");

  useEffect(() => {
    const selectors = [".contact-hero", ".contact-form", ".contact-info"];
    const els = selectors.flatMap(sel => Array.from(document.querySelectorAll<HTMLElement>(sel)));
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== HERO (text only) ===== */}
      <section className="section contact-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h1 className="h1">
            {["Let’s", "work", "together"].map((w, i) => (
              <span className="chunk" style={{ ["--i" as any]: i }} key={i}>
                {w}
              </span>
            ))}
          </h1>
          <p className="p" style={{ maxWidth: 640, margin: "0 auto" }}>
            Ready for a site that wins more customers? Fill out the form or reach out directly.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <section className="section">
        <div
          className="container grid grid-2"
          style={{ gap: "2rem", alignItems: "start" }}
        >
          {/* FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="card pad contact-form"
            style={{ maxWidth: 560, margin: "0 auto", position: "relative" }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <h2 className="h2" style={{ marginTop: 0 }}>
              Send a message
            </h2>
            <p className="p" style={{ marginTop: 0, marginBottom: "1rem" }}>
              Tell me a bit about your business and what you’re looking for.
            </p>

            <div className="grid" style={{ gap: ".75rem" }}>
              <input name="name" placeholder="Name *" required />
              <input name="email" type="email" placeholder="Email *" required />
              <input name="business" placeholder="Business name" />
              <textarea
                name="message"
                placeholder="What do you need?"
                rows={5}
              />
              <button className="btn primary sheen" type="submit">
                Send Message
              </button>
            </div>
          </form>

          {/* INFO / SIDEBAR */}
          <aside className="contact-info" style={{ opacity: 0.85 }}>
            <h2 className="h2">Other ways to connect</h2>
            <p className="p">Prefer a quick call or DM? I’m flexible.</p>
            <ul
              className="p"
              style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}
            >
              <li>📧 <a href="mailto:pelfreya6@gmail.com">pelfreya6@gmail.com</a></li>
              <li>📱 <a href="tel:4402226719">(440) 222-6719</a></li>
              <li>📍 St. Petersburg, FL</li>
            </ul>
            <p className="p">
              Or connect on{" "}
              <a
                href="https://www.linkedin.com/in/andrewpelfrey"
                target="_blank"
              >
                LinkedIn
              </a>.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
