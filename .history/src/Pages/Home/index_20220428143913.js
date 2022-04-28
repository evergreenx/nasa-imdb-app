import React, { useEffect, useState } from "react";

import { getUserFullDate } from "../../Utilites/date";
import {
  axiosNasaInstance,
  axiosIMDBInstance,
} from "../../Utilites/axiosInstance";

const Index = () => {
  const [todayImage, setTodayImage] = useState(null);

  useEffect(() => {
    // GET NASA today image on load of the page

    const getNASAImage = async () => {
      const response = await axiosNasaInstance.get(
        `/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
      );
      console.log(response, "response");
      const { url } = response.data.url;
      setTodayImage(url);
    };
    getNASAImage();
  }, []);

  return (
    <main className="home__container text-white">
      <header className="date__container">
        <h2>
          <span className="text-yellow-500">NASA: </span> Picture of the Day
        </h2>

        {
          // get current date and time based on user timezone
          getUserFullDate()
        }
      </header>

      <section className="image__container">
        <img src={todayImage} alt="NASA today"  />
      </section>
    </main>
  );
};

export default Index;
