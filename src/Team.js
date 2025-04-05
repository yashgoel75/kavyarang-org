import React from "react";
import "./Team.css";
import logo from "./kavyarang-logo.png";

// Placeholder images (reuse from App.js or replace with actual ones)
import presidentImg from "./president1.jpg"; // Drishti Nagpal
import vicePresidentImg from "./VicePresident1.jpg"; // Vaibhav Wadhwa
import head1Img from "./management1.jpg"; 
import head2Img from "./management2.jpg"; // Reuse for demo
import creative1Img from "./creative1.png"; // Reuse for demo
import socialImg from "./social.jpg";

function Team() {
  return (
    <section className="team-section fade-in">
      <h1>Meet Our Team</h1>
      <p className="intro-text">
        The heartbeat of KavyaRang — a symphony of talent, passion, and literary brilliance.
      </p>

      {/* Leadership Section */}
      <div className="leadership">
        <h2>Leadership</h2>
        <div className="leadership-container">
          <div className="member-card leadership-card">
            <img src={presidentImg} alt="President" className="member-img" />
            <h3>Urvashi Sharma</h3>
            <p>President</p>
          </div>
          <div className="member-card leadership-card">
            <img src={vicePresidentImg} alt="Vice President" className="member-img" />
            <h3>Devansh Bansal</h3>
            <p>Vice President</p>
          </div>
        </div>
      </div>

      {/* Heads Section */}
      <div className="heads">
        <h2>Our Department Heads</h2>
        <div className="heads-container">
          {/* Management Heads */}
          <div className="dept-group">
            <h3>Management Heads</h3>
            <div className="members-container">
              <div className="member-card">
                <img src={head1Img} alt="Management Head 1" className="member-img" />
                <h4>Aparna Singh</h4>
                <p>Management Head</p>
              </div>
              <div className="member-card">
                <img src={head2Img} alt="Management Head 2" className="member-img" />
                <h4>Arnav</h4>
                <p>Management Head</p>
              </div>
            </div>
          </div>

          {/* Creative Heads */}
          <div className="dept-group">
            <h3>Creative Heads</h3>
            <div className="members-container">
              <div className="member-card">
                <img src={creative1Img} alt="Creative Head 1" className="member-img" />
                <h4>Bhavesh Gupta</h4>
                <p>Creative Head</p>
              </div>
              <div className="member-card">
                <img src={logo} alt="Creative Head 2" className="member-img" />
                <h4>Nandani Daga</h4>
                <p>Creative Head</p>
              </div>
            </div>
          </div>

          {/* Social Media Heads */}
          <div className="dept-group">
            <h3>Social Media Heads</h3>
            <div className="members-container">
              <div className="member-card">
                <img src={socialImg} alt="Social Media Head 1" className="member-img" />
                <h4>Gaurav Dev Pandey</h4>
                <p>Social Media Head</p>
              </div>
            </div>
          </div>

          {/* Debate Heads */}
          {/* <div className="dept-group">
            <h3>Debate Heads</h3>
            <div className="members-container">
              <div className="member-card">
                <img src={logo} alt="Debate Head 1" className="member-img" />
                <h4>Karan Singh</h4>
                <p>Debate Head</p>
              </div>
              <div className="member-card">
                <img src={logo} alt="Debate Head 2" className="member-img" />
                <h4>Ananya Roy</h4>
                <p>Debate Head</p>
              </div>
            </div>
          </div> */}

          {/* Web Development Heads */}
          {/* <div className="dept-group">
            <h3>Web Development Heads</h3>
            <div className="members-container">
              <div className="member-card">
                <img src={logo} alt="Web Dev Head 1" className="member-img" />
                <h4>Vikram Mehra</h4>
                <p>Web Development Head</p>
              </div>
              <div className="member-card">
                <img src={logo} alt="Web Dev Head 2" className="member-img" />
                <h4>Isha Jain</h4>
                <p>Web Development Head</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Team;