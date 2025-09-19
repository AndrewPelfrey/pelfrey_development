// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import logo from "../assets/pelfreyweb.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="brand">
          <NavLink to="/" end>
            <img src={logo} alt="Pelfrey Development logo" className="brand-logo" />
          </NavLink>
        </div>

        {/* Links on the same row */}
        <div className="nav-links">
          <NavLink to="/services" className="link">Services</NavLink>
          <NavLink to="/process" className="link">Process</NavLink>
          <NavLink to="/work" className="link">Work</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </header>
  );
}
