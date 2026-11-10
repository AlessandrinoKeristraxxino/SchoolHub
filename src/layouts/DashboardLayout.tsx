import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
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

        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;