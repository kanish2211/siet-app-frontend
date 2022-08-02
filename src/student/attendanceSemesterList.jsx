import React, { useState, useEffect } from "react";
import Axios from "axios";
import DetailTilesSemList from "../components/detailTilesSemList";
import NavbarStud from "../components/navbarStud";
import "../App.css";

const AttendanceSemesterList = () => {
 

  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
      <h1 style={{color:"#03910f",fontWeight:"bolder"}}>DETAILED ATTENDANCE</h1>
      <h3 style={{color:"#03910f",marginTop:"-22px",marginLeft:"18px"}}>Choose Semester</h3>
      <div className="detailTileWrapper">
<DetailTilesSemList value={"97%"} title={"Semester 1"}/>
<DetailTilesSemList value={"92%"} title={"Semester 2"}/>
<DetailTilesSemList value={"82%"} title={"Semester 3"}/>
<DetailTilesSemList value={"78%"} title={"Semester 4"}/>
<DetailTilesSemList value={"86%"} title={"Semester 5"}/>
<DetailTilesSemList value={"95%"} title={"Semester 6"}/>
<DetailTilesSemList value={"82%"} title={"Semester 7"}/>
</div>
      </div>
    </div>
  );
};

export default AttendanceSemesterList;
