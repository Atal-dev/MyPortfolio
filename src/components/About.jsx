import React, { useEffect } from "react";
import gsap from "gsap";
import profilePic from "../assets/profile-pic.jpg"; // Add the same profile image here
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './About.css'

const About = () => {

  useEffect(() =>{
    const contex=gsap.context(() =>{
      var timeline =gsap.timeline()

gsap.from(".about-photo",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5
})

    });
    return () => contex.revert();
  },[]);
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side: Profile picture */}
        <div className="about-photo">
          <img src={profilePic} alt="Developer Profile" />
        </div>

        {/* Right side: About content */}
        <div className="about-content">
          <h3>About Me</h3>
          <h2>
            Professional <span>Problem Solutions</span> For Web Products
          </h2>
          <p>Delivering Tailored Solutions for Web Development Challenges</p>
          <div className="about-skill">
            <h3>
              {" "}
              <MdOutlineSubdirectoryArrowRight className="about-icon" />
              Web App's
            </h3>
            <h3>
              <MdOutlineSubdirectoryArrowRight className="about-icon" />
              Website Development
            </h3>
          </div>

          <div className="contact-container">
            <div className="contact-item">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="info">
                <p>Email Us</p>
                <a href="mailto:devatal754@gmail.com.com">devatal754@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="info">
                <p>Make A Call</p>
                <a href="tel:+917023894506">+91 7023894506</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
