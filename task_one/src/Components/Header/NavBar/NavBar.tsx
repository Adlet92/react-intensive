import React from 'react';
import './NavBar.css';

interface NavigationProps {
  toggleSidebar: () => void;
  moreIconSrc: string;
}

const Navigation: React.FC<NavigationProps> = ({ toggleSidebar, moreIconSrc }) => {
  return (
    <nav className='navStyle'>
      <ul className='regularBar'>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <ul className='more-icon'>
        <li className='more-icon-li'>
          <a href="#more" onClick={toggleSidebar}>
            <img src={moreIconSrc} alt='more' className="menu-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
