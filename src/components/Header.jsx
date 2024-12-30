// Header.js
import React, { useState } from "react";
// import './styles.css'; // Ensure your styles are imported
import AppointmentModal from "./AppointmentModal"; // Import the modal component

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav>
          {/* Toggle button for responsive menu */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <span>&times;</span> : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>

          {/* Logo in the center */}
          <div className="logo">
            <a href="#hero">DEVANSHU ATAL</a>
          </div>

          {/* Links in the middle */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul onClick={toggleMenu}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Button to open the modal */}
          <div className="appointment-button">
            <a onClick={toggleModal}>Get Appointment</a>
          </div>
        </nav>
      </header>

      {/* Render the modal */}
      {showModal && <AppointmentModal onClose={toggleModal} />}
    </>
  );
};

export default Header;