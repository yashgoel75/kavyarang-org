import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./JoinUs.css";

function JoinUs() {
  const auditionStartDate = new Date("2025-12-12T00:00:00");
  const currentDate = new Date();
  const [isAuditionLive, setIsAuditionLive] = useState(
    currentDate >= auditionStartDate
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    section: "",
    department: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuditionLive) {
      console.log("Form submitted:", formData);
      alert("Thank you for your submission! We’ll get back to you soon.");
    }
  };

  return (
    <section className="join-us-section fade-in">
      <h1>Join KavyaRang</h1>
      <p className="intro-text">
        Unleash your literary soul and weave your story into our tapestry of
        words!
      </p>

      <div className="audition-info">
        <h2>Audition Details</h2>
        <p>
          <strong>Auditions Begin:</strong> December 12, 2025
        </p>
        <p>
          <strong>Eligibility:</strong> Open to all BTech students in their 1st
          or 2nd year
        </p>
        <p className={`status ${isAuditionLive ? "live" : "not-live"}`}>
          {isAuditionLive
            ? "🎉 Auditions are LIVE — your literary journey starts now!"
            : "⏳ Auditions are yet to awaken. Stay tuned!"}
        </p>
        <p className="explore-dept">
          In the meanwhile, let your curiosity dance through{" "}
          <Link to="/departments" className="dept-link">
            our vibrant departments
          </Link>
          — discover where your passion finds its home!
        </p>
      </div>

      <form
        className={`audition-form ${isAuditionLive ? "active" : "inactive"}`}
        onSubmit={handleSubmit}
      >
        <h2>Audition Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={!isAuditionLive}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={!isAuditionLive}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={!isAuditionLive}
        />
        <input
          type="text"
          name="branch"
          placeholder="Branch (e.g., CSE, ECE)"
          value={formData.branch}
          onChange={handleChange}
          required
          disabled={!isAuditionLive}
        />
        <input
          type="text"
          name="section"
          placeholder="Section (e.g., A, B)"
          value={formData.section}
          onChange={handleChange}
          required
          disabled={!isAuditionLive}
        />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          disabled={!isAuditionLive}
        >
          <option value="">Select Department</option>
          <option value="Management">Management</option>
          <option value="Creative">Creative</option>
          <option value="Social Media">Social Media</option>
          <option value="Debate">Debate</option>
          <option value="Web Development">Web Development</option>
        </select>
        <input
          type="file"
          name="attachment"
          onChange={handleChange}
          disabled={!isAuditionLive}
          accept=".pdf,.doc,.docx,.jpg,.png"
        />
        <button type="submit" disabled={!isAuditionLive}>
          Submit Audition
        </button>
      </form>
    </section>
  );
}

export default JoinUs;
