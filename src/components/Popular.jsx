import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=pop&apikey=73a748a5`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error('No movies found:', data);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    nav: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative z-0">
      <div className="container xl:px-14 px-3 relative">
        <h2 className="text-[32px] font-normal leading-9 text-white flex inline">
          Popular Movies
          <Link to="/all-movies" className="underline hover:no-underline text-[16px] ml-[63px] flex items-center gap-[26px]">
            View all <FaAngleRight />
          </Link>
        </h2>
        <div className="slider-container relative overflow-hidden ">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div key={index} className="relative  z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30" >
                <img src={movie.Poster} alt={movie.Title} className="rounded-[4px] w-full h-screencard-img" />
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">{movie.Title}</h2>
                    <p>{movie.Type} | {movie.Year}</p>
                    <Link to={`/movie/${movie.imdbID}`} className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
