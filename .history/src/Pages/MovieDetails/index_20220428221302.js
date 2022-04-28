import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();

  return <div className="movie">deatils page</div>;
};

export default Index;
