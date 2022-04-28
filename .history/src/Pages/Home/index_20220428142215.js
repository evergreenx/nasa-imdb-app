import React, { useEffect } from "react";

import { getUserFullDate } from "../../Utilites/date";
import { axiosInstance } from "../../Utilites/axiosInstance";

const Index = () => {
  useEffect(() => {
    axiosInstance
      .get(`/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <section className="home__container text-white">
      <div className="date__container">
        <h2 className="">NASA: Picture of the Day</h2>

        {
          // get current date and time based on user timezone
          getUserFullDate()
        }
      </div>
    </section>
  );
};

export default Index;
