import React, { useState } from "react";

interface NavBarProps {
  navItems: string[]; //  danh sách item truyền từ ngoài vào
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="fixed bottom-[100px] left-0 w-full flex justify-center items-center gap-[10px] py-4 bg-transparent">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`px-[20px] py-[10px] rounded-full text-sm md:text-base font-medium transition-all 
            ${
              active === index
                ? "bg-[#0b3c4a]  shadow-md text-white-only"
                : "bg-[#dfe6e6]/70 text-[#0b3c4a] hover:bg-[#cfd9d9]/80"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
