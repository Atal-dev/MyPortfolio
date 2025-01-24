import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpg'; 
import CV from '../assets/Devanshu_Atal_CV.pdf'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import gsap from 'gsap';
import { TweenMax, Linear } from "gsap";

import './HeroSection.css'

const HeroSection = () => {

  useEffect(() =>{
    const contex=gsap.context(() =>{
      gsap.from(".hero-photo",{
          y:200,
          duration:2,
          opacity:0,
          // scale:5,
      });
      gsap.from("h1",{
    y:20,
    duration:1,
    opacity:0,
    scale:1.2
})

gsap.from(".hero-content p",{
  y:20,
  duration:1,
  opacity:0,
  scale:1.2
});
gsap.from(".cv-button a",{
  y:20,
  duration:1,
  opacity:0,
  // scale:1.2
});
gsap.from(".social-icons a",{
  y:20,
  duration:0.5,
  opacity:0,
  scale:1.2,
  stagger:0.3
});


      
      

    });
    return () => contex.revert();
  },[]);
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content"
      >
        <h1>Hello, I'm <span>DEVANSHU ATAL <span></span></span>  Front-end Developer</h1>
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
      </div>
      
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
