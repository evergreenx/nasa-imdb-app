import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.js";
import DetailsPage from "./Pages/DetailsPage/index.js";

import React from 'react'

export function index() {
    render(
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="DetailsPage" element={<DetailsPage />}></Route>
        </Route>
      </Routes>
    );
}
