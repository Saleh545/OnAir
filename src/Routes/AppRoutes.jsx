import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Series from "../pages/Series";
import Profile from "../pages/Profile";
import Plans from "../pages/Plans";
import Payments from "../pages/Payments";
import MovieDetail from "../components/MovieDetail";
import AllMovies from "../pages/AllMovies";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/profile" element={< Profile />}/>
        <Route path="/plans" element={< Plans />}/>
        <Route path="/payments" element={< Payments />}/>
        <Route path="/movie/:imdbID" element={<MovieDetail/>} />
        <Route path="/all-movies"  element={<AllMovies/>} />

      </Routes>
    </>
  );
};

export default AppRoutes;
