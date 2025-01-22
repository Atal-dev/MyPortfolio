import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <ExperienceSection/>
      {/* <ServicesSection/> */}
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
