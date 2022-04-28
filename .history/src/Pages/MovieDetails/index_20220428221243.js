import React from "react";
import { useParams } from "react-router-dom";

const ndex = () => {
  const { id } = useParams();

  return <div>deatils page</div>;
};

export default index;
