import React from 'react';

interface SidebarItemProps {
  href: string;
  iconSrc: string;
  altText: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, iconSrc, altText, onClick }) => {
  return (
    <li>
      <a href={href} onClick={onClick}>
        <img src={iconSrc} alt={altText} className="icon" />
      </a>
    </li>
  );
};

export default SidebarItem;
