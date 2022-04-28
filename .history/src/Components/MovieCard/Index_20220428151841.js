import React, { useEffect, useState } from "react";
import MovieCardItem from "./MovieCardItem";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";

const Index = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    // GET movies list from IMDB on load of the page

    const getNASAImage = async () => {
      const response = await axiosIMDBInstance.get(
        `/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}`
      );
      console.log(response.data.results, "movie response");
      const data = response.data.results;
      setMovieList(data);
    };
    getNASAImage();
  }, []);

  return (
    <section className="move__container">
      <h1>Card goes here</h1>

      {
        movieList.map((movie, index) => {
          return <MovieCardItem key={index} movie={movie} />;
        }
      }
      <MovieCardItem />
    </section>
  );
};

export default Index;
