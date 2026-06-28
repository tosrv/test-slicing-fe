import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

function getInitialSidebarCollapsed() {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
}

function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(getInitialSidebarCollapsed);

  function closeSidebar() {
    setSidebarCollapsed(true);
  }

  function toggleSidebar() {
    setSidebarCollapsed((prev) => !prev);
  }

  return (
    <div className="layout">
      {!sidebarCollapsed && (
        <button
          type="button"
          className="layout__backdrop"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        />
      )}

      <Sidebar
        collapsed={sidebarCollapsed}
        onNavClick={closeSidebar}
      />

      <div className="layout__content">
        <Navbar onToggleSidebar={toggleSidebar} />

        <main className="layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
