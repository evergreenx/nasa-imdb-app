import React from "react";

const MovieCardItem = (movie) => {
  let { title } = movie.movie;

  console.log(movie);
  return (
    <div className="movie_card flex">
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCardItem;
