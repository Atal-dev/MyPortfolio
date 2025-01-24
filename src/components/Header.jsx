// Header.js
import React, { useEffect, useState } from "react";
import './Header.css';
import AppointmentModal from "./AppointmentModal"; // Import the modal component
import gsap from 'gsap'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() =>{
    const contex=gsap.context(() =>{
      var timeline =gsap.timeline()

      gsap.from(".logo",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5
})
gsap.from(".appointment-button",{
  y:-30,
  opacity:0,
  duration:0.5,
  delay:0.5
})
gsap.from("ul li a",{
    y:-20,
    opacity:0,
    duration:0.2,
    // delay:0.5,
    stagger:0.2
})
    });
    return () => contex.revert();
  },[]);
  

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
            <ul>
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