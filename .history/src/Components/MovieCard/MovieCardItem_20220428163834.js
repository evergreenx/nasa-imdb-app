import React from "react";

const baseImgUrl = "https://image.tmdb.org/t/p/oHqKd2jwRgL4BsgOqCv01hekvme.jpg";
const size = "w500";

const MovieCardItem = (movie) => {
  let { title, url } = movie.movie;

  console.log(movie);
  return (
    <>
      <div className="movie_card_item">
        <div
          className="movie__card__poster"
          style={{
            backgroundImage: `url(${"https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai.jpg"})`,
          }}
        ></div>
        <h1 className="movie__card__title">{title}</h1>




        .movie
      </div>
    </>
  );
};

export default MovieCardItem;
