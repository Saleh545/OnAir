import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaEyeSlash, FaImdb, FaInstagram, FaPlus, FaStar, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiImdb } from "react-icons/si";
import moviebck from "../assets/moviebck.svg";
import { CiStar } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import Popular from "./Popular";
import Spinner from "./Spinner";


const API_URL = (imdbID) => {
  return `https://www.omdbapi.com/?i=${imdbID}&apikey=73a748a5`;
};

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(API_URL(imdbID));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [imdbID]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div >
      <Header />
<div className="bg-cover bg-center" style={{ backgroundImage: `url(${moviebck})` }}>

      <div className="container xl:px-14 px-3 ">
        <div className="pt-[20px]">
          <h2 className="text-[32px] text-white font-bold text-center lg:text-left">{movie.Title} <span className="text-[#A1A1AA] font-light text-[24px]">({movie.Year})</span></h2>
        </div>
<div className="  block lg:flex justify-between  mt-7 ">
    <div className="block lg:flex items-center justify-center gap-5">
      <div className=" flex items-center justify-center w-full lg:w-[33%] ">
        <img src={movie.Poster} alt={movie.Title} className="rounded-xl" />
      </div>

        <div className="my-5">
       <h4 className="text-white  text-[24px]">{movie.Title} Movie Information</h4>
        <p className="text-[#D4D4D8] font-bold mt-[32px] text-[24px] w-full lg:w-[50%] ">{movie.Plot}</p>
        <p className="text-white my-[14px] font-bold">Director: <span className="text-[#A1A1AA]">{movie.Director}</span></p>
        <p className="text-white font-bold">Actors: <span className="text-[#A1A1AA]">{movie.Actors}</span></p>
        <p className="text-white font-bold my-[14px]">Genre: <span className="text-[#A1A1AA]">{movie.Genre}</span></p>
        <p className="text-white font-bold flex items-center text-yellow-400 gap-3"> <SiImdb className="w-[30px] h-[30px] " /> Rating:  {movie.imdbRating}</p>
        </div>
    </div>

    <div className="  ">
        <div className="block lg:flex gap-4">
                <p className="text-white hover:bg-[#323235] cursor-pointer text-center py-[8px] px-[16px] bg-[#18181B] rounded-[8px] flex flex-col items-center  "><FaEyeSlash className="w-[24px] h-[24px] "/>Unwatch</p>
                <p className="text-white mt-3 lg:mt-0 hover:bg-[#323235] cursor-pointer   text-center py-[8px] px-[16px] bg-[#18181B] rounded-[8px] flex flex-col items-center "><FaPlus className="w-[24px] h-[24px] "/>Follow</p>
        </div>
        <div className=" mt-[20px]  ">
            <h3 className="text-white ">Rate this film!</h3>
            <div className="flex justify-center gap-3 bg-[#18181B] py-[16px] inline px-[8px] rounded-xl  mt-[20px]">
        <FaStar className="hover:text-yellow-400 text-white cursor-pointer w-6 h-6"/>
        <FaStar className="hover:text-yellow-400 text-white cursor-pointer w-6 h-6"/>
        <FaStar className="hover:text-yellow-400 text-white cursor-pointer w-6 h-6"/>
        <FaStar className="hover:text-yellow-400 text-white cursor-pointer w-6 h-6"/>
        <FaStar className="hover:text-yellow-400 text-white cursor-pointer w-6 h-6"/>

            </div>

        </div>
        <div className="mt-[20px]">
            <h3 className="flex items-center gap-3 text-white text-2xl"><IoMdShare className="w-6 h-6" /> Share</h3>
<div className="flex gap-3 mt-[10px]">
    <div className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"><FaWhatsapp className=" text-white w-6 h-6" /> </div>
    <div className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"><FaTwitter  className=" text-white w-6 h-6" /> </div>
    <div className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"><FaTelegramPlane     className=" text-white w-6 h-6" /> </div>
    <div className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"><FaInstagram  className=" text-white w-6 h-6" /> </div>

</div>

        </div>
              
                </div>
        
</div>

<div className="my-[40px] flex flex-col items-center">
<iframe className="rounded-[15px]" width="999" height="615" src="https://www.youtube.com/embed/TyskcLbCkqE?si=a7uq3EeZVaYDfL0d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<Popular/>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default MovieDetail;
