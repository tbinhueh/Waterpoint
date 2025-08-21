import React from "react";

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
    <div className="absolute right-[50px] top-1/2 -translate-y-1/2 px-[10px] py-[6px] bg-[#003c4b] rounded-[5px] text-white text-sm font-medium opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible whitespace-nowrap pointer-events-none z-20">
      <b>{label}</b>
    </div>
  </button>
);

interface VerticalSidebarProps {
  buttons: SidebarButtonProps[]; // <-- truyền vào danh sách button
}

const VerticalSidebar: React.FC<VerticalSidebarProps> = ({ buttons }) => {
  return (
    <aside className="fixed top-1/2 -translate-y-1/2 right-[20px] flex flex-col gap-[15px] py-[10px] px-[4px] rounded-[20px] bg-[#003c4b] shadow-lg">
      {buttons.map((btn, index) => (
        <SidebarButton key={index} {...btn} />
      ))}
    </aside>
  );
};

export default VerticalSidebar;
