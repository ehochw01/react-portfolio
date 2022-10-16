import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/ehochw01"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/eric-hochwald/"
    },
    {
      name: "fab fa-medium",
      link: "https://medium.com/@hochwalderic"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
