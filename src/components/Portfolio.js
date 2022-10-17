import React, { useState } from 'react';
import Project from "./Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'melloFiles',
      description: 'A site for music lovers where users can leave ratings and reviews of albums',
      tech: 'Node.js, JavaScript, Handlebars, Express, Sequelize, Bootstrap',
      link: "https://mellofiles.herokuapp.com/",
      repo: "https://github.com/ehochw01/MelloFiles"
    }, 
    {
      name: 'book-collection',
      description: 'A site where users can search for books and add them to their collection.',
      tech: 'MongoDB, Apollo GraphQL, React',
      link: "https://still-tundra-52545.herokuapp.com/",
      repo: "https://github.com/ehochw01/Book-Collection"
    },   
    {
      name: 'tech-news',
      description: 'A site where users can post, upvote, and comment on links to news articles. Refactored from a Node.js app using a Python backend.',
      tech: 'Python, Flask, SQLAlchemy',
      link: "https://python-tech-newz.herokuapp.com",
      repo: "https://github.com/ehochw01/python-newsfeed "
    },
    {
      name: 'tech-news',
      description: 'I also refactored tech news with a Java backend as well.',
      tech: 'Java, Spring Boot, Spring Data, MySQL, Thymeleaf',
      link: "https://java-tech-newz.herokuapp.com/",
      repo: "https://github.com/ehochw01/tech-news-java-api"
    },
    {
      name: 'weather-dashboard',
      description: 'A site where users can search the weather forecast for a given city.',
      tech: 'Javascript, HTML, Bootstrap, CSS',
      link: "https://ehochw01.github.io/weather-dashboard/",
      repo: "https://github.com/ehochw01/weather-dashboard"
    },
  ]);

  return (
    <div className="center">
      <i>Please note that the heroku apps may take several seconds to load!</i>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
