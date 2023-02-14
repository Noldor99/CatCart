import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Mainlayout  = () => (
  <div className="wrapper" 
  style={{ minHeight: window.innerHeight - 100 }}>
    <Header/>
    <div className="content">
      <Outlet />
    </div>
  </div>
);

export default Mainlayout;
