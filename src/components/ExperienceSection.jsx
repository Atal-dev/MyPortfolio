import React from 'react';

const experiences = [
  {
    role: 'React Developer',
    company: 'Code dev',
    time: 'Jan. 2024 - Present',
  },
  {
    role: 'Web Developer Intern',
    company: 'MaxCode',
    time: 'Nov. 2023  - Dec. 2023 ',
  },
  {
    role: 'Web Developer Intern',
    company: 'CodeSoft',
    time: 'Sept. 2023 - Oct. 2023.',
  },
//   {
//     role: 'Graphics Designer',
//     company: 'Apple',
//     time: '2014 - 2016',
//   },
];

const ExperienceSection = () => {
  return (
    <section id='experience' className="experience-section">
      <div className="experience-header">
        <h3>My Resume</h3>
        <h2>Real <span>Problem Solutions</span> Experience</h2>
      </div>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="experience-time">{experience.time}</div>
            <div className="experience-role">{experience.role}</div>
            <div className="experience-company">{experience.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
