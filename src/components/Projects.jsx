import React from 'react'
import './Projects.css'
import { FaLink } from "react-icons/fa";
// import project1 from '../../src/assets/project1.png'

function Portfolio() {
    const portfolio = [
        {
           img : './codedev.png',
           name: "Code Dev",
           decription: "I created a website for a professional IT solutions company that was designed for SEO, SMM, and a smooth user experience to increase traffic and engagement.",
           url: "https://www.codedevservices.com/"
        },
        // {
        //     img : './project1.png',
        //     name: "The world or RH",
        //     decription: "I helped with the construction and performance marketing of a high-end home goods website, improving user experience and increasing traffic using SEO and SMM tactics.",
        //     url: "https://rh.com/us/en/"
        // },
        {
            img : './alchemy.png',
            name: "Alchemy Design",
            decription: "I created a website for luxury interior design, maximizing SEO and SMM to increase exposure and customer interaction.",
            url: "https://www.alchemydesign.ae/"
        },
        // {
        //     img : './project1.png',
        //     name: "Digital Silk",
        //     decription: "A digital agency website I enhanced with optimized development, SEO, and SMM strategies to drive traffic and improve performance.",
        //     url: "https://www.digitalsilk.com/"
        // },
        {
            img : './portfolio.png',
            name: "My Portfolio",
            decription: "This portfolio showcases my skills as a front-end developer and highlights the web products I have developed. The site is designed to provide an interactive and visually appealing way for potential clients or employers to view my work and learn more about my technical abilities.",
            url: "https://my-portfolio-two-eta-38.vercel.app/"
        },
        
        
    ]



  return (
    <div className='portfolio' id='projects'>
      <h2>My Projects</h2>
      <div className="Bar"></div>


      <div className="portfolio-down">
        {
            portfolio.map((e , index)=>{
                return(
                    <div className="portfolio-project" key={index}>
                        
                            <img src={e.img} alt="" />
                            
                            <div className="protfolio-hover">
                                    <h4>{e.name}</h4>
                                    <p>{e.decription}</p>
                                    <a href={e.url} target="_blank"><FaLink /></a>
                            </div>
                        
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Portfolio