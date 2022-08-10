import React, { useState, useEffect } from "react";
import Axios from "axios";
import DetailTiles from "../components/detailTiles"
import NavbarStud from "../components/navbarStud";
import "../App.css";

const DetailedAttendance = () => {
 

  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
      <h1 style={{color:"#03910f",fontWeight:"bolder"}}>ATTENDANCE</h1>
<h3 style={{color:"#03910f",marginTop:"-22px",marginLeft:"18px"}}>SEMESTER-4</h3>
<div className="detailTileWrapper">
<DetailTiles value={"86%"} title={"Internet Programing"}/>
<DetailTiles value={"86%"} title={"Advanced Java Programming"}/>
<DetailTiles value={"86%"} title={"Advanced Databases"}/>
<DetailTiles value={"86%"} title={"Advanced Databases"}/>
<DetailTiles value={"86%"} title={"Advanced Databases"}/>
<DetailTiles value={"86%"} title={"Advanced Databases"}/>
<DetailTiles value={"86%"} title={" Databases"}/>
</div>
      </div>
    </div>
  );
};

export default DetailedAttendance;
