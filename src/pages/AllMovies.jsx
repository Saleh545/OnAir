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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="border border-gray-300 rounded p-4">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded-lg mb-2"
            />
            <h2 className="text-lg font-medium">{movie.Title}</h2>
            <p className="text-sm text-gray-500">{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 block mt-2 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllMovies;
