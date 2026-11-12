import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="main-area">
        <header className="dashboard-header">
          <button
            className="sidebar-toggle"
            type="button"
            aria-label="Apri menu"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={21} />
          </button>
          <span className="dashboard-header-title">Area studente</span>
        </header>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;