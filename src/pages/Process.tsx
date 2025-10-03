import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";

/** Optional: swap in your own images later
// import processHero from "../assets/process-hero.webp";
// import discoveryImg from "../assets/process-discovery.webp";
// import designImg from "../assets/process-design.webp";
// import buildImg from "../assets/process-build.webp";
// import launchImg from "../assets/process-launch.webp";
*/

export default function Process() {
  useTitle("Process");

  useEffect(() => {
    const selectors = [".proc-hero", ".proc-steps", ".proc-proof", ".proc-faq", ".proc-cta"];
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
      {/* ===== HERO ===== */}
      <section
        className="hero anim-pan-bg proc-hero"
        style={{
          // backgroundImage: `url(${processHero})`,
          background:
            "radial-gradient(900px 560px at 50% 18%, rgba(255,255,255,.06), transparent), linear-gradient(180deg, rgba(108,92,231,.20), rgba(0,0,0,0))",
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
        {/* ambient orbs */}
        <div className="proc-orb o1" aria-hidden="true" />
        <div className="proc-orb o2" aria-hidden="true" />
        <div className="proc-orb o3" aria-hidden="true" />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 className="h1 proc-hero-title" aria-label="A simple process you’ll actually enjoy">
            {["A", "simple", "process", "you’ll", "actually", "enjoy"].map((w, i) => (
              <span className="chunk" style={{ ["--i" as any]: i }} key={w + i}>
                {w}
              </span>
            ))}
          </h1>
          <div className="underline-wipe" aria-hidden="true" />
          <p className="p proc-hero-sub" style={{ margin: "0 auto 1.25rem", maxWidth: 720 }}>
            Clear steps. No jargon. We’ll go from idea → live website—together.
          </p>
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn primary sheen" href="/contact">Book the intro call</a>
            <a className="btn ghost sheen" href="/work">See recent work</a>
          </div>
        </div>
      </section>

      {/* ===== STEPS (clean + ambient timeline) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">How we’ll work together</h2>

          <div className="proc-stage">
            <div className="proc-timeline" aria-hidden="true" />
            <ol className="proc-steps compact" style={{ marginTop: "1rem" }}>
              {/* 1 — Discovery */}
              <li className="card pad step-card flip">
                <header className="step-header simple">
                  <div className="step-icon" data-bob aria-hidden="true">🧭</div>
                  <h3 className="step-title">Discovery</h3>
                </header>

                <p className="p step-oneLiner">
                  A short conversation to get clear on goals, pages, and what “success” looks like.
                </p>

                <ul className="emolist tight">
                  <li>🎯 Goals + must-haves</li>
                  <li>🗺️ Page list & priorities</li>
                </ul>

                <details className="step-more">
                  <summary>More details</summary>
                  <ul className="emolist">
                    <li>🔍 Review current site & a few competitors</li>
                    <li>📝 Simple written plan after the call</li>
                  </ul>
                </details>

                {/* <img src={discoveryImg} alt="Discovery notes" className="step-img" /> */}
              </li>

              {/* 2 — Design */}
              <li className="card pad step-card left">
                <header className="step-header simple">
                  <div className="step-icon" data-bob aria-hidden="true">✏️</div>
                  <h3 className="step-title">Design</h3>
                </header>

                <p className="p step-oneLiner">
                  Wireframes → clean visuals you can click through on your phone.
                </p>

                <ul className="emolist tight">
                  <li>🧱 Wireframes for key pages</li>
                  <li>🎨 Polished look & layout</li>
                </ul>

                <details className="step-more">
                  <summary>More details</summary>
                  <ul className="emolist">
                    <li>💬 Comment right on the prototype</li>
                    <li>🔁 One quick round of revisions</li>
                  </ul>
                </details>

                {/* <img src={designImg} alt="Wireframes / mockups" className="step-img" /> */}
              </li>

              {/* 3 — Build */}
              <li className="card pad step-card right">
                <header className="step-header simple">
                  <div className="step-icon" data-bob aria-hidden="true">🧰</div>
                  <h3 className="step-title">Build</h3>
                </header>

                <p className="p step-oneLiner">
                  I turn the design into a fast, phone-friendly site with clear buttons.
                </p>

                <ul className="emolist tight">
                  <li>⚡ Speed & accessibility</li>
                  <li>📮 Forms, maps, tracking</li>
                </ul>

                <details className="step-more">
                  <summary>More details</summary>
                  <ul className="emolist">
                    <li>🔎 Set up so people can find you on Google</li>
                    <li>🔗 Private link so you can watch progress</li>
                  </ul>
                </details>

                {/* <img src={buildImg} alt="Code editor" className="step-img" /> */}
              </li>

              {/* 4 — Launch & Care */}
              <li className="card pad step-card pop">
                <header className="step-header simple">
                  <div className="step-icon" data-bob aria-hidden="true">🚀</div>
                  <h3 className="step-title">Launch & Care</h3>
                </header>

                <p className="p step-oneLiner">
                  Go live with the lock icon, analytics, and backups—then keep things running smoothly.
                </p>

                <ul className="emolist tight">
                  <li>🔒 Secure connection</li>
                  <li>📈 Basic analytics & backups</li>
                </ul>

                <details className="step-more">
                  <summary>More details</summary>
                  <ul className="emolist">
                    <li>🧯 Quick fixes & content edits</li>
                    <li>🤝 Optional Hosting & Care plan</li>
                  </ul>
                </details>

                {/* <img src={launchImg} alt="Launch dashboard" className="step-img" /> */}
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Proof, not promises</h2>
          <p className="p">Swap these with your real results when you have them.</p>

          <div className="grid grid-3 proc-proof" style={{ marginTop: "1rem" }}>
            <div className="card pad proof-card curtain" style={{ ["--i" as any]: 0 }}>
              <strong>Before → After</strong>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Old vs. new homepage (same crop). Cleaner design + faster load.
              </p>
            </div>
            <div className="card pad proof-card curtain" style={{ ["--i" as any]: 1 }}>
              <strong>Faster & easier</strong>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Performance scores + “findability” checks with dates.
              </p>
            </div>
            <div className="card pad proof-card curtain" style={{ ["--i" as any]: 2 }}>
              <strong>Mobile-first view</strong>
              <p className="p" style={{ marginTop: ".35rem" }}>
                Phone mock: legible text, big button, sticky call bar.
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
