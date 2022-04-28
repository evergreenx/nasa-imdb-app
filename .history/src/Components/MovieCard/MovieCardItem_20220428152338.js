import React from "react";

const MovieCardItem = (movie) => {
  let { title } = movie.movie;

  console.log(movie);
  return <div className="movie_card">{title}</div>;
};

export default MovieCardItem;
