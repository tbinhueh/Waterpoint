import React from 'react';
import searchIcon from '../assets/search.svg';
import audioIcon from '../assets/audio.svg';
import shareIcon from '../assets/share.svg';

interface SidebarButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-[#003c4b] border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
  >
    <img src={icon} alt={label} className="w-[30px] h-[30px]" />
    <div className="absolute right-[50px] top-1/2 -translate-y-1/2  px-[10px] py-[6px] bg-[#003c4b] rounded-[5px] text-white text-sm font-medium rounded-md opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible whitespace-nowrap pointer-events-none z-20">
      <b>{label}</b>
    </div>
  </button>
);

const VerticalSidebar: React.FC = () => {
  const handleSearch = () => {
    // Handle search functionality
    console.log('Search clicked');
  };

  const handleAudio = () => {
    // Handle audio functionality
    console.log('Audio clicked');
  };

  const handleShare = () => {
    // Handle share functionality
    console.log('Share clicked');
  };

  return (
    <aside className="fixed top-1/2 -translate-y-1/2 right-[20px] flex flex-col gap-[15px] py-[10px] px-[4px] rounded-[20px] bg-[#003c4b] shadow-lg">
      <SidebarButton
        icon={searchIcon}
        label="Search"
        onClick={handleSearch}
      />
      <SidebarButton
        icon={audioIcon}
        label="Audio"
        onClick={handleAudio}
      />
      <SidebarButton
        icon={shareIcon}
        label="Share"
        onClick={handleShare}
      />
    </aside>
  );
};

export default VerticalSidebar;