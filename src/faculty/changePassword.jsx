import React from "react";
import "../App.css";
import NavbarFaculty from "../components/navbarFaculty";

const ChangePassword = () => {
  return (
    <div className={"wrapper"}>
      <NavbarFaculty />
      <div className={"mainpage"}>
      <h1 style={{color:"#03910f",fontWeight:"bolder"}}>CHANGE PASSWORD</h1>
      <div style={{border:"solid green 2px",width:"55%",margin:"10px", marginTop:"55px"}}>
        <table style={{margin:"12px"}}>
          <tr><td><p>Enter Mail-id : </p></td><td><input type={"email"} style={{marginLeft:"6px"}}/></td></tr>
          <tr><td><p>Enter Old Password : </p></td><td><input type={"text"} style={{marginLeft:"6px"}}/></td></tr>
          <tr><td><p>Enter New Password : </p></td><td><input type={"password"} style={{marginLeft:"6px"}}/></td></tr>
          <tr><td><p>Re-Enter New Password : </p></td><td><input type={"password"} style={{marginLeft:"6px"}}/></td></tr>
         
        
        <button style={{backgroundColor:"#03910f",padding:"19px",color:"white",border:"solid 1px #03910f",paddingLeft:"35px", paddingRight:"35px",marginLeft:"120%",marginTop:"18px"}}>Update</button>
        </table>
      </div>
      </div>
    </div>
  );
};

export default ChangePassword;
