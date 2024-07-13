import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import new1 from "../assets/new1.svg";
import new2 from "../assets/new2.svg";
import new3 from "../assets/new3.svg";
import new4 from "../assets/new4.svg";
import new5 from "../assets/new5.svg";
import new6 from "../assets/new6.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Movies = () => {
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
        <div className="container  xl:px-14 px-3 relative">
          <h2 className="text-[32px] font-normal leading-9 text-white flex   inline ">
            Popular Movies
            <Link className="underline hover:no-underline text-[16px] ml-[63px] flex items-center gap-[26px]">
              View all <FaAngleRight />
            </Link>
          </h2>

          <div className="slider-container relative ">
            <Slider {...settingss}>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new3} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link to="/series" className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new1} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link to="/series" className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new6} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link to="/series" className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new5} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link to="/series" className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new2} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link to="/series" className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new4} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link to="/series" className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
                         
                                       
            </Slider>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Movies;
