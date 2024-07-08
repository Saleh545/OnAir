import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import moviebck from "../assets/moviebackground.svg"; 
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import new1 from "../assets/new1.svg";
import new2 from "../assets/new2.svg";
import new3 from "../assets/new3.svg";
import new4 from "../assets/new4.svg";
import new5 from "../assets/new5.svg";


const MoviePage = () => {
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
    <div>
      <Header />
      <div className="min-h-screen flex  flex-col justify-end  bg-cover bg-center" style={{ backgroundImage: `url(${moviebck})` }}>
        <div className="container xl:px-14 px-3">
            <div className="max-w-[24%] mb-[28px]">
              <div className=" max-w-[500px]  sm:max-w-[100%]">
                <h3 className="text-[56px] text-white">Friends</h3>
                <p className="text-[#A7A7A7] text-[24px]">4 Seasons | 12 Episodes</p>
                <p className="text-[16px] lg:text-[18px] md:text-[22px] text-white mt-[36px]">
                  Cobb steals information from his targets by entering their
                  dreams. Saito offers to wipe clean Cobb's criminal history as
                  payment for performing an inception on his sick competitor's
                  son.
                </p>
                <Link to="/movie" className="text-white mt-[55px] inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
              </div>
            </div>
        </div>
      </div>

      <div className="slider-container relative  ">
            <Slider {...settingss}>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new1} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new2} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new3} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new4} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[4px] w-[231px!important]  h-[348px!important] custom-slide transition-all duration-300 group z-30">
                <img src={new5} alt="" className="rounded-[4px] w-full h-screencard-img "/>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h2 className="mb-2 text-[16px]">Charlie’s Angels</h2>
                    <p>6 Seasons  |   13 Episodes</p>
                    <Link className="text-white mt-[23px] inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>                              
            </Slider>
          </div>      <Footer />
    </div>
  );
};

export default MoviePage;
