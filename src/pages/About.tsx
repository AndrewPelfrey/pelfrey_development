import { useEffect } from "react";
import "../styles/globals.css";
import pier from "../assets/pier.jpeg"; // <-- single real image
import aboutAbstract from "../assets/about abstract.png";


export default function About() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal-on-scroll + progress variable
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) el.classList.add("is-in");
          el.style.setProperty("--p", e.intersectionRatio.toFixed(3));
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));

    // Parallax for hero content + orbs
    const hero = document.querySelector<HTMLElement>(".about-hero-media");
    const orbs = Array.from(document.querySelectorAll<HTMLElement>(".about-orb"));
    const content = document.querySelector<HTMLElement>(".about-hero-content");
    const onScroll = () => {
      if (!hero || reduced) return;
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const vis = Math.max(0, Math.min(1, 1 - (rect.top + rect.height * 0.25) / (vh + rect.height * 0.25)));
      hero.style.setProperty("--heroP", vis.toFixed(3));
      // parallax weights
      content && (content.style.transform = `translateY(${(1 - vis) * 18}px)`);
      orbs.forEach((o, i) => {
        const dx = (i ? 1 : -1) * 16 * vis;
        const dy = (i ? -0.8 : -1) * 12 * vis;
        o.style.transform = `translate(${dx}px, ${dy}px) scale(${1 + vis * 0.05})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="about-page">
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-media" data-reveal>
          <img src={pier} alt="" className="about-hero-img" />
          {/* decorative layers */}
          <div className="about-grid-veil" aria-hidden="true" />
          <svg className="about-squiggle sq1" viewBox="0 0 200 20" aria-hidden="true">
            <path d="M0 10 Q 20 0 40 10 T 80 10 T 120 10 T 160 10 T 200 10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="about-squiggle sq2" viewBox="0 0 200 20" aria-hidden="true">
            <path d="M0 10 Q 20 0 40 10 T 80 10 T 120 10 T 160 10 T 200 10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="about-orb o1" aria-hidden="true" />
          <div className="about-orb o2" aria-hidden="true" />
          <div className="about-hero-overlay" aria-hidden="true" />
          <div className="about-hero-content">
            <h1 className="h1">About Pelfrey Web Design</h1>
            <div className="underline-loop" aria-hidden="true" />
            <p className="lead">I help local businesses look great online—and make it easy for customers to choose you.</p>
          </div>
        </div>

        {/* value marquee (constant motion) */}
        <div className="about-ticker" aria-hidden="true">
          <div className="about-track">
            <span>clear to use • fast load • easy to find on Google • click-to-call • friendly support • </span>
            <span>clear to use • fast load • easy to find on Google • click-to-call • friendly support • </span>
          </div>
        </div>
      </section>

      {/* ===== MEET ANDREW — first person ===== */}
      <section className="section">
        <div className="container about-me card pad pulse-border" data-reveal data-anim="rise">
          <h2 className="h2" style={{ marginBottom: ".25rem" }}>Meet Andrew Pelfrey</h2>
          <p className="p" style={{ margin: 0 }}>
            I’m the founder of Pelfrey Web Design. I love figuring out how the internet works and turning that into simple wins
            for real businesses. My goal is to build a site that looks great, loads fast, and makes it effortless for people to
            call, book, or ask for a quote. When I’m not coding, you’ll find me exploring local shops, markets, and galleries—
            or walking The Pier and nearby beaches.
          </p>
          <div className="sig-line" aria-hidden="true" />
        </div>
      </section>

      {/* ===== VALUES (not services/process—just who you are) ===== */}
      <section className="section">
        <div className="container about-slab">
          <h2 className="h2" data-reveal>What I believe</h2>
          <div className="about-grid">
            <article className="card pad about-block bump" data-reveal data-anim="slide-left" style={{ ["--i" as any]: 0 }}>
              <h3 className="h3">Keep it human</h3>
              <p className="p">Plain language. Honest timelines. A site your customers can actually use.</p>
              <ul className="about-tags">
                <li>Plain English</li><li>Real outcomes</li><li>Respect time</li>
              </ul>
            </article>

            <article className="card pad about-block bump" data-reveal data-anim="rise" style={{ ["--i" as any]: 1 }}>
              <h3 className="h3">Clarity beats clever</h3>
              <p className="p">Clear pages and obvious next steps win—every time.</p>
              <ul className="about-tags">
                <li>Readable</li><li>Obvious CTAs</li><li>Simple nav</li>
              </ul>
            </article>

            <article className="card pad about-block bump" data-reveal data-anim="slide-right" style={{ ["--i" as any]: 2 }}>
              <h3 className="h3">Performance matters</h3>
              <p className="p">Fast load builds trust and helps you show up when people search.</p>
              <ul className="about-tags">
                <li>Fast</li><li>Reliable</li><li>Findable</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      {/* ===== VISUAL DIVIDER ===== */}
<section className="about-divider" aria-hidden="true" data-reveal data-anim="rise">
  <div className="container">
    <figure className="about-divider-frame">
      <img
        src={aboutAbstract}
        alt=""
        className="about-divider-img"
        loading="lazy"
        decoding="async"
      />
      <div className="about-divider-glow" />
    </figure>
  </div>
</section>


      {/* ===== HOW WE’LL WORK TOGETHER (vibe, not full process) ===== */}
      <section className="section">
        <div className="container about-compact">
          <h2 className="h2" data-reveal>How we’ll work together</h2>
          <div className="mini-steps" data-reveal>
            {/* Brief, non-overlapping with Process page */}
            <div className="mini-step" style={{ ["--i" as any]: 0 }}>
              <div className="mini-num">1</div>
              <div className="mini-copy">
                <strong>Listen</strong>
                <span>Quick chat to understand your goals and your customers.</span>
              </div>
            </div>
            <div className="mini-step" style={{ ["--i" as any]: 1 }}>
              <div className="mini-num">2</div>
              <div className="mini-copy">
                <strong>Shape</strong>
                <span>We outline pages and make a simple visual plan—no jargon.</span>
              </div>
            </div>
            <div className="mini-step" style={{ ["--i" as any]: 2 }}>
              <div className="mini-num">3</div>
              <div className="mini-copy">
                <strong>Deliver</strong>
                <span>You get a clean, fast site that’s easy to use—and easy to update.</span>
              </div>
            </div>
          </div>
          {/* gentle animated line */}
          <div className="mini-line" aria-hidden="true" />
        </div>
      </section>

      {/* ===== COMMUNITY / ROOTS chips ===== */}
      <section className="section">
        <div className="container" data-reveal>
          <div className="roots-wrap card pad">
            <h3 className="h3" style={{ marginTop: 0 }}>Rooted in the community</h3>
            <div className="roots-chips">
              {["Local businesses", "Shops & studios", "Trades & services", "Nonprofits"].map((t) => (
                <span className="pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOTE + CTA ===== */}
      <section className="section">
        <div className="container about-note card pad shimmer" data-reveal data-anim="rise">
          <p className="p">
            If you want a partner who listens, keeps things simple, and builds something that feels like you—welcome.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
          </div>
        </div>
      </section>
    </main>
  );
}
