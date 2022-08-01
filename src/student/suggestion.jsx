import React from "react";
import NavbarStud from "../components/navbarStud";
import "../App.css";


const Suggestion = () => {
  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
        <h1 style={{ fontWeight: "90px", color: "green" }}>
          Add your Suggestion here
        </h1>
        <div style={{ marginLeft: "10%" }}>
          <p style={{ fontSize: "35px" }}>Title:</p>
          <input type={"text"} style={{ width: "500px" }} />
          <p style={{ fontSize: "35px" }}> Suggestion:</p>
          <input type={"text"} style={{ height: "382px", width: "500px" }} />
          <div>
            <button
              style={{
                backgroundColor: "#03910f",
                width: "190px",
                height: "60px",
                marginTop: "3%",
                color: "white"
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Suggestion;
