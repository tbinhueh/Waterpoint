import React from "react";
import bg from "./assets/backround.png";
import logo from "./assets/logo.png";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import TopRightIcon from "./components/TopRightButton";
import VerticalSidebar from "./components/VerticalSidebar";
import searchIcon from "./assets/search.svg";
import audioIcon from "./assets/audio.svg";
import shareIcon from "./assets/share.svg";


function App() {
  const buttons = [
    { icon: searchIcon, label: "Search", onClick: () => console.log("Search clicked") },
    { icon: audioIcon, label: "Audio", onClick: () => console.log("Audio clicked") },
    { icon: shareIcon, label: "Share", onClick: () => console.log("Share clicked") },
  ];

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Logo */}
      <a href="/" className="absolute top-[20px] left-[20px] z-10">
        <img
          src={logo}
          alt="Logo"
          className="h-[80px] w-auto" // cao 80px, giữ tỉ lệ gốc
        />
      </a>

      {/* Top Right Button */}
      <TopRightIcon />

      {/* Top Navigation */}
      <TopNav />

      {/* Vertical Sidebar */}
      <VerticalSidebar buttons={buttons} />
      

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
