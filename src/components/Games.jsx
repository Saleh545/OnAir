import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";

const Games = () => {
  let settingss = {
    dots: false,
    infinite: true,
    nav: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
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
    <>
      <div className=" relative z-0">
        <div className="container xl:px-14 px-3 relative">
          <h2 className="text-[32px] font-normal leading-9 text-white flex   inline ">
            New Channels{" "}
            <Link className="underline hover:no-underline text-[16px] ml-[63px] flex items-center gap-[26px]">
              View all <FaAngleRight />
            </Link>
          </h2>
          <div className="slider-container relative  ">
            <Slider {...settingss}>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game1.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game2.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game3.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game4.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game5.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game6.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img src="./src/assets/game7.svg"alt=""className="rounded-[26px] w-full card-img"/> 
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;