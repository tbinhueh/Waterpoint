import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import App from "./App";
import PageTwo from "./PageTwo"; // 👈 thêm
import "./index.css";
import PageThree from "./PageThree";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page3" element={<PageThree />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
