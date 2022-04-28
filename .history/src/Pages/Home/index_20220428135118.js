import React from "react";

import { getUserFullDate } from "../../Utilites/date";

const index = () => {
  return (
    <section className="home__container text-white">
      <div className="data__container">
        <h2 className="">NASA: Picture of the Day</h2>

        {
          // get current date and time based on user timezone
          getUserFullDate()
        }
      </div>
    </section>
  );
};

export default index;
