import React from 'react';
import './AppointmentModal.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";






const AppointmentModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Get Appointment</h2>

        <form className="appointment-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="submit-button">Submit Now</button>
        </form>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/devanshu-atal-814a4b289/"><FaLinkedinIn /></a>
          <a href="#facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/its____atal.dev_22/"><FaInstagram /></a>
          <a href="#pinterest"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
