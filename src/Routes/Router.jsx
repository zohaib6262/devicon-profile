import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import DetailPage from "../components/DetailPage/DetailPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/detailPage" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
