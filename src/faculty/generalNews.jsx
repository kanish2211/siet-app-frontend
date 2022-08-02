import React from "react";
import "../App.css";
import NavbarFaculty from "../components/navbarFaculty";

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
  },[]);
  console.log(newsResponse);
   
  return (

    <div className={"wrapper"}>
      <NavbarFaculty />
      <div className={"mainpage"}>
        <h1 style={{color:"#03910f",fontWeight:"bolder"}}>GENERAL NEWS</h1>
        {newsResponse? newsResponse.articles.map((value)=>{
          return(
            <div>
            <a href={value.url}>{value.title}</a>
            <p style={{marginLeft:"15px",marginTop:"1px"}}>{value.description}</p>
            
            </div>
          )
        }):""}
      </div>
    </div>
  );
};

export default GeneralNews;