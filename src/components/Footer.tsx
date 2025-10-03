import "../styles/Footer.css";
import logo from "../assets/pelfreyweb.png"; // update path if needed

// Inline SVG icons (no external libraries)
const Icon = {
  Phone: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C12.3 21 3 11.7 3 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.57 3.6a1 1 0 01-.25 1l-2.22 2.2z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M20 4H4a2 2 0 00-2 2v1.2l10 5.8 10-5.8V6a2 2 0 00-2-2zm0 5.4l-8 4.6-8-4.6V18a2 2 0 002 2h12a2 2 0 002-2V9.4z"/>
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path fill="currentColor" d="M12 .5A11.5 11.5 0 008.36 22.9c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.06 1.82 2.78 1.3 3.46.99.11-.77.41-1.3.75-1.6-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.19a11.1 11.1 0 015.83 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.57.24 2.73.12 3.02.75.81 1.2 1.85 1.2 3.11 0 4.43-2.68 5.41-5.24 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.7H9.35V9h3.41v1.56h.05c.47-.89 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.35zM5.34 7.43A2.07 2.07 0 115.33 3.3a2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  ),
  ArrowTop: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M12 4l6 6h-4v8h-4v-8H6l6-6z"/>
    </svg>
  ),
};

const serviceAreas = ["Local businesses", "Trades & services", "Shops & studios"]; // tweak freely

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Logo + line */}
        <div className="footer-brand">
          <img src={logo} alt="Pelfrey Development" className="footer-logo" />
          <p className="muted">Websites that look great, load fast, and get you more calls.</p>
        </div>

        {/* Primary CTA */}
        <div className="footer-cta">
          <a className="btn primary sheen" href="/contact">Get a Free Website Checkup</a>
        </div>

        {/* Contact chips */}
        <div className="footer-contacts">
          <a className="chip contact" href="tel:+1-000-000-0000">
            <Icon.Phone /> <span>Call now</span>
          </a>
          <a className="chip contact" href="mailto:pelfreya6@gmail.com">
            <Icon.Mail /> <span>Email</span>
          </a>
        </div>

        {/* Service area (optional) */}
        <div className="footer-areas">
          {serviceAreas.map((a) => (
            <span className="pill" key={a}>{a}</span>
          ))}
        </div>

        {/* Social */}
        <div className="footer-social">
          <a className="icon" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.Github /></a>
          <a className="icon" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.Linkedin /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Icon.ArrowTop /> <span>Back to top</span>
        </button>
        <span className="muted">© {new Date().getFullYear()} Pelfrey Development — All rights reserved.</span>
      </div>
    </footer>
  );
}
