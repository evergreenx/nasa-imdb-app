import React from "react";

import { getUserFullDate } from "../../Utilites/date";

const index = () => {
  return (
    <section className="home__container text-white">
      <div className="text-center text-[#8EE6CA] py-5">
        <h2 className="font-bold text-xl">NASA: Picture of the Day</h2>

        {
          // get current date and time based on user timezone
          getUserFullDate()
        }
      </div>
    </section>
  );
};

export default index;
