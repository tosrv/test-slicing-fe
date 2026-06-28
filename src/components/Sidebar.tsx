import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/sidebar.css";

interface SidebarProps {
  collapsed: boolean;
  onNavClick: () => void;
}

const MENU_ICONS = {
  dashboard: "ph-squares-four",
  job: "ph-cube",
  vehicle: "ph-stack",
  settings: "ph-gear-six",
  logout: "ph-power",
} as const;

function BrandIcon() {
  return (
    <span className="sidebar__brand-icon-graphic" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function sidebarLinkClass(isActive: boolean) {
  return `sidebar__link${isActive ? " sidebar__link--active" : ""}`;
}

function menuIcon(collapsed: boolean, icon: string, alwaysRegular = false) {
  if (alwaysRegular) {
    return `ph ${icon} sidebar__icon`;
  }

  return `${collapsed ? "ph-fill" : "ph"} ${icon} sidebar__icon`;
}

function Sidebar({ collapsed, onNavClick }: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleNavClick() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      onNavClick();
    }
  }

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className={`sidebar${collapsed ? " sidebar--collapsed" : ""}`}>
      <div className={`sidebar__header${collapsed ? " sidebar__header--collapsed" : ""}`}>
        <div className="sidebar__logo" aria-label="GPS.ID TMS">
          <div className="sidebar__logo-name">
            <span className="sidebar__logo-brand">GPS.ID</span>
            <span className="sidebar__logo-text">TMS</span>
          </div>
          <span className="sidebar__brand-icon">
            <BrandIcon />
          </span>
        </div>
      </div>

      <nav className="sidebar__nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => sidebarLinkClass(isActive)}
          onClick={handleNavClick}
        >
          <i className={menuIcon(collapsed, MENU_ICONS.dashboard)} />
          <span className="sidebar__link-label">Dashboard</span>
        </NavLink>

        <NavLink
          to="/job"
          className={({ isActive }) => sidebarLinkClass(isActive)}
          onClick={handleNavClick}
        >
          <i className={menuIcon(collapsed, MENU_ICONS.job)} />
          <span className="sidebar__link-label">Job</span>
        </NavLink>

        <NavLink
          to="/vehicle-list"
          className={({ isActive }) => sidebarLinkClass(isActive)}
          onClick={handleNavClick}
        >
          <i className={menuIcon(collapsed, MENU_ICONS.vehicle)} />
          <span className="sidebar__link-label">Vehicle Lists</span>
        </NavLink>
      </nav>

      <div className="sidebar__bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) => sidebarLinkClass(isActive)}
          onClick={handleNavClick}
        >
          <i className={menuIcon(collapsed, MENU_ICONS.settings)} />
          <span className="sidebar__link-label">Settings</span>
        </NavLink>

        <button type="button" className="sidebar__link sidebar__logout" onClick={handleLogout}>
          <i className={menuIcon(collapsed, MENU_ICONS.logout, true)} />
          <span className="sidebar__link-label">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
