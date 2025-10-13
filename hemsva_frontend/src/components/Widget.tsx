import React from "react";

type WidgetProps = {
  className?: string;
  iconClass?: null | string;
  title?: null | string;
  children: React.ReactNode;
};

function Widget({ className = "", iconClass = null, title = null, children }: WidgetProps) {
  return (
    <div className={`border border-2 p-5 rounded-[18px] border-lightgray flex w-min h-min flex-col gap-2 ${className}`}>
      {iconClass && title && (
        <div className="flex items-center gap-3">
          <span className="bg-lightgray py-1 px-2">
            <i className={`text-darkgray ${iconClass}`}></i>
          </span>
          <span className="text-lg">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

export default Widget;
