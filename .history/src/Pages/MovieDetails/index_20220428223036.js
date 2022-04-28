import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosIMDBInstance } from "../../Utilites/axiosInstance";

const Index = () => {

  const [movieInfo , ]
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

        // setMovieList(data);

        console.log(data, "data details");
      } catch (error) {
        alert(error);
      }
    };
    getIMDBImage();
  }, [id]);

  return (
    <div className="movie__details__container">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio libero
      omnis nam odit? Et nemo, repellendus laudantium dignissimos ipsa beatae
      nesciunt deserunt deleniti laboriosam natus obcaecati? Quam praesentium
      voluptate ad.
    </div>
  );
};

export default Index;
