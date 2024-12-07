import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Html', percentage: '95%', icon: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png' },
    { name: 'Css', percentage: '83%', icon: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png' },
    { name: 'Javascript', percentage: '93%', icon: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
    { name: 'Bootstrap', percentage: '84%', icon: 'https://icons.getbootstrap.com/assets/img/icons-hero.png' },
    { name: 'Media Query', percentage: '65%', icon: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjahgfd12j3p4fi9cy34k.png' },
    { name: 'React.js', percentage: '86%', icon: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' },
    { name: 'Redux', percentage: '62%', icon: 'https://w7.pngwing.com/pngs/95/797/png-transparent-redux-hd-logo-thumbnail.png' },
    // { name: 'Sketch', percentage: '94%', icon: '/path-to-icons/sketch-icon.png' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p>My Skills</p>
        <h2>Let’s Explore Popular <span>Skills & Experience</span></h2>
        <p className="skills-desc">
        I specialize in crafting responsive, visually appealing, and user-friendly web applications. My expertise lies in transforming creative designs into interactive digital experiences, ensuring performance and accessibility. there are some of the key tools and technologies I use in my frontend development journey:        </p>
        {/* <button className="learn-more-btn">Learn More</button> */}
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className='skill-card' key={index}>
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <p>{skill.name}</p>
            <div className="skill-percentage">
              {skill.percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
