import React, { useState, useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Games = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=game&type=movie&apikey=73a748a5`
      );
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
 

  const settings = {
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
        <h2 className="text-[20px] lg:text-[32px] font-normal leading-9 text-white flex inline">
          New Games 
          <Link to="/all-movies" className="underline hover:no-underline text-[16px] ml-[63px] flex items-center gap-[26px]">
            View all <FaAngleRight />
          </Link>
        </h2>
        <div className="slider-container relative overflow-hidden">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div
                key={index}
                className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30"
              >
                <img src={movie.Poster} alt={movie.Title} className="rounded-[26px] w-full card-img" />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3 className="text-white rounded-[13px] pl-[10px]" style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}>
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">{movie.Title}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                    Enjoy the best of action-packed movies from NBC
                      international...                    </p>
                      <Link
                      to={`/movie/${movie.imdbID}`}
                      className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]"
                    >
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

export default Games;
