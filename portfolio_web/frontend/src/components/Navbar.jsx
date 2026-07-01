import { useState } from "react";

const NAV_ITEMS = ["Home", "Hero", "About", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="logo">
          <span className="logo__star">✦</span>
          <span className="logo__text">SHAILJA</span>
        </div>

        {/* Navigation Links (desktop) */}
        <ul className="links">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Contact Button (desktop) */}
        <a href="#contact" className="contact-btn">
          Contact
        </a>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="contact-btn contact-btn--mobile" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      <style>{`
        .header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
        }

        .nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .logo__star {
          color: #fff57e;
          font-size: 44px;
        }
        .logo__text {
          color: #f1e8c0;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .links {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }
        .links a {
          color: #fcf9ea;
          text-decoration: none;
          font-size: 20px;
          white-space: nowrap;
        }

        .contact-btn {
          background: #fcf9ea;
          padding: 10px 20px;
          border-radius: 999px;
          color: #000000;
          text-decoration: none;
          font-size: 25px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          flex-shrink: 0;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #fcf9ea;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .hamburger--open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger--open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger--open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
        }
        .mobile-menu--open {
          max-height: 400px;
        }
        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          margin: 0;
          padding: 16px 32px 0;
          gap: 20px;
        }
        .mobile-menu a {
          color: #fcf9ea;
          text-decoration: none;
          font-size: 18px;
        }
        .contact-btn--mobile {
          display: inline-block;
          margin: 20px 32px 24px;
        }

        /* ---- Tablet: tighten spacing before switching to hamburger ---- */
        @media (max-width: 900px) {
          .links {
            gap: 20px;
          }
          .links a {
            font-size: 17px;
          }
          .contact-btn {
            font-size: 18px;
            padding: 8px 16px;
          }
        }

        /* ---- Mobile: swap links/contact for hamburger ---- */
        @media (max-width: 700px) {
          .nav {
            padding: 12px 20px;
          }
          .logo__star {
            font-size: 32px;
          }
          .links,
          .contact-btn:not(.contact-btn--mobile) {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}