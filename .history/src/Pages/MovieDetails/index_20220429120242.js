import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";
import Loader from "../../Components/Loader";

const Index = () => {
  const [movieInfo, setMovieInfo] = useState("null");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // GET movies details from IMDB on load of the page

    const getIMDBImage = async () => {
      try {
        const response = await axiosIMDBInstance.get(
          `/movie/${id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`
        );

        const data = response.data;

        setMovieInfo(data);

        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    getIMDBImage();
  }, [id]);

  // destructure movieInfo object
  const {
    poster_path,
    title,
    overview,
    popularity,
    release_date,
    genres,
    production_companies,
    status,
    imdb_id,
    runtime,
    production_countries,
    tagline,
    spoken_languages,
    vote_average,
    vote_count,
  } = movieInfo;

  const baseImgUrl = `https://image.tmdb.org/t/p/`;
  const size = "w500";

  let poster = `${baseImgUrl}${size}${poster_path}`;

  // show default image if no poster is available
  if (!poster_path) {
    poster = `https://res.cloudinary.com/evergreenx/image/upload/v1651163620/gallery_qca6g8.png`;
  }

  // imbd link for movie
  let IMDBLink = `https://www.imdb.com/title/${imdb_id}`;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="movie__details__container">
      <div className="movie__details__top">
        <div className="movie__details__image__containerx">
          <img
            className=" movie__details__image"
            src={poster}
            alt="NASA today"
          />
        </div>

        <div className="pt-20">
          <h1 className="text-white movie__details__title text-3xl">{title}</h1>

          {tagline && (
            <div className="movie__details__popularity lg:text-2xl text-xl mt-3">
              <h1 className="text-white font-bold ">
                Tagline:
                <span className="text-[#ffb703] ml-3">{tagline}</span>
              </h1>
            </div>
          )}

          <div className="flex items-center  lg:text-2xl text-xl py-3">
            <h1 className="text-white font-bold ">Genres:</h1>

            <div className="movie__details__genres flex space-x-4 lg:text-2xl text-xl font-bold ">
              {genres.map((genre) => (
                <h1 key={genre.name} className="movie__details__genre text-[#ffb703] space-x-6 ml-4  ">
                  {genre.name}
                </h1>
              ))}
            </div>
          </div>

          <div className="movie__details__popularity lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Popularity:
              <span className="text-[#ffb703] ml-3">{popularity}</span>
            </h1>
          </div>

          <div className="movie__details__release__date py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Release Date:
              <span className="text-[#ffb703] ml-3">{release_date}</span>
            </h1>
          </div>

          <div className="lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Status:
              <span className="text-[#ffb703] ml-3">{status}</span>
            </h1>
          </div>

          <div className="py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Runtime:
              <span className="text-[#ffb703] ml-3">{runtime} minutes </span>
            </h1>
          </div>

          <div className="py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Vote Average:
              <span className="text-[#ffb703] ml-3">{vote_average} / 10</span>
            </h1>
          </div>

          <div className="py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Vote count:
              <span className="text-[#ffb703] ml-3">{vote_count}</span>
            </h1>
          </div>

          <div className="flex items-center  lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">Studio:</h1>

            <div className="movie__details__genres flex space-x-4 lg:text-2xl text-xl font-bold ">
              {production_companies.map((studio) => (
                <h1 key={studio.id} className="movie__details__genre text-[#ffb703] space-x-6 ml-4  ">
                  {studio.name}
                </h1>
              ))}
            </div>
          </div>

          <div className="flex items-center  lg:text-2xl text-xl py-3">
            <h1 className="text-white font-bold ">Production country:</h1>

            <div className="movie__details__genres flex space-x-4 lg:text-2xl text-xl font-bold ">
              {production_countries.map((country) => (
                <h1 className="movie__details__genre text-[#ffb703] space-x-6 ml-4  ">
                  {country.name}
                </h1>
              ))}
            </div>
          </div>

          <div className="flex items-center  lg:text-2xl text-xl py-3">
            <h1 className="text-white font-bold ">Production country:</h1>

            <div className="movie__details__genres flex space-x-4 lg:text-2xl text-xl font-bold ">
              {spoken_languages.map((language) => (
                <h1 className="movie__details__genre text-[#ffb703] space-x-6 ml-4  ">
                  {language.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>

      {overview && (
        <div className="movie__details__desc my-10">
          <h1 className="text-[#ffb703] font-bold lg:text-2xl text-xl py-6 ">
            <span className="">Description</span>
          </h1>
          <p className="text-white lg:text-2xl text-xl">{overview}</p>
        </div>
      )}

      <div className="py-3 lg:text-2xl text-xl">
        <h1 className="text-white font-bold ">
          <a href={IMDBLink} className="text-[#ffb703] ">
            IMDB Link
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Index;
