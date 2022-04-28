import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/";
import DetailsPage from "./Pages/DetailsPage/index.js";

import React from "react";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="DetailsPage" element={<DetailsPage />}></Route>
      </Route>
    </Routes>
  );
}
