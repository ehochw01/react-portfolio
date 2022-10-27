import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img 
          src={require(`../assets/photos/personal-photo.jpg`)} 
          alt="Eric Hochwald"
          className="photo"
        />
        </div>
        <p>
        Hello! My name is Eric and I am a solutions driven programmer with a support engineer background looking to pursue a career in Software Development. I pride myself in my strong technical skills towards building functional applications. I'm looking to apply my love and experience for problem solving by writing clean, quality code that addresses customer needs. I previously honed my technical and interpersonal problem solving skills daily in a fast-paced environment as a Support Engineer for a software company. I recently earned a certificate in full-stack web development from Columbia University via their full time coding bootcamp to expand on my Tufts University Computer Science background and give myself a great set skills to pursue a career in development. Here I developed my skills in JavaScript, Node.js, HTML, CSS, React.js, Python, and Java.
        </p>
        <p>
        Besides an interest in programming, I have a passion for music and technology. I play guitar, drums, and cello in some music groups around Boston. I have spent many nights recording and producing music as well as playing in bands and some classical music groups. In order to bring to together my passion for programming and music, I recently built a music rating app called MelloFiles with an MVC architecture using MySQL/Sequelize, Express.js, and Handlebars.js. I am excited to meld my passions of problem solving and creativity by kicking off a career in Software Engineering! 
        </p>
      </div>
    </section>
  );
}

export default About;
