import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Plus,
  UserRound,
  X,
} from "lucide-react";
import { NavLink } from "react-router";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigationItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Lezioni", href: "/lessons", icon: BookOpen },
  { label: "Aggiungi materiale", href: "/add", icon: Plus },
  { label: "Account", href: "/account", icon: UserRound },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Chiudi menu"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar${isOpen ? " sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon" aria-hidden="true">
            <GraduationCap size={22} />
          </span>
          <span>ClassHub</span>
          <button
            className="sidebar-close"
            type="button"
            aria-label="Chiudi menu"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <p className="sidebar-section-label">MENU</p>
        <nav className="sidebar-navigation" aria-label="Navigazione principale">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            return (
              <NavLink
                key={href}
                to={href}
                end={href === "/"}
                className={({ isActive }) =>
                  `sidebar-link${isActive ? " sidebar-link-active" : ""}`
                }
                onClick={onClose}
              >
                <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-account">
          <div className="sidebar-avatar" aria-hidden="true">
            S
          </div>
          <div className="sidebar-account-copy">
            <span className="sidebar-account-name">Studente</span>
            <span className="sidebar-account-role">Area personale</span>
          </div>
        </div>
      </aside>
    </>
  );
}
