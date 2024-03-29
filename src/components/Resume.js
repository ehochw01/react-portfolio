import React from 'react';

function Resume() {
  return (
    <section>
        <p className="center">
        Download my <a href="https://drive.google.com/uc?export=download&id=13o-CKIpQBG3z2XmbANI6n60EjqzDL5Tn">resume</a>
        </p>
      <div className="my-5" id="lists">
        <div className="proficiencies-list">
        <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>jQuery</li>
            <li>Bulma</li>
          </ul>
        </div>
        <div className="proficiencies-list">
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
            <li>ObjectScript</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="proficiencies-list">
          <h3>Miscellaneous</h3>
          <ul className="skills">
            <li>MVC Architecture</li>
            <li>MERN Stack</li>
            <li>Git</li>
            <li>VSCode</li>
            <li>AWS</li>
            <li>TCP</li>
            <li>SSL/TLS</li>
            <li>InterSystems IRIS</li>
            <li>Distributed Systems</li>
            <li>High Availability</li>
            <li>Disaster Recovery</li>
            <li>System Performance Analysis</li>
            <li>Wireshark</li>
            <li>Linux</li>
            <li>Windows</li>
            <li>Logic Pro X</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
