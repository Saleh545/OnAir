// AllMovies.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response1 = await fetch(`https://www.omdbapi.com/?s=lucy&apikey=73a748a5&type=movie&plot=full&page=1`);
        const data1 = await response1.json();
        const response2 = await fetch(`https://www.omdbapi.com/?s=lucy&apikey=73a748a5&type=movie&plot=full&page=2`);
        const data2 = await response2.json();
        if (data1.Search && data2.Search) {
          const allMovies = [...data1.Search, ...data2.Search.slice(0, 10)];
          setMovies(allMovies);
        } else if (data1.Search) {
          const first20Movies = data1.Search.slice(0, 20);
          setMovies(first20Movies);
        } else {
          console.error('No movies found in either request.');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Spinner/>
      <Header />
      <div className="container xl:px-14 px-3">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          {movies.map((movie, index) => (
            <div key={index} className="group hover:border-red-800  border-[3px] border-gray-300 rounded w-full cursor-pointer relative overflow-hidden">
              <img src={movie.Poster} alt={movie.Title} className="rounded-lg h-full w-full opacity-70 hover:opacity-100 filter brightness-80 transition-transform duration-300 transform group-hover:scale-105 group-hover:z-10" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white w-full">
                <h2 className="text-lg font-medium">{movie.Title}</h2>
                <p className="text-sm text-gray-400 my-3">{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`} className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]" > Watch Now
                    </Link>              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllMovies;
