import React, { useState } from "react";

type FlightTagType = "VFR" | "NVFR" | "mission" | "transport_flight" | "repositioning" | "location" | "accepted" | "rejected" | "pending";

type FlightTagParams = {
  type: FlightTagType;
  location?: null | string;
};

function FlightTag({ type, location = null }: FlightTagParams) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const getTagConfig = (type: FlightTagType) => {
    const configMap = {
      VFR: {
        text: "VFR",
        color: "#328bff",
        textColor: "text-white",
      },
      NVFR: {
        text: "NVFR",
        color: "#4276D7",
        textColor: "text-black",
      },
      mission: {
        text: "Riasztás",
        color: "#FF5659",
        textColor: "text-black",
      },
      transport_flight: {
        text: "Betegszállítás",
        color: "#F2DA7C",
        textColor: "text-black",
      },
      repositioning: {
        text: "Repositioning",
        color: "#A5F27C",
        textColor: "text-black",
      },
      location: {
        text: location != null ? location : "Hiba",
        color: "#F8A156",
        textColor: "text-black",
      },
      accepted: {
        text: "Elfogadva",
        color: "#E4FFB3",
        textColor: "text-black",
      },
      rejected: {
        text: "Elutasítva",
        color: "#FABEBE",
        textColor: "text-black",
      },
      pending: {
        text: "Függőben",
        color: "#FFF4A1",
        textColor: "text-black",
      },
    };

    return configMap[type];
  };

  const config = getTagConfig(type);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const baseClasses = "w-min px-3 py-1 rounded-[6px] text-nowrap font-semibold transition-all duration-200 shadow-sm cursor-default";

  const style = {
    background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${config.color}, ${config.color}c0 40%)`,
    transform: "scale(1)",
  };

  return (
    <div className={`${baseClasses} ${config.textColor}`} style={style} onMouseMove={handleMouseMove}>
      {config.text}
    </div>
  );
}

export default FlightTag;
