import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    // EmailJS send function
    emailjs
      .send(
        "service_odesacd", // Replace with your Service ID (e.g., service_xxxxxxx)
        "template_acqr4uc", // Replace with your Contact Template ID (e.g., template_xxxxxxx)
        formData,
        "JqrTqeIn4fFoo6PAX" // Replace with your User ID (e.g., user_xxxxxxx)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you for reaching out! We’ll get back to you soon.");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section fade-in">
      <h1>Contact Us</h1>
      <p className="intro-text">
        Whisper your thoughts, and let’s weave a conversation together.
      </p>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have a question, idea, or collaboration in mind? Reach out to the
          Kavyarang Literary Society—we’re all ears for your literary musings!
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:connect@kavyarang.org">connect@kavyarang.org</a>
        </p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/kavyarang_vipsengineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kavyarang_vipsengineering
          </a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
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
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
