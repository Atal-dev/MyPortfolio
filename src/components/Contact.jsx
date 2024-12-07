import React, { useState } from 'react';

const Contact = () => {

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setFormData(initialFormData)
    
    console.log(formData);
  };
  return (
    <section id='contact' className="contact-section">
    <div className="contact-info">
      <h3>Get In Touch</h3>
      <h2>Let’s Talk For Your <span>Next Projects</span></h2>
      <p>
      "Ready to collaborate? Let's bring your ideas to life. Get in touch for your next big project!"
      </p>
      <ul className="expertise-list">
        <li><span>✔</span> 2+ Years Of Experience</li>
        <li><span>✔</span> Professional Web Designer</li>
        <li><span>✔</span> Mobile Apps Design</li>
        <li><span>✔</span> Custom Design Support</li>
      </ul>
    </div>

    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            placeholder="Enter your full name"
            required 
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            placeholder="support@gmail.com"
            required 
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange} 
            placeholder="+880 (123) 456 88"
            required 
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleInputChange} 
            placeholder="Subject"
            required 
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            placeholder="Write your message here..."
            required 
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Us Message</button>
      </form>
    </div>
  </section>
  );
};

export default Contact;
