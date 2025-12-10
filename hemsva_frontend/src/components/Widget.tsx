import React, { useState } from "react";

type WidgetProps = {
  className?: string;
  iconClass?: null | string;
  title?: null | string;
  children: React.ReactNode;
  interactive?: boolean;
  onClickHeader?: () => void;
  flightTagHeader?: React.ReactNode;
};

function Widget({
  className = "",
  iconClass = null,
  title = null,
  children,
  interactive = true,
  onClickHeader,
  flightTagHeader = <></>,
}: WidgetProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const style = interactive
    ? {
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 80%)`,
        borderColor: `rgba(${220 + mousePos.x / 3}, ${220 + mousePos.y / 3}, 255, 0.6)`,
      }
    : {};

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative border-2 p-5 rounded-[18px] border-lightgray flex flex-col gap-2 bg-white transition-all duration-300 ease-out ${
        interactive ? "hover:shadow-xl hover:scale-[1.02]" : ""
      } ${className}`}
      style={style}
    >
      {iconClass && title && (
        <div className="grid grid-cols-2" onClick={onClickHeader}>
          <div className="flex items-center gap-3">
            <span className="bg-lightgray py-1 px-2 rounded-[5px] transition-all duration-300 hover:bg-gray-300">
              <i className={`text-darkgray ${iconClass}`}></i>
            </span>
            <span className="text-lg font-medium text-darkgray">{title}</span>
          </div>
          <div className="w-full flex justify-end">{flightTagHeader}</div>
        </div>
      )}
      {children}
    </div>
  );
}

export default Widget;
