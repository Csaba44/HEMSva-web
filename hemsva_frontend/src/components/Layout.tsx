import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Toaster } from "react-hot-toast";

type LayoutProps = {
  navbar?: boolean;
  children: React.ReactNode;
};

function Layout({ navbar = true, children }: LayoutProps) {
  return (
    <>
      <Toaster />
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          {navbar && <Nav />}
          <main className="flex-1 py-3 px-5">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
