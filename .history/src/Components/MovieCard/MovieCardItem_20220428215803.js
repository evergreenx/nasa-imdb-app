import React from "react";
import { Link } from "react-router-dom";
const MovieCardItem = (movie) => {
  // destructuring movie object to get movie properties
  let { title, overview, popularity, release_date, poster_path } = movie.movie;

  const baseImgUrl = `https://image.tmdb.org/t/p/`;
  const size = "w500";

  let poster = `${baseImgUrl}${size}${poster_path}`;

  // show default image if no poster is available
  if (!poster_path) {
    poster = `https://res.cloudinary.com/evergreenx/image/upload/v1651163620/gallery_qca6g8.png`;
  }

  return (
    <>
      <Link
        to={"/detailspage"}
        className="hover:underline decoration-    text-decoration: underline rgb(255, 183, 3)"
      >
        <div className="movie_card_item">
          <div
            className="movie__card__poster"
            style={{
              backgroundImage: `url(${poster})`,
            }}
          ></div>

          <h1 className="movie__card__title">{title}</h1>

          <div className="movie__card__description">
            <h1 className="movie__card__description__header">Description</h1>

            <p className="movie__card__description__text">{overview}</p>

            <p className="movie__card__descrition__popularity">
              Popularity : <span className="text-[#ffb703]">{popularity}</span>
            </p>

            <p className="movie__card__descrition__popularity">
              Relese data :{" "}
              <span className="text-[#ffb703]">{release_date}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCardItem;
