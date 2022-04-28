import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();

  return <div>deatils page</div>;
};

export default Index;
