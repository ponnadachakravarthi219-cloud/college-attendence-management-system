import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>Dashboard</h2>

        <NavLink to="">Overview</NavLink>

        <NavLink to="students">Students</NavLink>

        <NavLink to="fees">Fees</NavLink>

        <NavLink to="settings">Settings</NavLink>

      </aside>

      <section className="content">

        <Outlet />

      </section>

    </div>
  );
}

export default Dashboard;