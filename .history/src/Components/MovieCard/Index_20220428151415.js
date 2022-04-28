import React, { useEffect, useState } from "react";
import MovieCardItem from "./MovieCardItem";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";

const Index = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    // GET NASA today image on load of the page

    const getNASAImage = async () => {
      const response = await axiosIMDBInstance.get(
        `/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}`
      );
      console.log(response, "movie response");
      const data = response.data.url;
      setMovieList(data);
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
