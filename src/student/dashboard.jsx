import React, {useState,useEffect} from "react";
import Axios from "axios";
import NavbarStud from "../components/navbarStud";
import DashboardTile from "../components/dashboardTiles";
import "../App.css";
const Dashboard = () => {
  
  const [dashboardResponse, setDashboardResponse] = useState();
  const dashboard = async () => {
    try {
      const response = await Axios.get(
        'http://localhost:8000/api/student/dashboard'
      );
  console.log(response);
      if (response.status === 200) {
        setDashboardResponse(response.data);

      } else {
        console.error("get dashboard data error", response.data.error); //
      }
    } catch (error) {
      console.error("get dashboard data error", error);
    } finally {
    }
  };
  
  useEffect(() => {
    dashboard();
  },[]);

  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
        <h2 style={{ fontWeight: "90px" }}>Welcome</h2>
        <div
          style={{
            display: "flex",
            margin: "auto"
          }}
        >
          {
            dashboardResponse ? 
            
          <DashboardTile buttonValue={"more details"} text={"Attendance"} value={dashboardResponse.attendance.overall} />
          
            :
            <></>
          }
          <DashboardTile />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
