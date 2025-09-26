import { useEffect } from "react";
import "../styles/globals.css"; // keep if you're not importing globals at a higher level
import headshot from "../assets/cake.jpeg";
import pier from "../assets/pier.jpeg";

export default function About() {
  useEffect(() => {
    // Scroll-reveal (works even if Home’s observer isn’t mounted)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section vibe-section about-wrap">
      <div className="vibe-backdrop vibe-backdrop--shimmer" aria-hidden="true" />

      {/* HERO ROW: Copy + Pier image */}
      <div className="container about-hero-grid" data-reveal="up">
        <div className="about-intro vibe-card">
          <h1 className="h2 about-title fancy-grad">About Pelfrey Web Design</h1>
          <p className="p lead">
            At Pelfrey Web Design, we believe your website should be as unique as your business.
            We’re a small, local company dedicated to helping other small businesses in our community succeed.
          </p>
          <p className="p">
            Unlike large agencies with one-size-fits-all solutions, we take our time to get to know you and your goals.
            From the first conversation to launch, we keep things clear, simple, and personal—so you can focus on what you do best.
          </p>
        </div>

        <figure className="about-visual vibe-card">
          <img src={pier} alt="The Pier — part of our local community" className="about-hero-img kenburns" />
          <figcaption className="about-cap">Rooted in the local community.</figcaption>
        </figure>
      </div>

      {/* FOUNDER ROW */}
      <div className="container about-founder vibe-card" data-reveal="right">
        <div className="about-founder-media">
          <img src={headshot} alt="Andrew Pelfrey" className="about-headshot floaty" />
        </div>
        <div className="about-founder-copy">
          <h2 className="h2 underglow">Meet Andrew Pelfrey</h2>
          <p className="p">
            Andrew Pelfrey is the founder of Pelfrey Web Design. A true enthusiast for local small businesses, he’s passionate
            about their variety and personality. He started Pelfrey Web Design to help the community succeed with custom digital
            storefronts that reflect each business’s spirit.
          </p>
          <p className="p">
            When he isn’t coding, Andrew’s exploring local markets and galleries or walking The Pier and nearby beaches.
          </p>
          <div className="about-badges">
            <span className="about-badge">Clear process</span>
            <span className="about-badge">Fixed pricing</span>
            <span className="about-badge">Managed hosting</span>
          </div>
        </div>
      </div>

      {/* TRUST NOTE */}
      <div className="container about-note vibe-card" data-reveal="up">
        <p className="p">
          If you want a partner who listens, explains things simply, and builds something that feels like you—welcome.
          That’s what we do here.
        </p>
      </div>
    </section>
  );
}
