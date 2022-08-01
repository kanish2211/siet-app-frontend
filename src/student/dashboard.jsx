import React from "react";
import NavbarStud from "../components/navbarStud";
import DashboardTile from "../components/dashboardTiles";
import "../App.css";
const Dashboard = () => {
  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
        <h2 style={{ fontWeight: "90px" }}>Welcome User!!</h2>
        <div
          style={{
            display: "flex",
            margin: "auto"
          }}
        >
          <DashboardTile />
          <DashboardTile />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
