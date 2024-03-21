import "./main.css";

import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar" style={{ backgroundColor: "#33ccff" }}>
          <div className="container">
            <NavLink className="router-nav" to="/">
              <h5>Theme</h5>
            </NavLink>
            <NavLink className="router-nav" to="/local-storage">
              <h5>Local Storage</h5>
            </NavLink>
            <NavLink className="router-nav" to="/settings">
              <h5>Settings</h5>
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
