import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
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
    <div>
             <div className=" relative z-0">
        <div className="container  xl:px-14 px-3 relative">
          <h2 className="text-[32px] font-normal leading-9 text-white flex   inline ">
          New Movies<Link className="underline hover:no-underline text-[16px] ml-[63px] flex items-center gap-[26px]">View all <FaAngleRight /></Link>
          </h2>

          <div className="slider-container relative  ">
            <Slider {...settingss}>

              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new1.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>           
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new2.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>           
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new3.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>           
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new4.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>           
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new5.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>   
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new4.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>         
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new1.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>         
              <div className="relative custom-slide z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer  w-[231px!important]  h-[248px!important]custom-slide transition-all duration-300   z-30">
             <Link to="/setting">
                <img src="./src/assets/new2.svg" alt="" className="rounded-[4px] w-full  h-screencard-img" />
             </Link>
              </div>                              
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies