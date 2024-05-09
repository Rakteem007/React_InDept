import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

const Layout = () => {
  return (
    <>
      {/* we add as many as we want */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
