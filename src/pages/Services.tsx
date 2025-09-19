import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";
import serviceHero from "../assets/abstract.gif"; // your hero image/gif

export default function Services() {
  useTitle("Services");

  useEffect(() => {
    // Observe each Services section root and add 'in' when visible
    const selectors = [
      ".services-hero",
      ".svc-cards",
      ".pricing-cards",
      ".deliverables",
      ".ideas",
      ".svc-cta"
    ];
    const els = selectors.flatMap((sel) =>
      Array.from(document.querySelectorAll<HTMLElement>(sel))
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* ===== HERO (full background with bold motion) ===== */}
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
          {/* Split headline into word spans for stronger, staggered motion */}
          <h1 className="h1 hero-chunks" aria-label="Services that turn visitors into customers">
            {["Services", "that", "turn", "visitors", "into", "customers"].map((w, i) => (
              <span className="chunk" style={{ ["--i" as any]: i }} key={w + i}>{w}</span>
            ))}
          </h1>

          {/* underline wipe */}
          <div className="underline-wipe" aria-hidden="true" />

          <p className="p hero-copy">
            I design and build fast, modern websites for local businesses—then keep
            them secure, search-friendly, and easy to update. Choose the pieces
            you need, or bundle them.
          </p>

          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
            <a className="btn ghost sheen" href="/work">See Work</a>
          </div>
        </div>

        {/* subtle hero accents */}
        <div className="svc-blob s1" />
        <div className="svc-blob s2" />
      </section>

      {/* ===== 3 CORE SERVICES (3D flip + mask) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">What I can do for you</h2>

          <div className="grid grid-3 svc-cards" style={{ marginTop: "1rem" }}>
            <article className="card pad svc-card flip" style={{ ["--i" as any]: 0 }}>
              <div className="mask" />
              <h3 style={{ marginTop: 0 }}>Web Design & Build</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>
                A custom, mobile-first website that makes it easy for customers
                to call, book, or request a quote—built with performance and accessibility in mind.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>✅ Modern, conversion-focused design</li>
                <li>✅ Responsive & fast (Core Web Vitals-friendly)</li>
                <li>✅ Clear calls-to-action (click-to-call, forms, maps)</li>
                <li>✅ Easy to maintain—no bloated frameworks</li>
              </ul>
            </article>

            <article className="card pad svc-card slide-left" style={{ ["--i" as any]: 1 }}>
              <div className="mask" />
              <h3 style={{ marginTop: 0 }}>SEO Foundations</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>
                Technical basics done right so you can be found locally: clean structure,
                metadata, sitemap, and performance that Google loves.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>✅ Titles, meta descriptions, and headings</li>
                <li>✅ Image alt text & schema basics</li>
                <li>✅ XML sitemap & robots.txt</li>
                <li>✅ Local SEO tips (Google Business Profile setup)</li>
              </ul>
            </article>

            <article className="card pad svc-card slide-right" style={{ ["--i" as any]: 2 }}>
              <div className="mask" />
              <h3 style={{ marginTop: 0 }}>Hosting & Care</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>
                Peace of mind: managed hosting, SSL, backups, and updates—plus priority support when you want changes.
              </p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>✅ SSL, CDN, and uptime monitoring</li>
                <li>✅ Scheduled backups & rollbacks</li>
                <li>✅ Content and small change requests</li>
                <li>✅ Analytics dashboard setup</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ===== PRICING (bouncy pop + glow) ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="h2">Transparent pricing</h2>
          <p className="p">Pick a starting point—everything can be customized to your needs.</p>

          <div className="grid grid-3 pricing-cards" style={{ marginTop: "1rem" }}>
            <article className="card pad price-card pop" style={{ ["--i" as any]: 0 }}>
              <h3 style={{ marginTop: 0 }}>Build</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>One-time project fee</p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• Discovery & scope</li>
                <li>• Design & development</li>
                <li>• Content load (provided by you)</li>
                <li>• Launch & handoff</li>
              </ul>
              <div style={{ marginTop: ".75rem" }}>
                <a className="btn ghost sheen" href="/contact">Get a quote</a>
              </div>
            </article>

            <article className="card pad price-card pop" style={{ ["--i" as any]: 1 }}>
              <h3 style={{ marginTop: 0 }}>Hosting</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>$ / month</p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• Fast CDN hosting</li>
                <li>• SSL certificate</li>
                <li>• Uptime monitoring</li>
                <li>• Basic analytics</li>
              </ul>
              <div style={{ marginTop: ".75rem" }}>
                <a className="btn ghost sheen" href="/contact">See options</a>
              </div>
            </article>

            <article className="card pad price-card pop" style={{ ["--i" as any]: 2 }}>
              <h3 style={{ marginTop: 0 }}>Care</h3>
              <p className="p" style={{ marginTop: ".25rem" }}>$ / month</p>
              <ul className="p" style={{ marginTop: ".5rem" }}>
                <li>• Monthly updates & backups</li>
                <li>• Priority support</li>
                <li>• Small change requests</li>
                <li>• Performance & SEO checkups</li>
              </ul>
              <div style={{ marginTop: ".75rem" }}>
                <a className="btn ghost sheen" href="/contact">Compare plans</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES (clip curtain) ===== */}
      <section className="section">
        <div className="container">
          <h2 className="h2">What you’ll get</h2>
          <div className="grid grid-4 deliverables" style={{ marginTop: "1rem" }}>
            {[
              "A modern, mobile-first website tailored to your business",
              "Clear CTAs (call, book, quote) to drive action",
              "On-page SEO foundations and performance tuning",
              "Analytics, uptime monitoring, and backups",
              "Secure hosting with SSL (optional)",
              "Simple process & fast communication",
              "Ownership of your content and assets",
              "A partner for ongoing improvements",
            ].map((x, i) => (
              <div key={x} className="card pad deli-card curtain" style={{ ["--i" as any]: i }}>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE IDEAS (rotate-in + slide) ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="h2">Show, don’t tell</h2>
          <p className="p">Add visuals that prove outcomes. Here’s what I recommend:</p>
          <div className="grid grid-4 ideas" style={{ marginTop: "1rem" }}>
            {[
              { t: "Before → After", d: "Screenshot the old site vs. your redesign. 1600×900, cropped similarly." },
              { t: "Mobile view", d: "Phone mockup showing perfect readability & clear CTA." },
              { t: "Speed badge", d: "Lighthouse/Pagespeed score graphic (performance & accessibility)." },
              { t: "Leads snapshot", d: "Blurred form submissions or call logs to imply real results." },
            ].map((it, i) => (
              <div key={it.t} className="card pad idea-card rotate" style={{ ["--i" as any]: i }}>
                <strong>{it.t}</strong>
                <p className="p" style={{ marginTop: ".35rem" }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA (pulse glow) ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container card pad svc-cta">
          <h2 className="h2" style={{ marginBottom: ".5rem" }}>
            Ready to get more customers?
          </h2>
          <p className="p" style={{ margin: 0 }}>
            I’ll review your current website (or situation) and give you a simple, no-pressure action plan.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
          </div>
        </div>
      </section>
    </main>
  );
}
