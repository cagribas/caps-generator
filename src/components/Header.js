import React from 'react';
import '../style.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="img" />
      <h4 className="header-text">Caps Generator</h4>
    </header>
  );
}
