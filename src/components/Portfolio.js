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
      name: 'deep-thoughts',
      description: 'A site where users post thoughts and images',
      tech: 'React, AWS, Node.js, DynamoDB, S3, EC2',
      link: "http://52.15.38.85/",
      repo: "https://github.com/ehochw01/aws-thought"
    },
    {
      name: 'react-portfolio',
      description: 'The site you are currently on! Click the title link to see the Github repo, and the Github link to see my Github profile.',
      tech: 'React, CSS',
      link: "https://github.com/ehochw01/react-portfolio",
      repo: "https://github.com/ehochw01/"
    },
    {
      name: 'tech-news',
      description: 'I also refactored tech news with a Java backend as well.',
      tech: 'Java, Spring Boot, Spring Data, MySQL, Thymeleaf',
      link: "https://java-tech-newz.herokuapp.com/",
      repo: "https://github.com/ehochw01/tech-news-java-api"
    },
    {
      name: 'book-collection',
      description: 'A site where users can search for books and add them to their collection.',
      tech: 'Node.js, MongoDB, Apollo GraphQL, React',
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
  ]);

  return (
    <div className="center">
      <i>Please note that the deployed heroku apps may take several seconds to load!</i>
      <div className="flex-row flex-center" id="projects">
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
