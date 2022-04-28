import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";
import PageNotFound from "../Pages/404Page";

import React from "react";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="DetailsPage" element={<DetailsPage />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}
