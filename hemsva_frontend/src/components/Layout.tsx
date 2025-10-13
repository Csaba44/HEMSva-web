import React from "react";
import Header from "./Header";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Nav />
        <main className="flex-1 py-3 px-5">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
