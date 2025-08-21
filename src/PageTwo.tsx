import React, { useState, useEffect } from "react";
import bg from "./assets/backround.png";
import logo from "./assets/logo.png";
import BottomNav from "./components/BottomNav";
import ImageGallery from "./components/ImageGallery ";
import TopRightIcon from "./components/TopRightButton";
import VerticalSidebar from "./components/VerticalSidebar";
import Navoption from "./components/Navoption";
import { useNavigate, useLocation } from "react-router-dom";

import searchIcon from "./assets/search.svg";
import audioIcon from "./assets/audio.svg";
import shareIcon from "./assets/share.svg";
import Prochure from "./assets/Prochure.svg";
function PageTwo() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    "Gallery Waterpoint",
    "Gallery Park Village",
    "Gallery The Aqua",
    "Gallery The Pearl",
    "Gallery Solaria Rise",
  ];

  const [active, setActive] = useState("image");

  const buttons = [
    {
      icon: searchIcon,
      label: "Search",
      onClick: () => console.log("Search clicked"),
    },
    {
      icon: audioIcon,
      label: "Audio",
      onClick: () => console.log("Audio clicked"),
    },
    {
      icon: shareIcon,
      label: "Share",
      onClick: () => console.log("Share clicked"),
    },
    {
      icon: Prochure,
      label: "Prochure",
      onClick: () => console.log("Prochure clicked"),
    },
  ];

  useEffect(() => {
    if (location.pathname === "/page3") setActive("video");
    else setActive("image");
  }, [location.pathname]);

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <a href="/" className="absolute top-[20px] left-[20px] z-10">
        <img src={logo} alt="Logo" className="h-[80px] w-auto" />
      </a>

      {/* Nút Hình ảnh / Video */}
      <nav className="w-full flex justify-center items-center gap-[10px] mt-[40px] font-roboto">
        <button
          onClick={() => navigate("/page2")}
          className={`text-lg px-16 h-[40px] w-[160px] rounded-[20px] shadow-md
            hover:scale-105 transition-transform flex items-center justify-center mx-4
            ${
              active === "image"
                ? "bg-[#003c4b] text-white-only"
                : "bg-white text-[#003c4b] border border-[#003c4b]"
            }`}
        >
          Hình ảnh
        </button>

        <button
          onClick={() => navigate("/page3")}
          className={`text-lg px-16 h-[40px] w-[160px] rounded-[20px] shadow-md
            hover:scale-105 transition-transform flex items-center justify-center mx-4
            ${
              active === "video"
                ? "bg-[#003c4b] text-white-only"
                : "bg-white text-[#003c4b] border border-[#003c4b]"
            }`}
        >
          Video
        </button>
      </nav>

      {/* Nội dung chính */}
      <TopRightIcon />

      <ImageGallery
       
      />

      <VerticalSidebar buttons={buttons} />
      <div>
        <Navoption navItems={items} />
      </div>
      <BottomNav />
    </div>
  );
}

export default PageTwo;
