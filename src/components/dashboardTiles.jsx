import React from 'react';

import "../App.css";



const   DashboardTile = ({ value, buttonValue, text, title }) => {
  return (
    <div className={"dasboardTile"}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p
        style={{
          fontSize: "150px",
          textAlign: "center",
          marginTop: "80px",
          marginBottom:"56px"
        }}
      >
        {value}
      </p>
      <button
        style={{
          textAlign: "center",
          backgroundColor: "#03910f",
          border: "#03910f",
          color: "white",
          padding: "10px",
          
          marginLeft: "40%",
          marginBottom: "5px"
        }}
      >
        {buttonValue}
      </button>
    </div>
  );
};

export default DashboardTile;
