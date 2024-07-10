import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MoviePage from "../pages/MoviePage";
import Series from "../pages/Series";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/movie" element={<MoviePage/>}/>
        <Route path="series" element={<Series/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
