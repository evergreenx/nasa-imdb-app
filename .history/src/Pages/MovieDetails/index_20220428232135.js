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

        const data = response.data.results;

        setMovieInfo(data);

        setIsLoading(false);
        console.log(data, "data details");
      } catch (error) {
        alert(error);
      }
    };
    getIMDBImage();
  }, [id]);

  const { title } = movieInfo;

  console.log(movieInfo, "movieInfo");

  if (isLoading) {
    
    
  }

  return (
    <section className="movie__details__container bg-white">
      <div class="movie__details__image">{title}</div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis fuga
      eius et quis deleniti pariatur praesentium repellat adipisci distinctio
      dolore quasi cumque, velit, id optio consequuntur deserunt maiores
      provident voluptatem?
    </section>
  );
};

export default Index;
