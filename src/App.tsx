import React from "react";
import bg from "./assets/backround.png";
import logo from "./assets/logo.png";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import  TopRightIcon from "./components/TopRightButton";
import Sidebar  from "./components/Sidebar"; 
function App() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <a href="/" className="absolute top-[20px] left-[20px] z-10">
        <img
          src={logo}
          alt="Logo"
          className="h-[80px] w-auto" // cao 80px, giữ tỉ lệ gốc
        />
      </a>
      <TopRightIcon/>
      <TopNav/>
      <Sidebar/>
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
