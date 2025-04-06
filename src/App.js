import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Contact from "./Contact";
import Collaborate from "./Collaborate";
import JoinUs from "./JoinUs";
import Team from "./Team";
import AboutUs from "./AboutUs";
import Events from "./Events";

import logo from "./kavyarang-logo.png";
import alternate from "./Kavyarang favicon.png";
import linkedin from "./linkedin-icon.png";
import instagram from "./instagram-icon.png";
import member1 from "./member1.jpg";
import member2 from "./member2.jpg";
import member3 from "./member3.jpg";
import slide1 from "./_DSC4830.JPG";
import slide2 from "./_DSC4822.JPG";
import slide3 from "./IMG_3382.png";
import slide4 from "./IMG-20240911-WA0043.jpg";

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Departments Component with Dynamic Routing
function Departments() {
  const departments = [
    {
      name: "Management",
      slug: "management",
      description:
        "The Management Department ensures the smooth operation and strategic direction of Kavyarang.",
      roles: [
        "Plan and organize society events and meetings.",
        "Coordinate between departments for seamless execution.",
        "Manage budgets and resources effectively.",
        "Oversee membership recruitment and retention.",
        "Represent the society in institutional matters.",
      ],
      importance:
        "This department is the backbone of the society, providing leadership and structure.",
    },
    {
      name: "Creative",
      slug: "creative",
      description:
        "The Creative Department brings the literary vision to life through art, writing, and innovation.",
      roles: [
        "Develop content for events, such as poetry and stories.",
        "Design posters, flyers, and other promotional materials.",
        "Curate themes for literary competitions and workshops.",
        "Collaborate on creative projects like anthologies.",
        "Inspire members with innovative ideas.",
      ],
      importance:
        "A literary society thrives on creativity. This department fuels imagination.",
    },
    {
      name: "Social Media",
      slug: "social-media",
      description:
        "The Social Media Department amplifies Kavyarang’s presence and engagement online.",
      roles: [
        "Manage social media accounts (Instagram, LinkedIn, etc.).",
        "Create and schedule posts about events and updates.",
        "Engage with followers and respond to inquiries.",
        "Promote events and campaigns digitally.",
        "Analyze engagement metrics to improve outreach.",
      ],
      importance:
        "In the digital age, visibility is key. This department connects Kavyarang with a broader audience.",
    },
    {
      name: "Debate",
      slug: "debate",
      description:
        "The Debate Department sharpens minds through argumentation and discourse.",
      roles: [
        "Organize debates and public speaking events.",
        "Train members in debate techniques and rhetoric.",
        "Research topics for discussions and competitions.",
        "Moderate debates to ensure fair participation.",
        "Promote critical thinking within the society.",
      ],
      importance:
        "Debate enriches a literary society by fostering intellectual growth and eloquence.",
    },
    {
      name: "Web Development",
      slug: "web-development",
      description:
        "The Web Development Department maintains Kavyarang’s digital home.",
      roles: [
        "Design and update the society’s website.",
        "Ensure the site is user-friendly and visually appealing.",
        "Fix technical issues and bugs promptly.",
        "Add new features like event registration or galleries.",
        "Collaborate with other departments for content integration.",
      ],
      importance:
        "A strong online presence is vital for accessibility and professionalism.",
    },
  ];

  const { deptSlug } = useParams(); // Get the slug from URL
  const location = useLocation();
  const [currentDeptIndex, setCurrentDeptIndex] = useState(() => {
    // Find index based on slug, default to 0 if not found
    const index = departments.findIndex((dept) => dept.slug === deptSlug);
    return index !== -1 ? index : 0;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNext = () => {
    setCurrentDeptIndex((prevIndex) => (prevIndex + 1) % departments.length);
  };

  const handlePrev = () => {
    setCurrentDeptIndex(
      (prevIndex) => (prevIndex - 1 + departments.length) % departments.length
    );
  };

  const currentDept = departments[currentDeptIndex];

  return (
    <section className="departments-section fade-in">
      <h1>Our Departments</h1>
      <div className="dept-container">
        <button className="arrow-btn prev" onClick={handlePrev}>
          ←
        </button>
        <div className="dept-content">
          <h2>{currentDept.name} Department</h2>
          <p className="dept-description">{currentDept.description}</p>
          <div className="dept-details">
            <div className="roles">
              <h3>Roles & Responsibilities</h3>
              <ul>
                {currentDept.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
            <div className="importance">
              <h3>Why This Department Matters</h3>
              <p>{currentDept.importance}</p>
            </div>
          </div>
        </div>
        <button className="arrow-btn next" onClick={handleNext}>
          →
        </button>
      </div>
      <p className="dept-counter">
        {currentDeptIndex + 1} of {departments.length}
      </p>
    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) return savedMode === "true";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return true;
    return false;
  });
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("darkMode")) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const slides = [slide1, slide2, slide3, slide4];

  return (
    <Router>
      <div>
        <ScrollToTop />
        <nav className="navbar">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Kavyarang Logo" className="logo" />
          </Link>
          <button className="hamburger" onClick={toggleNav}>
            ☰
          </button>
          <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={toggleNav}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={toggleNav}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleNav}>
                Contact Us
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                More ▼
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/join-us" onClick={toggleNav}>
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link to="/collaborate" onClick={toggleNav}>
                    Collaborate with Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li className="theme-toggle">
              <span className="toggle-label">☀️</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider"></span>
              </label>
              <span className="toggle-label">🌙</span>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <section className="slider-section fade-in">
                    <div className="slider-container">
                      {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                          <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="slide-img"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="content intro-section fade-in">
                    <div className="card">
                      <p>
                        The Literature Club at Vivekananda Institute of
                        Professional Studies - Technical Campus is a vibrant
                        community dedicated to celebrating the beauty and power
                        of literature. We believe in fostering a love for
                        reading, writing, and literary exploration among
                        students and faculty members. Join us at VIPS-TC to
                        explore the world of words!
                      </p>
                    </div>
                  </section>
                  <section className="founding-members fade-in">
                    <h2>Our Founding Members</h2>
                    <div className="members-container">
                      <div className="member-card">
                        <img
                          src={member1}
                          alt="Founder 1"
                          className="member-img"
                        />
                        <h3>Drishti Nagpal</h3>
                        <p>President & Founder</p>
                      </div>
                      <div className="member-card">
                        <img
                          src={member2}
                          alt="Founder 2"
                          className="member-img"
                        />
                        <h3>Vaibhav Wadhwa</h3>
                        <p>Founding Member</p>
                      </div>
                      <div className="member-card">
                        <img
                          src={alternate}
                          alt="Founder 3"
                          className="member-img"
                        />
                        <h3>Hadis Khan</h3>
                        <p>Founding Member</p>
                      </div>
                      <div className="member-card">
                        <img
                          src={alternate}
                          alt="Founder 4"
                          className="member-img"
                        />
                        <h3>Yatharth</h3>
                        <p>Founding Member</p>
                      </div>
                    </div>
                  </section>
                  <section className="links-section fade-in">
                    <h2>Explore More</h2>
                    <div className="links-container">
                      <div className="link-card">
                        <h3>Events</h3>
                        <p>
                          Join us for book discussions, poetry readings, and
                          writing workshops.
                        </p>
                        <Link to="/events" className="link-btn">
                          Learn More
                        </Link>
                      </div>
                      <div className="link-card">
                        <h3>Team</h3>
                        <p>
                          Meet the passionate individuals driving our literary
                          community.
                        </p>
                        <Link to="/team" className="link-btn">
                          Meet the Team
                        </Link>
                      </div>
                      <div className="link-card">
                        <h3>Join Us</h3>
                        <p>Become a part of our vibrant literary family.</p>
                        <Link to="/join-us" className="link-btn">
                          Join Now
                        </Link>
                      </div>
                      <div className="link-card">
                        <h3>Contact Us</h3>
                        <p>Get in touch for inquiries or collaborations.</p>
                        <Link to="/contact" className="link-btn">
                          Contact
                        </Link>
                      </div>
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/departments/:deptSlug" element={<Departments />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="*"
              element={
                <div className="fade-in">
                  <h1>404 - Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Explore Departments</h3>
              <ul>
                <li>
                  <Link to="/departments/management">Management</Link>
                </li>
                <li>
                  <Link to="/departments/creative">Creative</Link>
                </li>
                <li>
                  <Link to="/departments/social-media">Social Media</Link>
                </li>
                <li>
                  <Link to="/departments/debate">Debate</Link>
                </li>
                <li>
                  <Link to="/departments/web-development">Web Development</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/about-us" onClick={toggleNav}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/join-us">Join Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a
                  href="https://instagram.com/kavyarang_vipsengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" className="insta-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/kavyarang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2025 Kavyarang Literary Society | All Rights Reserved
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
