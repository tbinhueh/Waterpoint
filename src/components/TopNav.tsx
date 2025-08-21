import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CenterNav: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] font-roboto">
      {/* Nút trái */}
      <a
        href="#"
        className="flex items-center justify-center w-[60px] h-[60px] rounded-[15px] hover:scale-110 transition-transform"
      >
        <ChevronLeft size={55} className="text-[#003c4b]" />
      </a>

      {/* Nút chính giữa */}
      <b className="bg-[#003c4b] text-white text-lg px-16 h-[40px] w-[160px] rounded-[15px] shadow-md hover:scale-105 transition-transform flex items-center justify-center mx-4">
        View tổng thể
      </b>

      {/* Nút phải */}
      <a
        href="#"
        className="flex items-center justify-center w-[60px] h-[60px] rounded-[15px] hover:scale-110 transition-transform"
      >
        <ChevronRight size={55} className="text-[#003c4b]" />
      </a>
    </div>
  );
};

export default CenterNav;