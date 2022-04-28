import React , {} from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();

    useEffect(() => {
      // GET movies list from IMDB on load of the page

      const getIMDBImage = async () => {
        try {
          const response = await axiosIMDBInstance.get(
            `/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&query=NASA&include_adult=false&1`
          );

          const data = response.data.results;

          setMovieList(data);
        } catch (error) {
          alert(error);
        }
      };
      getIMDBImage();
    }, []);


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
