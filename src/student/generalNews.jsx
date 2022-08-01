import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavbarStud from "../components/navbarStud";
import "../App.css";

const GeneralNews = () => {
  const API_KEY = "2dd4b995ee9a410caa688ae9b8ead532";
  const [newsResponse, setNewsResponse] = useState();
  const news = async () => {
    try {
      const response = await Axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
      );
      if (response.status === 200) {
        setNewsResponse(response.data);
      } else {
        console.error("get news error", response.data.error); //
      }
    } catch (error) {
      console.error("get news error", error);
    } finally {
    }
  };

  useEffect(() => {
    news();
  });
  console.log(newsResponse);

  return (
    <div className={"wrapper"}>
      <NavbarStud />
      <div className={"mainpage"}>
        <p>{newsResponse}</p>
      </div>
    </div>
  );
};

export default GeneralNews;
