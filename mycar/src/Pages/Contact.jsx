import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage('');
      return;
    }
    setErrors({});
    setStatusMessage('Sending message...');

    setTimeout(() => {
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-wrapper">
      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <h2>Contact Us</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Write your message here..."
        />
        {errors.message && <div className="error">{errors.message}</div>}

        <button type="submit">Send Message</button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>

      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>We’re here to help! Feel free to reach out with any questions or feedback.</p>
          <img src="./image/contact.svg" alt="Contact Illustration" className="contact-illustration" />
      </div>
    </div>
  );
}
