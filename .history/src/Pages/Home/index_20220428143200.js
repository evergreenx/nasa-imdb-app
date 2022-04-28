import React, { useEffect } from "react";

import { getUserFullDate } from "../../Utilites/date";
import {
  axiosNasaInstance,
  axiosIMDBInstance,
} from "../../Utilites/axiosInstance";

const Index = () => {

  useEffect(() => {
    
    // GET NASA today image on load of the page
    axiosNasaInstance
      .get(`/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      .then((res) => {
        console.log(res , 'NASA DATA');
      });

   
  }, []);

  return (
    <section className="home__container text-white">
      <div className="date__container">
        <h2 className="">
          <span className="text-yellow-500">NASA: </span> Picture of the Day
        </h2>

        {
          // get current date and time based on user timezone
          getUserFullDate()
        }
      </div>
    </section>
  );
};

export default Index;
