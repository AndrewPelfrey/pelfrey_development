import { useEffect, useRef } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";

import workhero from "../assets/work-hero.gif";

import homepageRecording from "../assets/homepage-recording.mov";
import servicesRecording from "../assets/services-recording.mov";
import contactRecording from "../assets/contact-recording.mov";
import mobileRecording from "../assets/mobile-recording.mov";

const project = {
  name: "All Outdoors",
  site: "https://alloutdoors.netlify.app",
  tagline:
    "A modern, phone-friendly site that makes it easy to call, book, and browse services.",
};

export default function Work() {
  useTitle("Work");

  const heroRef = useRef(null);

  // Trigger hero text entrance on first paint
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      heroRef.current?.classList.add("play");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Intersection Observer to trigger `.in` on sections/cards
  useEffect(() => {
    const selectors = [
      ".work-hero",
      ".feat-grid",
      ".feat-gallery",
      ".feat-before",
      ".feat-what",
      ".feat-metrics",
      ".stat-grid",
      ".feat-stack",
      ".feat-quote",
      ".feat-cta",
    ];
    const els = selectors.flatMap((sel) =>
      Array.from(document.querySelectorAll(sel))
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.16 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== Featured Project: HERO (image over animated gradient) ===== */}
      <section ref={heroRef} className="hero work-hero hero-dark hero-boosted">
        {/* Background image layer sits above the animated gradient, below content */}
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(${workhero})`,
          }}
          aria-hidden="true"
        />

        <div className="container hero-content">
          <div className="feat-grid">
            <div className="hero-copy">
              <h1 className="h1 hero-title">
                <span className="hero-kicker">Featured Project</span>
                <span className="hero-name">All Outdoors</span>
              </h1>
              <p className="p hero-sub">{project.tagline}</p>

              <div className="hero-cta-row">
                <a
                  className="btn primary sheen"
                  href={project.site}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Site
                </a>
                <a className="btn ghost sheen" href="/contact">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Screenshots</h2>

          <div className="grid grid-4 feat-gallery" style={{ marginTop: "1rem" }}>
            {[
              {
                alt: "Homepage hero",
                src: homepageRecording,
                type: "video",
                label: "Homepage",
              },
              {
                alt: "Services overview",
                src: servicesRecording,
                type: "video",
                label: "Services",
              },
              {
                alt: "Mobile menu & CTAs",
                src: mobileRecording,
                type: "video",
                label: "Mobile view",
                fit: "contain",
              },
              {
                alt: "Contact form or info",
                src: contactRecording,
                type: "video",
                label: "Contact",
              },
            ].map((item, i) => (
              <figure className="img-tile" style={{ ["--i"]: i }} key={item.label}>
                {item.type === "video" && item.src ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={item.alt}
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "12px",
                      objectFit: item.fit || "cover",
                      aspectRatio: "16 / 9",
                      backgroundColor: "#000",
                    }}
                  />
                ) : item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "100%", borderRadius: "12px" }}
                    loading="lazy"
                  />
                ) : (
                  <div className="img-ph" aria-label={item.alt} />
                )}
                <figcaption>
                  <strong>{item.label}</strong>
                </figcaption>
              </figure>
            ))}
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

      {/* ===== Results / Pre-launch expectations ===== */}
      <section className="section">
        <div className="container feat-metrics">
          <div style={{ display: "flex", alignItems: "baseline", gap: ".5rem" }}>
            <h2 className="h2" style={{ margin: 0 }}>Pre-launch expectations</h2>
            <span className="chip small">Pre-launch</span>
          </div>

          <p className="p" style={{ marginTop: ".35rem" }}>
            The new site is designed to bring in more local customers and turn visits
            into real leads. Here’s what we expect once it goes live:
          </p>

          <div className="grid grid-3 stat-grid" style={{ marginTop: ".75rem" }}>
            {[
              {
                n: "👀",
                label: "More visibility online",
                help: "Modern design and clear keywords help it show up more in local searches.",
              },
              {
                n: "📞",
                label: "More calls and inquiries",
                help: "Click-to-call and simple forms make it easy to contact right away.",
              },
              {
                n: "🤝",
                label: "Higher trust and conversions",
                help: "Professional visuals and clear services build confidence.",
              },
            ].map((s, i) => (
              <div className="card pad stat" style={{ ["--i"]: i }} key={s.label}>
                <div className="stat-n" aria-hidden="true">{s.n}</div>
                <div className="stat-l" style={{ fontWeight: 700 }}>{s.label}</div>
                <p className="p" style={{ marginTop: ".35rem" }}>{s.help}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stack ===== */}
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
              <div className="stack-pill" style={{ ["--i"]: i }} key={x.t}>
                <span aria-hidden="true">{x.e}</span> {x.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonial ===== */}
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
            <a className="btn primary sheen" href="/contact">
              Get a Free Website Checkup
            </a>
            <a
              className="btn ghost sheen"
              href={project.site}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: ".5rem" }}
            >
              See this project live
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
