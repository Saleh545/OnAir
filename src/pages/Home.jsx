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
import Spinner from "../components/Spinner";

const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // tablet ekranı için
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // telefon ekranı için
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // daha küçük telefon ekranları için
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Spinner/>
<Header/>
    <div className="relative  overflow-hidden ">
      <Slider {...settings}>
        <div className="relative"  >
          <img src={homebck} alt="" className="z-10" />
          <div className="lg:absolute md:absolute sm:static inset-0 flex  justify-center items-center flex-col lg:w-[35%] sm:w-[100%] md:w-[55%] px-9 sm:mt-5   mt-5 w-full font-light">
          <h2 className="z-40 text-white text-center lg:text-5xl text-[30px] md:text-[35px] sm:text-[35px]">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer lg:text-2xl  md:text-[20px] sm:text-[20px] font-medium py-[10px] rounded-full bg-[#E13C52] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] hover:bg-[#f46174] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] mt-5 md:mt-[40px] lg:mt-[70px]">Start FREE trial</p>
          </div>
        </div>
        <div className="relative"  >
          <img src={homebck} alt="" className="z-10" />
          <div className="lg:absolute md:absolute sm:static inset-0 flex  justify-center items-center flex-col lg:w-[35%] sm:w-[100%] md:w-[55%] px-9 sm:mt-5   mt-5 w-full font-light">
          <h2 className="z-40 text-white text-center lg:text-5xl text-[30px] md:text-[35px] sm:text-[35px]">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer lg:text-2xl  md:text-[20px] sm:text-[20px] font-medium py-[10px] rounded-full bg-[#E13C52] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] hover:bg-[#f46174] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] mt-5 md:mt-[40px] lg:mt-[70px]">Start FREE trial</p>
          </div>
        </div>
        <div className="relative"  >
          <img src={homebck} alt="" className="z-10" />
          <div className="lg:absolute md:absolute sm:static inset-0 flex  justify-center items-center flex-col lg:w-[35%] sm:w-[100%] md:w-[55%] px-9 sm:mt-5   mt-5 w-full font-light">
          <h2 className="z-40 text-white text-center lg:text-5xl text-[30px] md:text-[35px] sm:text-[35px]">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer lg:text-2xl  md:text-[20px] sm:text-[20px] font-medium py-[10px] rounded-full bg-[#E13C52] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] hover:bg-[#f46174] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] mt-5 md:mt-[40px] lg:mt-[70px]">Start FREE trial</p>
          </div>
        </div>
        <div className="relative"  >
          <img src={homebck} alt="" className="z-10" />
          <div className="lg:absolute md:absolute sm:static inset-0 flex  justify-center items-center flex-col lg:w-[35%] sm:w-[100%] md:w-[55%] px-9 sm:mt-5   mt-5 w-full font-light">
          <h2 className="z-40 text-white text-center lg:text-5xl text-[30px] md:text-[35px] sm:text-[35px]">Dive into a <span className="font-bold">universe</span> of un-ending content and channels</h2>
          <p className="text-white px-[34px] cursor-pointer lg:text-2xl  md:text-[20px] sm:text-[20px] font-medium py-[10px] rounded-full bg-[#E13C52] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] hover:bg-[#f46174] lg:mt-[70px] md:mt-[40px] sm:mt-[15px] mt-5 md:mt-[40px] lg:mt-[70px]">Start FREE trial</p>
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
      className="absolute  bottom-4 hover:bg-white hover:text-black ml-20 left-1/2 transform -translate-x-0 z-20 bg-transparent text-white border  rounded-full w-10 h-10 sm:hidden md:flex lg:flex xl:flex hidden items-center justify-center"
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
      className="absolute mr-20 bottom-4 right-1/2 transform translate-x-0 z-20 bg-transparent text-white border hover:bg-white hover:text-black flex rounded-full w-10 h-10 sm:   md:flex lg:flex xl:flex hidden   items-center justify-center"
      onClick={onClick}
    >
      <GrPrevious />
    </button>
  );
};


export default Home;
