import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();

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
