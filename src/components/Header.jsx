import React, { useState } from 'react';
// import './styles.css'; // Ensure your styles are imported
import AppointmentModal from './AppointmentModal'; // Import the modal component

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header>
        <nav>
            {/* Logo on the left */}
            <div className="logo">
              <a href="#hero">DEVANSHU ATAL</a>
            </div>

            {/* Links in the middle */}
            <div className="nav-links">
            <ul>

              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#service">Service's</a></li>
              <li><a href="#contact">Contact</a></li>
              </ul>

            </div>

            {/* Button to open the modal */}
            <div className="cv-button">
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
