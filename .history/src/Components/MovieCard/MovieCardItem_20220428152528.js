import React from "react";

const MovieCardItem = (movie) => {
  let { title , url } = movie.movie;

  console.log(movie);
  return (
    <div className="movie_card flex">
      <h3>{title}</h3>

      <img src={url} alt={title} />
    </div>
  );
};

export default MovieCardItem;
