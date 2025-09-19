import "../styles/globals.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="muted">© {new Date().getFullYear()} Pelfrey Development — All rights reserved.</span>
      </div>
    </footer>
  );
}
