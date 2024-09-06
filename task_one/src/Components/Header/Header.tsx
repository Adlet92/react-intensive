import React from 'react';
import MoreIcon from '../Assets/more-vertical-rectangle.svg';
import LogoIcon from '../Assets/user.svg';
import './Header.css';
import Logo from './Logo';
import Navigation from './NavBar/NavBar';

interface HeaderProps {
  toggleSidebar: () => void;
  isLoggedIn: boolean;
  onLoginLogout: () => void;
  userImage?: string;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isLoggedIn, onLoginLogout, userImage }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <Logo
          src={isLoggedIn && userImage ? userImage : LogoIcon}
          alt='logo'
          className="logo-icon"
        />
      </div>
      <Navigation toggleSidebar={toggleSidebar} moreIconSrc={MoreIcon} />
      <button className='login-btn-nav' onClick={onLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;
