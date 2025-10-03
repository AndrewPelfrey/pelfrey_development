import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";

import serviceHero from "../assets/abstract.gif";  // hero background
import shotDesign from "../assets/webdesign.png";   // use your own images here
import shotWire from "../assets/wire.png";
import shotProcess from "../assets/process.png";

export default function Services() {
  useTitle("Services");

  useEffect(() => {
    const selectors = [
      ".services-hero",
      ".chip-row",
      ".svc-cards",
      ".proof-grid",
      ".pricing-cards",
      ".deliverables",
      ".svc-quote",
      ".svc-cta",
    ];
    const els = selectors.flatMap((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero anim-pan-bg services-hero"
        style={{
          backgroundImage: `url(${serviceHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="hero-overlay" />
        <div className="container services-hero-inner" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 className="h1 hero-chunks" aria-label="Services that turn visitors into customers">
            {["Services", "that", "turn", "visitors", "into", "customers"].map((w, i) => (
              <span className="chunk" style={{ ["--i" as any]: i }} key={w + i}>{w}</span>
            ))}
          </h1>
          <div className="underline-wipe" aria-hidden="true" />
          <p className="p hero-copy">
            I design and build modern websites that help people <strong>find you</strong>, 
            <strong> trust you</strong>, and <strong>get in touch</strong>. I’ll also keep everything
            running—hosting, updates, and friendly support.
          </p>
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
            <a className="btn ghost sheen" href="/work">See Work</a>
          </div>
        </div>
        <div className="svc-blob s1" />
        <div className="svc-blob s2" />
      </section>

      {/* ===== QUICK HIGHLIGHTS (emoji chips) ===== */}
      <section className="section" style={{ paddingTop: "0.5rem" }}>
        <div className="container chip-row">
          {[
            { e: "📱", t: "Looks great on phones" },
            { e: "⚡", t: "Loads fast" },
            { e: "🔎", t: "Easy to find on Google" },
            { e: "🛡️", t: "Safe & secure" },
            { e: "🤝", t: "Helpful support" },
          ].map(({ e, t }, i) => (
            <div className="chip" style={{ ["--i" as any]: i }} key={t}>
              <span className="chip-emoji" aria-hidden="true">{e}</span>
              <span className="chip-text">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CORE SERVICES (emoji icons + optional images) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">What I can do for you</h2>

          <div className="grid grid-3 svc-cards" style={{ marginTop: "1rem" }}>
            {/* Design & Build */}
            <article className="card pad svc-card flip" style={{ ["--i" as any]: 0 }}>
              <div className="svc-icon-emoji" aria-hidden="true">🖥️</div>
              <h3 style={{ marginTop: 0 }}>Design & Build</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>
                A clean, modern website that looks great on phones and makes it easy for customers
                to call, book, or request a quote.
              </p>
              <ul className="p emolist" style={{ marginTop: ".5rem" }}>
                <li>🧭 Clear, simple layout—no clutter</li>
                <li>📱 Works on every screen</li>
                <li>⚡ Loads fast so people don’t bounce</li>
                <li>📍 Click-to-call, forms, maps</li>
              </ul>
              <figure className="media-figure">
                <img src={shotDesign} className="img-card" alt="Example website layout on laptop and phone" />
                <figcaption className="cap">Real-world layout—clean + easy to use.</figcaption>
              </figure>
            </article>

            {/* Get Found on Google */}
            <article className="card pad svc-card slide-left" style={{ ["--i" as any]: 1 }}>
              <div className="svc-icon-emoji" aria-hidden="true">🔎</div>
              <h3 style={{ marginTop: 0 }}>Get Found on Google</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>
                Set up the right way so local customers can find you when they search.
              </p>
              <ul className="p emolist" style={{ marginTop: ".5rem" }}>
                <li>📝 Page titles & descriptions that make sense</li>
                <li>🗂️ Headings and wording people actually use</li>
                <li>🧭 We tell Google about your pages (site map)</li>
                <li>📍 Help setting up your Google Business Profile</li>
              </ul>
              <figure className="media-figure">
                <img src={shotWire} className="img-card" alt="Simple page structure and headings example" />
                <figcaption className="cap">Clear structure → easier to find.</figcaption>
              </figure>
            </article>

            {/* Hosting & Care */}
            <article className="card pad svc-card slide-right" style={{ ["--i" as any]: 2 }}>
              <div className="svc-icon-emoji" aria-hidden="true">🛠️</div>
              <h3 style={{ marginTop: 0 }}>Hosting & Care</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>
                We keep your site online, safe, and up-to-date—so you don’t have to think about it.
              </p>
              <ul className="p emolist" style={{ marginTop: ".5rem" }}>
                <li>🔒 Secure connection (the lock icon)</li>
                <li>🛰️ Fast, reliable hosting with monitoring</li>
                <li>💾 Automatic backups & easy restore</li>
                <li>✍️ Quick help for content edits and fixes</li>
              </ul>
              <figure className="media-figure">
                <img src={shotProcess} className="img-card" alt="Dashboard with uptime, backups, and updates" />
                <figcaption className="cap">Peace of mind—taken care of for you.</figcaption>
              </figure>
            </article>
          </div>
        </div>
      </section>

      {/* ===== VISUAL PROOF (image grid) ===== */}
      {/* <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="h2">See it, don’t just read it</h2>
          <p className="p">A few visual ways to show results on your site:</p>

          <div className="grid grid-4 proof-grid" style={{ marginTop: "1rem" }}>
            {[
              { t: "Before → After", d: "Old vs. new homepages (matching crops)", img: shotDesign },
              { t: "Mobile view", d: "Phone mock showing clear buttons & readability", img: shotWire },
              { t: "Speed badge", d: "Share a performance score card", img: shotProcess },
              { t: "Leads snapshot", d: "Blurred submissions or call logs (real, anonymized)", img: shotDesign },
            ].map((it, i) => (
              <figure key={it.t} className="img-tile" style={{ ["--i" as any]: i }}>
                <img src={it.img} alt={it.t} />
                <figcaption><strong>{it.t}</strong><br /><span>{it.d}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== PRICING ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="h2">Transparent pricing</h2>
          <p className="p">Pick a starting point—everything can be customized.</p>

          <div className="grid grid-3 pricing-cards" style={{ marginTop: "1rem" }}>
            <article className="card pad price-card pop" style={{ ["--i" as any]: 0 }}>
              <h3 style={{ marginTop: 0 }}>Build</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>One-time project</p>
              <ul className="p emolist" style={{ marginTop: ".5rem" }}>
                <li>🗺️ Plan pages & goals together</li>
                <li>🎨 Custom design + development</li>
                <li>🖼️ We load your content & photos</li>
                <li>🎥 Launch + simple handoff video</li>
              </ul>
             <div style={{ marginTop: ".75rem" }}>
  <a className="btn primary sheen" href="/contact">Get a Quote</a>
</div>

            </article>

            <article className="card pad price-card pop" style={{ ["--i" as any]: 1 }}>
              <h3 style={{ marginTop: 0 }}>Hosting</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>$ / month</p>
              <ul className="p emolist" style={{ marginTop: ".5rem" }}>
                <li>🚀 Fast, reliable hosting</li>
                <li>🔒 Secure connection (lock icon)</li>
                <li>📈 Uptime checks & basic analytics</li>
                <li>✉️ Email support</li>
              </ul>
             <div style={{ marginTop: ".75rem" }}>
  <a className="btn primary sheen" href="/contact">Contact for Options</a>
</div>

            </article>

            <article className="card pad price-card pop" style={{ ["--i" as any]: 2 }}>
              <h3 style={{ marginTop: 0 }}>Care</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>$ / month</p>
              <ul className="p emolist" style={{ marginTop: ".5rem" }}>
                <li>🔄 Monthly updates & backups</li>
                <li>⚙️ Priority support</li>
                <li>🧾 Small change requests included</li>
                <li>🔍 Speed & findability checkups</li>
              </ul>
             <div style={{ marginTop: ".75rem" }}>
  <a className="btn primary sheen" href="/contact">Contact to Compare Plans</a>
</div>

            </article>
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES (short + emoji) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">What you’ll get</h2>
          <div className="grid grid-4 deliverables" style={{ marginTop: "1rem" }}>
            {[
              "🧩 A modern, mobile-friendly website",
              "📞 Clear buttons to call, book, or get a quote",
              "🔎 Set up so people can find you on Google",
              "📈 Backups, basic analytics, uptime checks",
              "🔒 Secure connection (lock icon in the bar)",
              "💬 Simple process & fast communication",
              "📁 You own your content, domain, accounts",
              "🤝 A partner for ongoing improvements",
            ].map((x, i) => (
              <div key={x} className="card pad deli-card curtain" style={{ ["--i" as any]: i }}>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK QUOTE (social proof) ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container svc-quote card pad">
          <blockquote>
            “Andrew made it simple. The new site looks great on phones, loads fast, and
            we’ve seen more calls since launch.”
          </blockquote>
          <div className="quote-meta">— Happy Local Business</div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container card pad svc-cta">
          <h2 className="h2" style={{ marginBottom: ".5rem" }}>
            Ready to get more customers?
          </h2>
          <p className="p" style={{ margin: 0 }}>
            I’ll review your current website and give you a simple, no-pressure action plan.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
          </div>
        </div>
      </section>
    </main>
  );
}
