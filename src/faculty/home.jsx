import React from "react";
import "../App.css";
import NavbarFaculty from "../components/navbarFaculty";

const Home = () => {
  return (
    <div className={"wrapper"}>
      <NavbarFaculty />
      <div className={"mainpage"}>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
