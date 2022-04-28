import React from "react";
import imagePlaceholder from "../../../public/gallery.png";

const baseImgUrl = "https://image.tmdb.org/t/p/oHqKd2jwRgL4BsgOqCv01hekvme.jpg";
const size = "w500";

const MovieCardItem = (movie) => {
  let { title, overview, popularity, release_date, poster_path } = movie.movie;

  const baseImgUrl = `https://image.tmdb.org/t/p/`;
  const size = "w500";

  const poster = `${baseImgUrl}${size}${poster_path} || https://res.cloudinary.com/evergreenx/image/upload/v1651163620/gallery_qca6g8.png`;

  console.log(movie);
  return (
    <>
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

          <h1>{poster_path}</h1>
          <p className="movie__card__descrition__popularity">
            Relese data : <span className="text-[#ffb703]">{release_date}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCardItem;
