import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";
import PageNotFound from "../Pages/404Page";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />}> </Route>
        {/* <Route index element={<Home />} /> */}
        <Route path="DetailsPage" element={<DetailsPage />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}
