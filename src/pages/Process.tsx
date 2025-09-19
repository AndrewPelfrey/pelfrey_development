import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";

/**
 * ⬇️ Optional images (drop into src/assets/ and uncomment)
 * Keep hero wide (2400×1200+), other images ~1200×800, WebP if possible.
 */
// import processHero from "../assets/process-hero.webp";     // Abstract/office/desk or calm gradient
// import discoveryImg from "../assets/process-discovery.webp"; // Notebook, conversation, sticky notes
// import designImg from "../assets/process-design.webp";       // Wireframes / Figma UI
// import buildImg from "../assets/process-build.webp";         // Code editor / components
// import launchImg from "../assets/process-launch.webp";       // Confetti / dashboard / rocket

export default function Process() {
  useTitle("Process");

  useEffect(() => {
    // Observe page sections and add 'in' on scroll
    const selectors = [".proc-hero", ".proc-steps", ".proc-proof", ".proc-faq", ".proc-cta"];
    const els = selectors.flatMap((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)));
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.16 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero anim-pan-bg proc-hero"
        style={{
          // backgroundImage: `url(${processHero})`,
          background: "radial-gradient(1000px 600px at 50% 20%, rgba(255,255,255,.06), transparent), linear-gradient(180deg, rgba(18,184,134,.15), rgba(0,0,0,.0))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="hero-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 className="h1 proc-hero-title" aria-label="A simple, transparent process">
            {["A", "simple,", "transparent", "process"].map((w, i) => (
              <span className="chunk" style={{ ["--i" as any]: i }} key={w + i}>{w}</span>
            ))}
          </h1>
          <div className="underline-wipe" aria-hidden="true" />
          <p className="p proc-hero-sub" style={{ margin: "0 auto 1.25rem", maxWidth: 700 }}>
            Discovery → Design → Build → Launch & Care. Clear steps, clear timelines, clear outcomes.
          </p>
        </div>
      </section>

      {/* ===== STEPS (4 cards) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">How we’ll work together</h2>

          <div className="grid grid-2 proc-steps" style={{ marginTop: "1rem" }}>
            {/* 1 — Discovery */}
            <article className="card pad step-card flip" style={{ ["--i" as any]: 0 }}>
              {/* <img src={discoveryImg} alt="Discovery notes" className="step-img" /> */}
              <div className="step-head">
                <div className="step-num">1</div>
                <h3 style={{ margin: 0 }}>Discovery</h3>
              </div>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Short call to understand goals, audience, and the actions we want visitors to take.
                I’ll review your current site and competitors to find quick wins.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• Goals, pages, features</li>
                <li>• Content & brand assets</li>
                <li>• Timeline & scope</li>
              </ul>
              {/* Image suggestion: a notebook/coffee shot, or a subtle meeting photo */}
            </article>

            {/* 2 — Design */}
            <article className="card pad step-card left" style={{ ["--i" as any]: 1 }}>
              {/* <img src={designImg} alt="Wireframes / mockups" className="step-img" /> */}
              <div className="step-head">
                <div className="step-num">2</div>
                <h3 style={{ margin: 0 }}>Design</h3>
              </div>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Wireframes → clean visual design. Mobile-first, with clear hierarchy and strong CTAs.
                You’ll review a live prototype and give feedback.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• Wireframes for key screens</li>
                <li>• High-fidelity mockups</li>
                <li>• Feedback & iterations</li>
              </ul>
              {/* Image suggestion: Figma screens/wireframes grid */}
            </article>

            {/* 3 — Build */}
            <article className="card pad step-card right" style={{ ["--i" as any]: 2 }}>
              {/* <img src={buildImg} alt="Code editor" className="step-img" /> */}
              <div className="step-head">
                <div className="step-num">3</div>
                <h3 style={{ margin: 0 }}>Build</h3>
              </div>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Components, animations, forms, and speed. I build it accessible and SEO-ready,
                with a staging link so you can see progress live.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• Clean, maintainable code</li>
                <li>• Performance + accessibility checks</li>
                <li>• On-page SEO foundations</li>
              </ul>
              {/* Image suggestion: editor screenshot or code with dark theme */}
            </article>

            {/* 4 — Launch & Care */}
            <article className="card pad step-card pop" style={{ ["--i" as any]: 3 }}>
              {/* <img src={launchImg} alt="Launch dashboard" className="step-img" /> */}
              <div className="step-head">
                <div className="step-num">4</div>
                <h3 style={{ margin: 0 }}>Launch & Care</h3>
              </div>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Go live with SSL, analytics, and backups. After launch, I can host and maintain the site,
                make updates, and keep it fast and secure.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• DNS, SSL, CDN</li>
                <li>• Backups & uptime monitoring</li>
                <li>• Analytics dashboard</li>
              </ul>
              {/* Image suggestion: simple success/celebration or dashboard tiles */}
            </article>
          </div>
        </div>
      </section>

      {/* ===== PROOF (before/after, speed, mobile) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Proof, not promises</h2>
          <p className="p">Add visuals that back it up—swap these with your real results.</p>

          <div className="grid grid-3 proc-proof" style={{ marginTop: "1rem" }}>
            <div className="card pad proof-card curtain" style={{ ["--i" as any]: 0 }}>
              <strong>Before → After</strong>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Side-by-side homepage screenshots, same crop. Show clarity + speed improvements.
              </p>
            </div>
            <div className="card pad proof-card curtain" style={{ ["--i" as any]: 1 }}>
              <strong>Speed & Accessibility</strong>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Lighthouse/Pagespeed scores and Core Web Vitals badges, with dates.
              </p>
            </div>
            <div className="card pad proof-card curtain" style={{ ["--i" as any]: 2 }}>
              <strong>Mobile First</strong>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Phone mockup showing legible text, big CTA button, and sticky call bar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="container proc-faq">
          <h2 className="h2">Common questions</h2>
          <div className="grid" style={{ marginTop: "1rem" }}>
            <details className="card pad faq-item" open>
              <summary>How long does a typical project take?</summary>
              <p className="p" style={{ marginTop: ".5rem" }}>
                Most small business sites launch in 2–4 weeks depending on pages, content readiness, and feedback speed.
              </p>
            </details>
            <details className="card pad faq-item">
              <summary>Do you provide hosting and ongoing updates?</summary>
              <p className="p" style={{ marginTop: ".5rem" }}>
                Yep. I can host, monitor, back up, and update the site. You get a single point of contact—me.
              </p>
            </details>
            <details className="card pad faq-item">
              <summary>Can you help with copy and images?</summary>
              <p className="p" style={{ marginTop: ".5rem" }}>
                I can draft or clean up copy and source on-brand stock images if needed.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container card pad proc-cta">
          <h2 className="h2" style={{ marginBottom: ".5rem" }}>
            Ready to map your site in 20 minutes?
          </h2>
          <p className="p" style={{ margin: 0 }}>
            I’ll review where you are and give you a simple plan with timelines and costs—no pressure.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
          </div>
        </div>
      </section>
    </main>
  );
}
