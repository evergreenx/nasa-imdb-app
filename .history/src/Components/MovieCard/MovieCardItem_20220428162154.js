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
          class="movie__poster"
          className="w-full"
          style={{
        
            width:100%,
            backgroundSize: "cover",
            backgroundImage: `url(${
              "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai.jpg" 
            })`,
          }}
        ></div>
        <h3>{title}</h3>
        {/* 
      <img
        src={`${baseImgUrl}/${size}${"/oHqKd2jwRgL4BsgOqCv01hekvme.jpg"}`}
        alt={title}
      /> */}

        <img src={url} alt={title} />
      </div>
    </>
  );
};

export default MovieCardItem;
