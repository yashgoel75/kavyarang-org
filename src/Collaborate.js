import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Collaborate.css";
import instagramIcon from "./instagram-icon.png";

function Collaborate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_odesacd", // Replace with your Service ID (e.g., service_xxxxxxx)
        "template_jn9w6px", // Replace with your Collaborate Template ID (e.g., template_yyyyyyy)
        formData,
        "JqrTqeIn4fFoo6PAX" // Replace with your User ID (e.g., user_xxxxxxx)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert(
            "Thank you for your collaboration request! We’ll respond soon."
          );
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="collaborate-section fade-in">
      <h1>Collaborate with Us</h1>
      <p className="intro-text">
        Let’s create something extraordinary together—where your ideas meet our
        literary spirit!
      </p>
      <div className="collaborate-content">
        <h2>Reach Out</h2>
        <p>
          Whether you’re an individual, a group, or an organization, we’re
          excited to explore collaboration opportunities. Contact us via email
          or Instagram, or fill out the form below!
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:kavyarang@email.com">collaborate@kavyarang.org</a>
        </p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/kavyarang_vipsengineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kavyarang_vipsengineering{" "}
            <img src={instagramIcon} alt="Instagram" className="insta-icon" />
          </a>
        </p>
      </div>
      <form className="collaborate-form" onSubmit={handleSubmit}>
        <h2>Collaboration Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject of Collaboration"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tell us about your collaboration idea"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Proposal</button>
      </form>
    </section>
  );
}

export default Collaborate;
