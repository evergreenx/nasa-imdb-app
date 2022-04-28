import React from "react";

const baseImgUrl = "https://image.tmdb.org/t/p/oHqKd2jwRgL4BsgOqCv01hekvme.jpg";
const size = "w500";

const MovieCardItem = (movie) => {
  let { title, url, overview, popularity, release_date, poster_path } =
    movie.movie;

  const baseImgUrl = `https://image.tmdb.org/t/p/${poster_path}`;
  const size = "w500";

  console.log(movie);
  return (
    <>
      <div className="movie_card_item">
        <div
          className="movie__card__poster"
          style={{
            backgroundImage: `url(})`,
          }}
        ></div>

        <h1 className="movie__card__title">{title}</h1>

        <div className="movie__card__description">
          <h1 className="movie__card__description__header">Description</h1>

          <p className="movie__card__description__text">{overview}</p>

          <p className="movie__card__descrition__popularity">
            Popularity :{" "}
            <span className="text-[#ffb703]">{movie.movie.popularity}</span>
          </p>

          <p className="movie__card__descrition__popularity">
            Relese data :{" "}
            <span className="text-[#ffb703]">{movie.movie.release_date}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCardItem;
