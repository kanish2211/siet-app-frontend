import React from 'react';

import "../App.css";



const DetailTiles = ({ value, title }) => {
  return (
    <div className={"detailTile"}>
        
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p
        style={{
          fontSize: "85px",
          textAlign: "center",
          marginTop: "30px",
          marginBottom:"56px"
        }}
      >
        {value}
      </p>
      
    </div>
  );
};

export default DetailTiles;
