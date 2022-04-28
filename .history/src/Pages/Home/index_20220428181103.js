import React, { useEffect, useState } from "react";

import { getUserFullDate } from "../../Utilites/date";
import { axiosNasaInstance } from "../../Utilites/axiosInstance";
import MovieCard from "../../Components/MovieCard";

const Index = () => {
  const [todayImage, setTodayImage] = useState(null);

  useEffect(() => {
    // GET NASA today image on load of the page

    const getNASAImage = async () => {

      try {
            const response = await axiosNasaInstance.get(
        `/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
      );
      const data = response.data.url;

      console.log(data, "bg image");
      setTodayImage(data);
      }
      catch (error) {
        alert(error);
        
      }
  
    getNASAImage();
  }, []);

  return (
    <main className="home__container text-white">
      <header className="date__container">
        <h2>
          <span className="text-[#ffb703]">NASA: </span> Picture of the
          Day
        </h2>
        {
          // get current date based on user timezone

          getUserFullDate()
        }
      </header>

      <section className="image__container">
        <img className="w-full" src={todayImage} alt="NASA today" />
      </section>

      <MovieCard />
    </main>
  );
};

export default Index;
