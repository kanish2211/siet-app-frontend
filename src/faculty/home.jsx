import React from "react";
import "../App.css";
import NavbarFaculty from "../components/navbarFaculty";

const Home = () => {
  return (
    <div className={"wrapper"}>
      <NavbarFaculty />
      <div className={"mainpage"}>
      <h2 style={{ fontWeight: "90px",color:"green" }}>Welcome</h2>
      
      </div>
    </div>
  );
};

export default Home;
