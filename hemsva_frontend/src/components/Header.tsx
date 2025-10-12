import React from "react";
import Widget from "./Widget";
import hemslogo from "../assets/hemslogo.png";

function Header() {
  return (
    <Widget className="w-screen py-4 grid grid-cols-2 pl-3">
      <div className="flex items-center gap-7">
        <img src={hemslogo} alt="HEMS Logo" /> <p className="text-hemsred text-2xl font-bold">HEMS Hungary Virtual</p>
      </div>
      <div className="flex items-center justify-end pr-5">
        <i className="fa-light fa-right-from-bracket text-darkgray text-2xl"></i>
        <div className="w-[2px] h-[50px] bg-lightgray mx-5"></div>
        <div className="flex flex-col">
          <p className="text-lg">Ujhelyi Domonkos</p>
          <p className="text-darkgray">Admin | Pilóta</p>
        </div>
      </div>
    </Widget>
  );
}

export default Header;
