import React from "react";
import Navbar from "../../Navbar/Navbar";
import AdminSidebar from "../Sidebar/AdminSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [selectedPage, setSelectedPage] = useState("jobs");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className="flex flex-col h-screen ">
    <Navbar />
    <div className="flex flex-1 h-full mt-10 bg-gray-100">
      <AdminSidebar
        onPageChange={handlePageChange}
      />
      <main className=" mt-10 flex-1 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
        {/* <SignupPage /> */}
        <Outlet/>
      </main>
    </div>
  </div>
  );
}

export default AdminLayout;