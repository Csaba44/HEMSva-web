import React from "react";
import Widget from "./Widget";
import hemslogo from "../assets/hemslogo.png";

function Header() {
  const user = {
    name: "Ujhelyi Domonkos",
    roles: ["Admin", "Pilóta"],
  };

  return (
    <Widget className="w-screen py-4 grid grid-cols-2 pl-3 rounded-none border-l-0 border-t-0 border-r-0">
      <div className="flex items-center gap-7">
        <img src={hemslogo} alt="HEMS Logo" /> <p className="text-hemsred text-2xl font-bold">HEMS Hungary Virtual</p>
      </div>
      {user && (
        <div className="flex items-center justify-end pr-5">
          <i className="fa-light fa-right-from-bracket text-darkgray text-2xl"></i>
          <div className="w-[2px] h-[50px] bg-lightgray mx-5"></div>
          <div className="flex flex-col">
            <p>{user.name}</p>
            <p className="text-darkgray">
              {user.roles.map((role, index) => (
                <span key={role}>
                  {role}
                  {index < user.roles.length - 1 && " | "}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </Widget>
  );
}

export default Header;
