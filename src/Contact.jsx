import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // 🔥 EmailJS send (optional but real functionality)
    emailjs.send(
      "service_id",
      "template_id",
      formData,
      "public_key"
    ).then(
      () => alert("Message sent!"),
      () => alert("Failed to send message")
    );

    // clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="contact-page">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}