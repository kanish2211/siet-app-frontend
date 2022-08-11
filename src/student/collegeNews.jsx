import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavbarStud from "../components/navbarStud";
import "../App.css";

const CollegeNews = () => {
 
  const [newsResponse, setNewsResponse] = useState();
  const news = async () => {
    try {
      const response = await Axios.get(
        'http://localhost:8000/api/viewNews'
      );
      console.log(response);
      if (response.status === 200) {
        setNewsResponse(response.data.results);

      } else {
        console.error("get news data error", response.data.error); 
      }
    } catch (error) {
      console.error("get news data error", error);
    } finally {
    }
  };
  
  useEffect(() => {
    news();
  },[]);
 


  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
        <p></p>
      </div>
    </div>
  );
};

export default CollegeNews;
