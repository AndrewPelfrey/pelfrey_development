import "../styles/Footer.css";
import logo from "../assets/pelfreyweb.png"; // replace with your actual logo path

const Icon = {
  GitHub: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.06 1.82 2.78 1.3 3.46.99.11-.77.41-1.3.75-1.6-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.57.24 2.73.12 3.02.75.81 1.2 1.85 1.2 3.11 0 4.43-2.68 5.41-5.24 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.7H9.35V9h3.41v1.56h.05c.47-.89 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.35ZM5.34 7.43A2.07 2.07 0 1 1 5.33 3.3a2.07 2.07 0 0 1 .01 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 7 8-7v10H4Z"/>
    </svg>
  )
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Logo instead of text */}
        <div className="footer-brand">
          <img src={logo} alt="Pelfrey Development Logo" className="footer-logo" />
          <p className="muted">Building modern, local-friendly websites.</p>
        </div>

        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="icon">
            <Icon.GitHub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon">
            <Icon.LinkedIn />
          </a>
          <a href="mailto:pelfreya6@gmail.com" aria-label="Email" className="icon">
            <Icon.Mail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="muted">© {new Date().getFullYear()} Pelfrey Development — All rights reserved.</span>
      </div>
    </footer>
  );
}
