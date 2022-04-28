import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";
import PageNotFound from "../Pages/404Page";

export default function index() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}>
        {" "}
      </Route>
      <Route path="DetailsPage" element={<DetailsPage />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
