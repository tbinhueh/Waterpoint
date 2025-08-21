import React from "react";
import laban from "../assets/laban.svg";

const TopRightIcon: React.FC = () => {
  return (
    <div className="absolute top-[20px] right-[20px] z-10">
      <button
        className="group relative h-[40px] w-[40px] cursor-pointer rounded-full bg-[#003c4b] p-0 transition-all duration-300 ease-in-out hover:scale-110 border-none focus:outline-none"
        title="La bàn"
      >
        {/* Điều chỉnh vị trí của tooltip */}
        <div className="absolute right-[45px] top-1/2 -translate-y-1/2 rounded-[5px] bg-[#003c4b] px-[10px] py-[6px] text-sm font-light  opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible z-20 whitespace-nowrap">
          <b>La bàn</b>
        </div>
        

        <img
          src={laban}
          alt="La bàn"
          className="h-full w-full object-contain"
        />
      </button>
    </div>
  );
};

export default TopRightIcon;
