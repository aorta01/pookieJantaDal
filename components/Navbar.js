"use client";

import { useState } from "react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = () => setIsOpen(false);

  return (
    <nav>
      <a className="nav-brand" href="#top" onClick={closeNav}>
        {/* <div className="nav-seal">✊</div> */}
        <span className="nav-name">Pookie Janta Dal | पूकी जनता दल</span>
        <span className="nav-year">2026</span>
      </a>

      <ul className={`nav-links ${isOpen ? "open" : ""}`} id="navLinks">
        {navLinks.map(([label, href]) => (
          <li key={href}>
            <a href={href} onClick={closeNav}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#join" className="nav-cta" onClick={closeNav}>
            Join
          </a>
        </li>
      </ul>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
