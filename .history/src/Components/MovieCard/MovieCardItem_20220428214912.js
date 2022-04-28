import React from "react";
import Link from "react-router-dom";
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
      
      <Link>
      
      
      </Link>
  
    </>
  );
};

export default MovieCardItem;
