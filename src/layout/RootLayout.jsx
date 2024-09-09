import React from "react";
import { Outlet } from "react-router-dom";

//pages
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function RootLayout() {

  return (
    <div className="root-layout">
      <header className="">
        <Nav/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
