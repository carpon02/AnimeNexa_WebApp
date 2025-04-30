// src/Components/ProtectedLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

const ProtectedLayout = () => {
  return (
    <div className="min-h-screen  text-black pb-20">
      <Outlet /> {/* This will render the nested page */}
      <BottomNavbar />
    </div>
  );
};

export default ProtectedLayout;
