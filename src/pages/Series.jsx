import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import moviebck2 from "../assets/moviebck.svg"; 
import moviebck from "../assets/moviebackground.svg"; 
import season1 from "../assets/season1.svg"; 
import season2 from "../assets/season2.svg"; 
import season3 from "../assets/season3.svg"; 
import season4 from "../assets/season4.svg"; 
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Series = () => {
    const [selectedSeason, setSelectedSeason] = useState("Season 1");
    const handleChange = (event) => {
      setSelectedSeason(event.target.value);
    };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col justify-end bg-cover bg-center" style={{ backgroundImage: `url(${moviebck})` }}>
        <div className="container xl:px-14 px-3">
          <div className="max-w-full mb-8 sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            <div className="max-w-full">
              <h3 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-white">Friends</h3>
              <p className="text-[#A7A7A7] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
              4 Seasons    |   12 Episodes              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-white mt-4 md:mt-6 lg:mt-8">
                Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.
              </p>
              <Link to="/movie" className="text-white mt-6 md:mt-8 lg:mt-10 inline-block cursor-pointer font-medium py-2 px-4 rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[77px]" style={{ backgroundImage: `url(${moviebck2})` }}>
        <div className="container xl:px-14 px-3">
        <div>
       <label className="text-white text-[18px] mr-2">Select</label>
      <select  value={selectedSeason}onChange={handleChange} className=" bg-transparent border cursor-pointer rounded-full border-[#B4B4B4] outline-none text-[#A7A7A7] py-2 px-4 rounded" >
        <option value="Season 1" className="text-[19px] cursor-pointer bg-[#232229] rounded-[13px] ">Season 1</option>
        <option value="Season 2 " className="text-[19px] cursor-pointer bg-[#232229] rounded-[13px]" >Season 2</option>
        <option value="Season 3 " className="text-[19px] cursor-pointer bg-[#232229] rounded-[13px]" >Season 3</option>
        <option value="Season 4 " className="text-[19px] cursor-pointer bg-[#232229] rounded-[13px]" >Season 4</option>
      </select>
      </div>


      <div className="slider-container relative grid lg:grid-cols-3 pb-[49px]  md:grid-cols-2 sm:grid-cols-1" >

      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season1}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season2}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season3}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season4}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season1}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season3}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season1}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>
      <div className="relative z-50 mt-[54px]  mr-[20px] cursor-pointer custom-slide rounded-[26px]   transition-all duration-300  group ">
                <img src={season2}alt=""className="rounded-[7px] w-full "/>
                <div className="absolute w-full h-full flex flex-col items-center justify-center bottom-0 left-0  bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-40">
                  <div className="p-4 text-white">
                    <h1 className="text-[15px]">3. Meeting Jane <span className="text-[12px]">|   34mins</span></h1>
                    <p className="mb-2 text-[12px] mt-[16px]">Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
                    <Link className="text-white inline-block cursor-pointer font-medium py-[10px] px-[14px] rounded-full bg-[#E13C52] hover:bg-[#f46174]">Watch Now</Link>
                  </div>
                </div>
              </div>

      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
