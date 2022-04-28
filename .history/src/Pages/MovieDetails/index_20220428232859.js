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

  const { poster_path } = movieInfo;


    const baseImgUrl = `https://image.tmdb.org/t/p/`;
    const size = "w500";

    let poster = `${baseImgUrl}${size}${poster_path}`;

    // show default image if no poster is available
    if (!poster_path) {
      poster = `https://res.cloudinary.com/evergreenx/image/upload/v1651163620/gallery_qca6g8.png`;
    }

  console.log(movieInfo, "movieInfo");

  if (isLoading) {
    return <p className="text-white"> loading</p>;
  }

  return (
    <section className="movie__details__container">
      <div class="movie__details__image">



        
      </div>
    </section>
  );
};

export default Index;
