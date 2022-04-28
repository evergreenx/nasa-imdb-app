import React from "react";
import { useParams } from "react-router-dom";

const index = () => {

  const { id } = useParams();

  return <div>deatils page</div>;
};

export default index;
