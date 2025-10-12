import React from 'react'

type WidgetProps = {
  className?: string,
  children: React.ReactNode;
};

function Widget({className = "", children}: WidgetProps) {
  return (
    <div className={`border border-2 border-lightgray flex w-min h-min ${className}`}>
      {children}
    </div>
  )
}

export default Widget