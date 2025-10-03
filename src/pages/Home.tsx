import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import "../styles/globals.css";
import {
  CredBar,
//   AboutPreview,
  ServicesPreview,
  ProcessSnapshot,
  FeaturedProject,
  Testimonials,
  FAQ,
  FinalCTA,
} from "../components/index.tsx";
import AboutPreview from "../components/AboutPreview";
import landscape from "../assets/landscape.gif";
import laptopDesk from "../assets/webdesign.png";
import accent from "../assets/accent.png";
import wire from "../assets/wire.png";
import process from "../assets/process.png";


export default function Home() {
  useTitle("Home");
 useEffect(() => {
  // Observe sections and add 'in' on scroll (keep)
  const selectors = [
    ".home-hero",
    ".credbar",
    ".svc-wrap",
    ".process-grid",
    ".feat-card",
    ".testi-wrap",
    ".faq-wrap",
    ".final-cta",
    ".wireframe-showcase",
  ];
  const els = selectors.flatMap((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)));
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));

  // Elements for scroll-linked progress
  const progressElems = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll]"));
  const bar = document.getElementById("scroll-progress");
  const hero = document.querySelector<HTMLElement>(".home-hero");

  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

  const onScroll = () => {
    const h = document.documentElement;

    // Global page progress bar
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (bar) bar.style.setProperty("--progress", `${scrolled}%`);

    // Hero local progress 0..1
    if (hero) {
      const y = window.scrollY - hero.offsetTop;
      const height = hero.offsetHeight || 1;
      hero.style.setProperty("--p", clamp01(y / height).toFixed(4));
    }

    // Per-section progress 0..1 for any [data-scroll] element
    for (const el of progressElems) {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // start when top hits ~80% of viewport, end when bottom passes ~20%
      const start = vh * 0.8;
      const end = vh * 0.2 + rect.height;
      const y = start - rect.top;              // how far past "start" we are
      const p = clamp01(y / end);
      el.style.setProperty("--p", p.toFixed(4));
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Hero parallax shimmer (mouse) — kept
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

  {/* rotating badge (plain language) */}
  <div className="rotating-badge" aria-hidden="true">
    <svg viewBox="0 0 200 200">
      <defs>
        <path id="circlePath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
      </defs>
      <text dy="5" className="badge-text">
        <textPath href="#circlePath" startOffset="0%">
          • pelfrey development • web design • easy to find on google • hosting & care •
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
      Custom websites that look great, load fast, and help customers find you.
      We keep everything running—hosting, updates, and friendly support.
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
        {/* <AboutPreview /> */}

      <section className="vibe-section">
  <div className="vibe-backdrop" aria-hidden="true" />
  <CredBar />
</section>
        <AboutPreview />

            <section className="image-break">
  <div className="container">
    <img src={laptopDesk} alt="Laptop on a desk with code and charts" className="break-img" />
  </div>
</section>
      <section className="vibe-section">
  <div className="vibe-backdrop" aria-hidden="true" />
  <ServicesPreview />
</section>
    <section className="container wireframe-showcase">
  <div className="wireframe-rotor">
    <img 
      src={wire} 
      alt="Wireframe laptop and phone illustration" 
      className="wireframe-img"
    />
  </div>
</section>

      <section className="vibe-section">
  <div className="vibe-backdrop" aria-hidden="true" />
  <ProcessSnapshot />
</section>
     <div className="container" style={{marginTop: '2rem'}}>
  <img
    src={process}
    alt="Pelfrey process: Discover, Design, Develop, Deploy"
    className="process-hero-img"
  />
</div>

<section className="vibe-section">
  <div className="vibe-backdrop" aria-hidden="true" />
  <FeaturedProject />
</section>
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
