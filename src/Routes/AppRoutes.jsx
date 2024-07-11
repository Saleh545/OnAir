import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MoviePage from "../pages/MoviePage";
import Series from "../pages/Series";
import Profile from "../pages/Profile";
import Plans from "../pages/Plans";
import Payments from "../pages/Payments";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/movie" element={<MoviePage/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/profile" element={< Profile />}/>
        <Route path="/plans" element={< Plans />}/>
        <Route path="/payments" element={< Payments />}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
