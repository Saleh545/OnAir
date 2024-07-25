import React, { useState } from "react";
import defaultPersonImage from "../assets/profile.png";
import { FaPencil, FaRegFileImage } from "react-icons/fa6";
import {  NavLink } from "react-router-dom";
import { IoIosList } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiImageCircleLine } from "react-icons/ri";


const Sidebar = () => {
  const [personImage, setPersonImage] = useState(defaultPersonImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="min-h-screen  inline lg:flex border-r border-[#616161]" >
        <div className="container xl:px-14 px-3">
          <div className="left  pt-[28px]  block lg:inline-flex flex-col justify-center">
            <div className="person flex flex-col items-center">
              <img src={personImage}alt="Person"className="inline object-cover max-w-[140px] rounded-full max-h-[140px]"style={{ objectFit: "cover", width: "140px", height: "140px" }}/>
              <p className="text-[#929090] mt-[10px]">Syusifzade545@gmail.com</p>
              <div className="bg-[#E13C52] mt-[22px] mb-[22px] hover:bg-[#e26374] inline-block p-[11px] cursor-pointer rounded-full"onClick={() => document.getElementById('fileInput').click()}>
              <RiImageCircleLine  className="text-white text-[25px]" />
              </div>
              <input id="fileInput"type="file"accept="image/*"style={{ display: 'none' }}onChange={handleImageChange}/>
              <p className="text-[#8D8D8D] text-center">Your subscriptions are valid until</p>
              <p className="text-[18px] font-[700] text-white">02.08.2003</p>
            </div>
            <div className="mt-[20px] profile-left">
                <NavLink to="/profile" className="flex items-center rounded-[60px] pt-[10px] pb-[14px] pl-[21px] pr-[24px] items-center gap-[26px] text-[18px] text-white" ><CgProfile />
Profile</NavLink>
                <NavLink to="/plans" className="flex rounded-[60px] pt-[10px] pb-[14px] pl-[21px] pr-[24px] mt-[28px] items-center gap-[26px] text-[18px] text-white"><IoIosList />Plans</NavLink>
                <NavLink to="/payments" className="flex rounded-[60px] pt-[10px] pb-[14px] pl-[21px] pr-[24px] mt-[28px] items-center gap-[26px] text-[18px] text-white"><IoNewspaperOutline />Payments</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
