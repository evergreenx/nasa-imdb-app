import React from "react";

const baseImgUrl = "https://image.tmdb.org/t/p";
const size = "w500";

const MovieCardItem = (movie) => {
  let { title , url } = movie.movie;

  console.log(movie);
  return (
    <div className="movie_card flex">
      <h3>{title}</h3>

      <img src={url} alt={title} />

      <img src={`${baseImgUrl}/${size}${this.state.poster}` alt={title} />
    </div>
  );
};

export default MovieCardItem;
