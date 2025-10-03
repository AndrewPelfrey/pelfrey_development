import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";
import alloutdoor from "../assets/all-outdoor.jpeg";

/**
 * Add screenshots when you have them:
 * import shotHome from "../assets/alloutdoors-home.webp";
 * import shotMobile from "../assets/alloutdoors-mobile.webp";
 * import shotService from "../assets/alloutdoors-services.webp";
 * import shotContact from "../assets/alloutdoors-contact.webp";
 *
 * Optional before/after:
 * import beforeHome from "../assets/alloutdoors-before.webp";
 */

// Basic project info (easy to tweak later)
const project = {
  name: "All Outdoors",
  site: "https://alloutdoors.netlify.app",
  tagline: "A modern, phone-friendly site that makes it easy to call, book, and browse services.",
};

export default function Work() {
  useTitle("Work");

  useEffect(() => {
    const selectors = [
      ".work-hero",
      ".feat-grid",
      ".feat-gallery",
      ".feat-before",
      ".feat-what",
      ".feat-metrics",
      ".feat-stack",
      ".feat-quote",
      ".feat-cta",
    ];
    const els = selectors.flatMap((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.16 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== Featured Project: HERO ===== */}
      <section
        className="hero work-hero anim-pan-bg"
        style={{
          /* Use your image as the hero background, with a soft dark gradient for readability */
          backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${alloutdoor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "54vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-overlay" />
        {/* floating orbs */}
        <div className="work-orb w1" aria-hidden="true" />
        <div className="work-orb w2" aria-hidden="true" />
        <div className="work-orb w3" aria-hidden="true" />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="feat-grid">
            <div className="feat-intro card pad">
              <h1 className="h1" style={{ marginBottom: ".25rem" }}>
                Featured Project: {project.name}
              </h1>
              <p className="p" style={{ margin: 0 }}>{project.tagline}</p>

              {/* quick benefit chips */}
              <div className="chip-row" style={{ marginTop: ".75rem" }}>
                {[
                  { e: "📱", t: "Great on phones" },
                  { e: "⚡", t: "Loads fast" },
                  { e: "🧭", t: "Clear navigation" },
                  { e: "📞", t: "Click-to-call & forms" },
                ].map(({ e, t }, i) => (
                  <div className="chip" style={{ ["--i" as any]: i }} key={t}>
                    <span className="chip-emoji" aria-hidden="true">{e}</span>
                    <span className="chip-text">{t}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: ".9rem" }}>
                <a className="btn primary sheen" href={project.site} target="_blank" rel="noreferrer">
                  View live site
                </a>
                <a className="btn ghost sheen" href="/contact">
                  Start your project
                </a>
              </div>
            </div>

            {/* hero meta card */}
            <aside className="feat-meta card pad">
              <strong style={{ display: "block", marginBottom: ".35rem" }}>At a glance</strong>
              <ul className="emolist">
                <li>🎯 Clear homepage sections with obvious next steps</li>
                <li>🧰 Service pages structured for easy skimming</li>
                <li>📍 Contact details and map made obvious</li>
                <li>🔒 Secure, modern build with best practices</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== Gallery (swap images when ready) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Screenshots</h2>
          <p className="p">A few views from the site. Replace these placeholders with your own screenshots.</p>

          <div className="grid grid-4 feat-gallery" style={{ marginTop: "1rem" }}>
            {[
              { alt: "Homepage hero", src: "", label: "Homepage" },
              { alt: "Services overview", src: "", label: "Services" },
              { alt: "Mobile menu & CTAs", src: "", label: "Mobile view" },
              { alt: "Contact form or info", src: "", label: "Contact" },
            ].map((img, i) => (
              <figure className="img-tile" style={{ ["--i" as any]: i }} key={img.label}>
                {/* Replace with <img src={shotX} alt={img.alt} /> */}
                <div className="img-ph" aria-label={img.alt} />
                <figcaption><strong>{img.label}</strong></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Before / After (optional) ===== */}
      <section className="section">
        <div className="container feat-before">
          <h2 className="h2"> After</h2>
          {/* <p className="p">Show the transformation. If there’s no “before,” just keep the “after.”</p> */}

          <div className="ba-wrap">
            {/* Replace with real images when available */}
            {/* <div className="ba-tile">
              <div className="img-ph" aria-label="Before" />
              <div className="ba-tag">Before</div>
            </div> */}
            <div className="ba-tile">
              <div className="img-ph" aria-label="After" />
              <div className="ba-tag after">After</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What we did ===== */}
      <section className="section">
        <div className="container feat-what">
          <h2 className="h2">What I did</h2>
          <div className="grid grid-3">
            <div className="card pad">
              <strong>Design & Structure</strong>
              <ul className="emolist" style={{ marginTop: ".35rem" }}>
                <li>🧭 Clear navigation with logical sections</li>
                <li>🖼️ Content spaced for readability</li>
                <li>📱 Mobile-first layouts</li>
              </ul>
            </div>
            <div className="card pad">
              <strong>Make it easy to contact</strong>
              <ul className="emolist" style={{ marginTop: ".35rem" }}>
                <li>📞 Click-to-call buttons</li>
                <li>🧾 Simple forms</li>
                <li>📍 Obvious address & map</li>
              </ul>
            </div>
            <div className="card pad">
              <strong>Performance & Safety</strong>
              <ul className="emolist" style={{ marginTop: ".35rem" }}>
                <li>⚡ Speed tuning for fast loads</li>
                <li>🔒 Secure connection (the lock icon)</li>
                <li>🗺️ Site map + sensible page titles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Results (placeholders you can update) ===== */}
      <section className="section">
        <div className="container feat-metrics">
          <h2 className="h2">Results (early indicators)</h2>
          <div className="grid grid-3 stat-grid">
            {[
              { n: "↑", label: "More calls from mobile" },
              { n: "↓", label: "Faster load → lower bounce" },
              { n: "✓", label: "Clearer path to services" },
            ].map((s, i) => (
              <div className="card pad stat" style={{ ["--i" as any]: i }} key={s.label}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.label}</div>
              </div>
            ))}
          </div>
          {/* <p className="p" style={{ marginTop: ".75rem" }}>
            * Replace with real numbers when you have a few weeks of data (calls, form submissions, speed scores).
          </p> */}
        </div>
      </section>

      {/* ===== Stack (keep human-friendly) ===== */}
      <section className="section">
        <div className="container feat-stack">
          <h2 className="h2">How it’s built</h2>
          <div className="stack-row">
            {[
              { e: "⚛️", t: "React" },
              { e: "🖥️", t: "Modern hosting" },
              { e: "🔒", t: "Secure by default" },
              { e: "📈", t: "Analytics ready" },
            ].map((x, i) => (
              <div className="stack-pill" style={{ ["--i" as any]: i }} key={x.t}>
                <span aria-hidden="true">{x.e}</span> {x.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonial (optional) ===== */}
      <section className="section">
        <div className="container feat-quote card pad">
          <blockquote>
            “Clean, easy to use, and customers can find what they need fast.”
          </blockquote>
          <div className="quote-meta">— Client Name, Business</div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container card pad feat-cta">
          <h2 className="h2" style={{ marginBottom: ".5rem" }}>
            Want a site that helps customers choose you?
          </h2>
          <p className="p" style={{ margin: 0 }}>
            I’ll review your situation and share a simple plan—no pressure.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
            <a className="btn ghost sheen" href={project.site} target="_blank" rel="noreferrer" style={{ marginLeft: ".5rem" }}>
              See this project live
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
