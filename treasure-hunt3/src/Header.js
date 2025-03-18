// Header.js
import React from 'react';
import './App.css'; // Make sure styles are defined for header and logo

const Header = () => {
  return (
    <header className="header">
      <div className='img-main'>
      <img src={require('./assets/msa-logo.jpg')} alt="MSA Logo" className="logo" />
      </div>
      <div className="text-head">
        <br/>
      <h1 className='head-text'>MATHEMATICS AND STATISTICS ASSOCIATION</h1>
      <p className="text1">Presents</p>
      <p className="text2">Treasure Hunt 2k24</p>
      </div>
    </header>
  );
};

export default Header;
