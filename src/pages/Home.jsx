import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import RecommendedChannels from "../components/RecommendedChannels";
import Movies from "../components/Movies";
import Channel from "../components/Channel";
import Popular from "../components/Popular";
import Games from "../components/Games";
import Footer from "../components/Footer";
import Header from "../components/Header";
import homebck from "../assets/homeBck.svg";

const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div>
<Header/>
    <div className="relative  ">
      <Slider {...settings}>
        <div className="relative"  >
          <img src={homebck} alt="" className="z-10" />
          <div className="absolute inset-0 flex justify-center items-center flex-col w-[35%] font-light ">
            <h2 className="z-40 text-white text-center text-5xl">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174] ">Start FREE trial</p>
          </div>
        </div>
        <div className="relative">
          <img src={homebck} alt="" className="z-10" />
          <div className="absolute inset-0 flex justify-center items-center flex-col w-[35%] font-light ">
            <h2 className="z-40 text-white text-center text-5xl">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174] ">Start FREE trial</p>
          </div>
        </div>
        <div className="relative">
          <img src={homebck} alt="" className="z-10" />
          <div className="absolute inset-0 flex justify-center items-center flex-col w-[35%] font-light ">
            <h2 className="z-40 text-white text-center text-5xl">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174] ">Start FREE trial</p>
          </div>
        </div>
        <div className="relative">
          <img src={homebck} alt="" className="z-10" />
          <div className="absolute inset-0 flex justify-center items-center flex-col w-[35%] font-light ">
            <h2 className="z-40 text-white text-center text-5xl">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174] ">Start FREE trial</p>
          </div>
        </div>
      </Slider>
    </div>
    <RecommendedChannels/>
    <Channel/>
    <Movies/>
    <Popular/>
    <Games/>
    <Footer/>
  </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute bottom-4 hover:bg-white hover:text-black ml-20 left-1/2 transform -translate-x-0 z-20 bg-transparent text-white border flex rounded-full w-10 h-10 items-center justify-center"
      onClick={onClick}
    >
      <GrNext />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute mr-20 bottom-4 right-1/2 transform translate-x-0 z-20 bg-transparent text-white border hover:bg-white hover:text-black flex rounded-full w-10 h-10  items-center justify-center"
      onClick={onClick}
    >
      <GrPrevious />
    </button>
  );
};


export default Home;
