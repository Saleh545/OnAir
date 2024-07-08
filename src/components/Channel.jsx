import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img-1.svg";
import img2 from "../assets/img-2.svg";
import img3 from "../assets/img-3.svg";
import img4 from "../assets/img-4.svg";
import img5 from "../assets/img-5.svg";
import img6 from "../assets/img-6.svg";


const Channel = () => {
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
            New Channels <Link className="underline hover:no-underline text-[16px] ml-[63px] flex items-center gap-[26px]">View all <FaAngleRight /></Link>
          </h2>
          <div className="slider-container relative  ">
            <Slider {...settingss}>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img
                  src={img1}
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white rounded-[13px] pl-[10px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}
                  >
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">Monster</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                      Enjoy the best of action-packed movies from NBC
                      international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute text-center bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px] z-50">
                  <img
                    className="mt-[14px]  h-[31px] mb-[11px] mx-[14px]"
                    src="./src/assets/fox.svg"
                    alt=""
                  />
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[14px] text-2xl text-white">
                    212
                  </p>
                </div>
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img
                  src={img2}
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white rounded-[13px] pl-[10px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}
                  >
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">Monster</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                      Enjoy the best of action-packed movies from NBC
                      international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute text-center bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px] z-50">
                  <img
                    className="mt-[14px]  h-[31px] mb-[11px] mx-[14px]"
                    src="./src/assets/fox.svg"
                    alt=""
                  />
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[14px] text-2xl text-white">
                    212
                  </p>
                </div>
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img
                  src={img3}
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white rounded-[13px] pl-[10px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}
                  >
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">Monster</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                      Enjoy the best of action-packed movies from NBC
                      international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute text-center bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px] z-50">
                  <img
                    className="mt-[14px]  h-[31px] mb-[11px] mx-[14px]"
                    src="./src/assets/fox.svg"
                    alt=""
                  />
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[14px] text-2xl text-white">
                    212
                  </p>
                </div>
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img
                  src={img4}
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white rounded-[13px] pl-[10px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}
                  >
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">Monster</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                      Enjoy the best of action-packed movies from NBC
                      international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute text-center bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px] z-50">
                  <img
                    className="mt-[14px]  h-[31px] mb-[11px] mx-[14px]"
                    src="./src/assets/fox.svg"
                    alt=""
                  />
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[14px] text-2xl text-white">
                    212
                  </p>
                </div>
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img
                  src={img5}
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white rounded-[13px] pl-[10px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}
                  >
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">Monster</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                      Enjoy the best of action-packed movies from NBC
                      international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute text-center bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px] z-50">
                  <img
                    className="mt-[14px]  h-[31px] mb-[11px] mx-[14px]"
                    src="./src/assets/fox.svg"
                    alt=""
                  />
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[14px] text-2xl text-white">
                    212
                  </p>
                </div>
              </div>
              <div className="relative z-50 mt-[54px] mb-[30px] mr-8 cursor-pointer rounded-[26px] w-[260px!important] custom-slide transition-all duration-300 group-hover:w-[300px] group z-30">
                <img
                  src={img6}
                  alt=""
                  className="rounded-[26px] w-full card-img"
                />
                <div className="absolute top-0 left-0 mt-[16px] ml-[5px] opacity-0 group-hover:opacity-100">
                  <h3
                    className="text-white rounded-[13px] pl-[10px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.47)" }}
                  >
                    Showing Now
                  </h3>
                  <p className="bg-white rounded-[13px] pl-[10px]">Monster</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[178px] bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-[0px_0px_26px_26px] transition-opacity duration-300 z-40">
                  <div className="p-4 text-white pr-20">
                    <p className="mb-2 text-[16px]">
                      Enjoy the best of action-packed movies from NBC
                      international...
                    </p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="absolute text-center bottom-0 right-0 bg-[#D9D9D9] mb-[27px] rounded-[18px_0px_0px_18px] z-50">
                  <img
                    className="mt-[14px]  h-[31px] mb-[11px] mx-[14px]"
                    src="./src/assets/fox.svg"
                    alt=""
                  />
                  <p className="bg-[#515151] w-full rounded-[18px_0px_0px_18px] py-[5px] px-[14px] text-2xl text-white">
                    212
                  </p>
                </div>
              </div>
           
             
            </Slider>
          </div>

          <div className="text-right pt-[50px]">
            <button className="p-[5px_52px] text-white bg-black text-[27px] border border-custom-gray hover:bg-white hover:text-black" >Ad Banner</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Channel