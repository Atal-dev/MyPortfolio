import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpg'; 
import CV from '../assets/Devanshu_Atal_CV.pdf'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1>Hello, I'm <span>DEVANSHU ATAL</span>  Front-end Developer</h1>
        <p>Building dynamic and responsive web applications.</p>
        <p>Experienced frontend developer with a passion for creating visually stunning and user-friendly websites</p>

        <div className="cv-button">
            <a href="#contact">Hire Me</a>
            <a href={CV} download="Devanshu_Atal_CV.pdf">Download CV</a>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/devanshu-atal-814a4b289/"><FaLinkedinIn /></a>
          <a href="#facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/its____atal.dev_22/"><FaInstagram /></a>
          <a href="#pinterest"><FaTwitter /></a>
        </div>
      </motion.div>
      
      {/* Photo with up and down float animation */}
      <motion.div
        className="hero-photo"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <img src={profilePic} alt="Developer Profile" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
