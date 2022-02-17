import Header from "@/components/shared/Header";
import React from "react";

const MainLayout = ({ children, isHeader = true }) => {
  return (
    <>
      {isHeader && <Header />}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
