import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description, tech } = project;

  let projectName = removeHyphensAndCapitalize(name);

  if (name ===  "tech-news") {
    var strArray = tech.split(",");
    console.log("strArray:", strArray);
    projectName += ": " + strArray[0];
  }

  console.log("tech:", tech);

  return (
    <div className="project" key={name}>
      <img
        src={require(`../assets/screenshots/${name}.png`)}
        alt={projectName}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">{projectName}</a>{' '}
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
        <p>Tech Used: {tech}</p>
      </div>
    </div>
  );
}

export default Project;
