import AboutIcon from '../Assets/about-icon.svg';
import CloseIcon from '../Assets/close-icon.svg';
import ContactIcon from '../Assets/contact-icon.svg';
import HomeIcon from '../Assets/home-icon.svg';
import LogoutIcon from '../Assets/logout-icon.svg';
import './Sidebar.css';
import SidebarItem from './SidebarItems';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isLoggedIn: boolean;
  onLoginLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, isLoggedIn, onLoginLogout }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      <ul>
        <SidebarItem href="#home" iconSrc={HomeIcon} altText="Home" />
        <SidebarItem href="#contact" iconSrc={ContactIcon} altText="Contact" />
        <SidebarItem href="#about" iconSrc={AboutIcon} altText="About" />
        {isLoggedIn && (
          <SidebarItem
            href="#logout"
            iconSrc={LogoutIcon}
            altText="Logout"
            onClick={() => {
              onLoginLogout();
              toggleSidebar();
            }}
          />
        )}
        <SidebarItem href="#close" iconSrc={CloseIcon} altText="Close" onClick={toggleSidebar} />
      </ul>
    </div>
  );
};

export default Sidebar;
