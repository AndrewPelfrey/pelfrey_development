// src/components/Navbar.tsx
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/pelfreyweb.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="brand">
          <NavLink to="/" end>
            <img src={logo} alt="Pelfrey Development logo" className="brand-logo" />
          </NavLink>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          <NavLink to="/services" className="link">Services</NavLink>
          <NavLink to="/process" className="link">Process</NavLink>
          <NavLink to="/work" className="link">Work</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
          type="button"
        >
          <span className="hamburger-box">
            <span className={`hamburger-inner${open ? " is-open" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Mobile panel (hidden on desktop by your CSS) */}
      <div id="mobile-menu" className={`mobile-panel ${open ? "open" : ""}`}>
        <ul className="mobile-links">
          <li><NavLink to="/services" className="m-link">Services</NavLink></li>
          <li><NavLink to="/process"  className="m-link">Process</NavLink></li>
          <li><NavLink to="/work"     className="m-link">Work</NavLink></li>
          <li><NavLink to="/about"    className="m-link">About</NavLink></li>
          <li><NavLink to="/contact"  className="m-link">Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
}
