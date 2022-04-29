import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";

const Index = () => {
  const [movieInfo, setMovieInfo] = useState("null");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // alert(id);

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
        console.log(data, "data details");
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

  console.log(movieInfo, "movieInfo");

  if (isLoading) {
    return <p className="text-white"> loading</p>;
  }

  return (
    <section className="movie__details__container">
      <div class="movie__details__top">
        <div class="movie__details__image__container">
          <img
            className=" movie__details__image"
            src={poster}
            alt="NASA today"
          />
        </div>

        <div className="pt-20">
          <h1 className="text-white movie__details__title">{title}</h1>

          <div className="flex items-center  lg:text-2xl text-xl py-3">
            <h1 className="text-white font-bold ">Genres:</h1>

            <div className="movie__details__genres flex space-x-4 lg:text-2xl text-xl font-bold ">
              {genres.map((genre) => (
                <h1 className="movie__details__genre text-[#ffb703] space-x-6 ml-4  ">
                  {genre.name}
                </h1>
              ))}
            </div>
          </div>

          <div class="movie__details__popularity lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Popularity:
              <span className="text-[#ffb703] ml-3">{popularity}</span>
            </h1>
          </div>

          <div class="movie__details__release__date py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Release Date:
              <span className="text-[#ffb703] ml-3">{release_date}</span>
            </h1>
          </div>

          <div class="py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Status:
              <span className="text-[#ffb703] ml-3">{status}</span>
            </h1>
          </div>

          <div class="py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              Runtime:
              <span className="text-[#ffb703] ml-3">{runtime}</span>
            </h1>
          </div>

          <div class="py-3 lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">
              <a href={IMDBLink} className="text-[#ffb703] ">
                IMDB Link:
              </a>
            </h1>
          </div>

          <div className="flex items-center  lg:text-2xl text-xl">
            <h1 className="text-white font-bold ">Studio:</h1>

            <div className="movie__details__genres flex space-x-4 lg:text-2xl text-xl font-bold ">
              {production_companies.map((studio) => (
                <h1 className="movie__details__genre text-[#ffb703] space-x-6 ml-4  ">
                  {studio.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="movie__details__desc my-10">
        <h1 className="text-yellow-600 font-bold lg:text-2xl text-xl py-6 ">
          <span className="">Description</span>
        </h1>
        <p className="text-white lg:text-2xl text-xl">{overview}</p>
      </div>
    </section>
  );
};

export default Index;
