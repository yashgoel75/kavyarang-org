import logo from "../kavyarang-logo-removebg.png";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="Kavyarang Logo" className="logo" />
      <button className="hamburger" onClick={toggleNav}>
        ☰
      </button>
      <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
        <li>
          <a href="#" onClick={toggleNav}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleNav}>
            Events
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleNav}>
            Team
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleNav}>
            Contact Us
          </a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle">
            More ▼
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#" onClick={toggleNav}>
                Join Us
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleNav}>
                Collaborate with Us
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleNav}>
                Image Gallery
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleNav}>
                Volunteer
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleNav}>
                Competitions
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
