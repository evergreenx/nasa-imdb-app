import React , {useEffect , useState} from "react";
import MovieCardItem from "./MovieCardItem";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";


const Index = () => {
  useEffect(() => {
    // GET NASA today image on load of the page

    const getNASAImage = async () => {
      const response = await axiosIMDBInstance.get(
      
      console.log(response, "response");
      const data = response.data.url;
      setTodayImage(data);
    };
    getNASAImage();
  }, []);



  return (
    <section className="move__container">
      <h1>Card goes here</h1>

      <MovieCardItem />
    </section>
  );
};

export default Index;
