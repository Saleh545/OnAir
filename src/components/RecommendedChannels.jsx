import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const RecommendedChannels = () => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
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
      <div className="mt-[69px] relative z-0">
        <div className="container xl:px-14 px-3">
          <h2 className="text-[32px] font-normal leading-9 mb-[30px]">
            Recommended Channels
          </h2>

          <div className="slider-container">
            <Slider {...settingss}>
                        <div className="relative mt-[30px] z-10 group cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px]">
                <img
                  src="./src/assets/img-1.svg"
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute  bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mb-2 text-[20px]">
                      Enjoy the best of action-packed movies from NBC international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px]">
                  <img className="mt-[23px] mb-[11px] mx-[24px]" src="./src/assets/fox.svg" alt=""/>
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[34px] text-4xl text-white">
                    212
                  </p>
                </div>
              </div>
                        <div className="relative mt-[30px] z-10 group cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px]">
                <img
                  src="./src/assets/img-1.svg"
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute  bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mb-2 text-[20px]">
                      Enjoy the best of action-packed movies from NBC international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px]">
                  <img className="mt-[23px] mb-[11px] mx-[24px]" src="./src/assets/fox.svg" alt=""/>
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[34px] text-4xl text-white">
                    212
                  </p>
                </div>
              </div>
                        <div className="relative mt-[30px] z-10 group cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px]">
                <img
                  src="./src/assets/img-1.svg"
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute  bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mb-2 text-[20px]">
                      Enjoy the best of action-packed movies from NBC international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px]">
                  <img className="mt-[23px] mb-[11px] mx-[24px]" src="./src/assets/fox.svg" alt=""/>
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[34px] text-4xl text-white">
                    212
                  </p>
                </div>
              </div>
                        <div className="relative mt-[30px] z-10 group cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px]">
                <img
                  src="./src/assets/img-1.svg"
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute  bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mb-2 text-[20px]">
                      Enjoy the best of action-packed movies from NBC international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[34px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px]">
                  <img className="mt-[23px] mb-[11px] mx-[24px]" src="./src/assets/fox.svg" alt=""/>
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[34px] text-4xl text-white">
                    212
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedChannels;
