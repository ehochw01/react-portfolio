import React from 'react';

function Resume() {
  return (
    <section>
        <p className="center">
        Download my <a href="https://drive.google.com/uc?export=download&id=1w7--XaqeiNY6rUbcU5OuPKs3Z6TBzlGS">resume</a>
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
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>Java</li>
            <li>ObjectScript</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="proficiencies-list">
          <h3>Miscellaneous</h3>
          <ul className="skills">
            <li>InterSystems IRIS</li>
            <li>Git</li>
            <li>AWS</li>
            <li>Logic Pro X</li>
            <li>Microsoft Office</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
