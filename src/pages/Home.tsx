import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";
import {
  CredBar,
  ServicesPreview,
  ProcessSnapshot,
  FeaturedProject,
  Testimonials,
  FAQ,
  FinalCTA,
} from "../components/index.tsx";
import landscape from "../assets/landscape.gif";
import laptopDesk from "../assets/webdesign.png";
import accent from "../assets/accent.png"


export default function Home() {
  useTitle("Home");

  useEffect(() => {
    // Observe sections and add 'in' on scroll
    const selectors = [
      ".home-hero",
      ".credbar",
      ".svc-wrap",
      ".process-grid",
      ".feat-card",
      ".testi-wrap",
      ".faq-wrap",
      ".final-cta",
    ];
    const els = selectors.flatMap((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // scroll progress
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.setProperty("--progress", `${scrolled}%`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // hero parallax shimmer (mouse)
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      document.body.style.setProperty("--mx", x.toFixed(3));
      document.body.style.setProperty("--my", y.toFixed(3));
    };
    window.addEventListener("mousemove", onMouse);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const words = [
    "Stop",
    "losing",
    "customers",
    "to",
    "outdated",
    "websites."
  ];

  return (
    <>
      {/* scroll progress */}
      <div id="scroll-progress" className="scroll-progress" />

      {/* HERO */}
      <section
        className="hero anim-pan-bg home-hero"
        style={{
          backgroundImage: `url(${landscape})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div className="hero-overlay" />

        {/* rotating badge */}
        <div className="rotating-badge" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="circlePath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
            </defs>
            <text dy="5" className="badge-text">
              <textPath href="#circlePath" startOffset="0%">
                • pelfrey development • web design • seo & hosting •
              </textPath>
            </text>
          </svg>
        </div>

        <div className="container hero-inner">
          {/* marquee (kept) */}
          <div className="ticker">
            <div className="track">
              <span>STOP LOSING CUSTOMERS TO OUTDATED WEBSITES — </span>
              <span>STOP LOSING CUSTOMERS TO OUTDATED WEBSITES — </span>
              <span>STOP LOSING CUSTOMERS TO OUTDATED WEBSITES — </span>
              <span>STOP LOSING CUSTOMERS TO OUTDATED WEBSITES — </span>
            </div>
          </div>

          {/* per-word animated headline */}
          <h1 className="h1 hero-chunks" aria-label="Stop losing customers to outdated websites.">
            {words.map((w, i) => (
              <span className="chunk" style={{ ["--i" as any]: i }} key={w + i}>{w}</span>
            ))}
          </h1>

          {/* underline wipe */}
          <div className="underline-wipe" aria-hidden="true" />

          <p className="p hero-sub">
            Custom, fast, SEO-ready sites for local businesses. Managed hosting & ongoing support.
          </p>

          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
            <a className="btn ghost sheen" href="/work">See Work</a>
          </div>
        </div>

        {/* subtle floating blobs */}
        <div className="blob b1" />
        <div className="blob b2" />
      </section>

      {/* JOURNEY */}
      <CredBar />
            <section className="image-break">
  <div className="container">
    <img src={laptopDesk} alt="Laptop on a desk with code and charts" className="break-img" />
  </div>
</section>
      <ServicesPreview />
      <img
  src={accent}
  alt=""
  className="services-accent"
  aria-hidden="true"
/>
      <ProcessSnapshot />
      <FeaturedProject />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
