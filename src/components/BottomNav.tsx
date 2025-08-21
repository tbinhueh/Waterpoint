import React, { useState } from 'react';
import tienichIcon from '../assets/tienich.svg';
import tongthe from '../assets/tongthe.svg';
import saban from '../assets/saban.svg';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  extraClass?: string;
  onClick: () => void;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, extraClass, onClick, isActive }) => {
  const activeClass = isActive ? 'bg-yellow-500' : 'bg-[#003c4b]';
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${extraClass} flex items-center gap-[10px] text-white text-base sm:text-xl transition-transform duration-200 hover:scale-110 no-underline hover:no-underline active:no-underline visited:no-underline font-normal ${activeClass}`}
    >
      <img src={icon} alt={label} className="w-6 h-6 sm:w-10 sm:h-10" />
      <span className="text-white font-light">{label}</span>
    </a>
  );
};

const BottomNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Tổng thể');

  return (
    <nav className="fixed bottom-[20px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[720px] h-[60px] px-4 sm:px-0">
      <div className="bg-[#003c4b] text-white rounded-full w-full h-full shadow-lg flex justify-between items-center px-4 sm:px-10">
        <NavItem
          href="#tongthe"
          icon={tongthe}
          label="Tổng thể"
          extraClass="ml-[15px]"
          onClick={() => setActiveItem('Tổng thể')}
          isActive={activeItem === 'Tổng thể'}
        />
        <NavItem
          href="#aqua"
          icon={saban}
          label="The Aqua"
          onClick={() => setActiveItem('The Aqua')}
          isActive={activeItem === 'The Aqua'}
        />
        <NavItem
          href="#park"
          icon={saban}
          label="Park Village"
          onClick={() => setActiveItem('Park Village')}
          isActive={activeItem === 'Park Village'}
        />
        <NavItem
          href="#pearl"
          icon={saban}
          label="The Pearl"
          onClick={() => setActiveItem('The Pearl')}
          isActive={activeItem === 'The Pearl'}
        />
        <NavItem
          href="#tienich"
          icon={tienichIcon}
          label="Gallery"
          extraClass="mr-[15px] "
          onClick={() => setActiveItem('Gallery')}
          isActive={activeItem === 'Gallery'}
        />
      </div>
    </nav>
  );
};

export default BottomNav;