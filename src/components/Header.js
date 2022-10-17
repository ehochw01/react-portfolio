import React from 'react';
import coverImage from '../assets/cover/moon-machine.jpg';

function Header({ children }) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Eric Hochwald</h1>
      <img src={coverImage} alt="wooden background"></img>
      {children}
    </header>
  );
}

export default Header;
