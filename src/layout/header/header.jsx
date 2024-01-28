import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import headerlogo from '../../assets/image/headerLogo.png';
import './header.css';

function Header() {
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuActive(!sideMenuActive);
  };

  const closeSideMenu = () => {
    setSideMenuActive(false);
  };

  return (
    <div className="header">
      <button className="side-button" onClick={toggleSideMenu}>
        ☰
      </button>
      <nav className="nav">
        <div className="logo">
          <img src={headerlogo} alt="" id='headerLogo' />
        </div>
        <ul className="desktop-menu">
          <li><Link to="/tbcacademy">მთავარი</Link></li>
          <li><Link to="/it-academy">TBC IT</Link></li>
          <li><Link to="/usaid">TBC x USAID</Link></li>
          <li><Link to="/risks-academy">რისკები</Link></li>
        </ul>
      </nav>
      <Outlet />
      <nav className={`side-menu ${sideMenuActive ? 'active' : ''}`}>
        <button className="close-button" onClick={closeSideMenu}>
          &times;
        </button>
        <ul>
          <li><Link to="/tbcacademy">მთავარი</Link></li>
          <li><Link to="/it-academy">TBC IT</Link></li>
          <li><Link to="/usaid">TBC x USAID</Link></li>
          <li><Link to="/risks-academy">რისკები</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
