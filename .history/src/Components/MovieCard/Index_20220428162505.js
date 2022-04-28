import React, { useEffect, useState } from "react";
import MovieCardItem from "./MovieCardItem";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";

const Index = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    // GET movies list from IMDB on load of the page

    const getNASAImage = async () => {
      const response = await axiosIMDBInstance.get(
        `/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&query=NASA&include_adult=false&1`
      );
      console.log(response.data.results, "movie response");
      const data = response.data.results;
      setMovieList(data);
    };
    getNASAImage();
  }, []);

  return (
    <section className="movie__container">
      <div class=" movie grid gap-7 grid-cols-4  justify-center mx-auto">
        {movieList.map((movie, index) => {
          return <MovieCardItem key={index} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default Index;
