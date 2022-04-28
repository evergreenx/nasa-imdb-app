import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";

const Index = () => {
  const [movieInfo, setMovieInfo] = useState("null");
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

        console.log(data, "data details");
      } catch (error) {
        alert(error);
      }
    };
    getIMDBImage();
  }, [id]);

  return <section className="movie__details__container">
    
    
    
    <div class="movie__details__image">


{}


    </div>



.movie__details__

    
  
  
  
  </section>;
};

export default Index;
