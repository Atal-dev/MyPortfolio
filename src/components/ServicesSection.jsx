import React from 'react';
// import './ServicesSection.css';

const services = [
  {
    number: '01',
    title: 'Brand Identity Design',
    description: 'Dignissimos ducimus blanditiis praesen',
  },
  {
    number: '02',
    title: 'Website Design',
    description: 'Dignissimos ducimus blanditiis praesen',
  },
  {
    number: '03',
    title: 'Mobile Application Design',
    description: 'Dignissimos ducimus blanditiis praesen',
  },
  {
    number: '04',
    title: 'Motion Graphics Design',
    description: 'Dignissimos ducimus blanditiis praesen',
  },
  {
    number: '05',
    title: 'Website Development',
    description: 'Dignissimos ducimus blanditiis praesen',
  },
  {
    number: '06',
    title: 'SEO & Digital Marketing',
    description: 'Dignissimos ducimus blanditiis praesen',
  },
];

const ServicesSection = () => {
  return (
    <section id='service' className="services-section">
      <h2>My <span>Special Service</span> For your Business Development</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className='service-item'>
            <div className="service-number">{service.number}</div>
            <div className="service-title">{service.title}</div>
            <div className="service-description">{service.description}</div>
            <div className="service-icon">
              <a href="#">
                <span>&#8599;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
