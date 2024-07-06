import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#191919] pt-[60px] flex pb-[32px]">
        <div className="container xl:px-14 px-3 flex justify-between">
          <div className="left w-[26%]">
            <div className="logo mt-[10px]">
              <Link to="/">
                <img src="./src/assets/footer-logo.svg" alt="" />
              </Link>
            </div>
            <div className="footer-text mt-[95px]">
              <p className="text-[#8D8D8D]">
                Hot Africa, we offer original, exclusive and premium stories.
                Everything you want to watch, anytime, anywhere and as much.
              </p>
            </div>
            <div className="app flex my-[32px] gap-[20px]">
              <Link>
                <img src="./src/assets/store.svg" alt="" />
              </Link>
              <Link>
                <img src="./src/assets/play.svg" alt="" />
              </Link>
            </div>
            <div className="social flex items-center gap-[40px] mb-[54px]">
              <Link className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <FaFacebookSquare className="w-[17px]" />
              </Link>
              <Link className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <TiSocialInstagram className="" />
              </Link>
              <Link className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <FaTwitter />
              </Link>
              <Link className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <IoLogoYoutube />
              </Link>
            </div>
            <div className="terms flex gap-3 mb-[13px]">
              <Link className="text-[#616161]">Terms of use</Link>
              <Link className="text-[#616161]">Privacy Policy</Link>
              <Link className="text-[#616161]">SiteMap</Link>
            </div>
            <div className="text-bottom">
              <p className="text-[#616161]">
                Copyright © 2022 Hot Şüvəlan. All rights reserved.
              </p>
            </div>
          </div>

          <div className="right flex gap-[190px]">
            <div className="card-footer">
              <h4 className="flex text-white mb-[22px] gap-[6.5px]">
                <img src="./src/assets/avatar.svg" alt="" />
                Sign in
              </h4>
              <Link className="text-[#797979] block mb-3"> Personal data</Link>
              <Link className="text-[#797979] block mb-3">Choosing a Plan</Link>
              <Link className="text-[#797979] block mb">Payment</Link>
            </div>

            <div className="card-footer">
              <h4 className="flex text-white mb-[22px] gap-[6.5px]">Movies</h4>
        
              <Link className="text-[#797979] block mb-3">Lock Upp</Link>
              <Link className="text-[#797979] block mb-3">Pavitra Rishta</Link>
              <Link className="text-[#797979] block mb-3">Girgit</Link>
              <Link className="text-[#797979] block mb-3">Hai Taubba Season 3</Link>
              <Link className="text-[#797979] block mb-3">Cartel</Link>
              <Link className="text-[#797979] block mb-3">Crimes And Confessions</Link>
              <Link className="text-[#797979] block mb-3">Puncch Beat Season 2</Link>
              <Link className="text-[#797979] block ">Broken But Beautiful Season 3</Link>
            </div>

            <div className="card-footer">
              <h4 className="flex text-white mb-[22px] gap-[6.5px]">Series</h4>
              <Link className="text-[#797979] block mb-3">X.X.X. Season 2</Link>
              <Link className="text-[#797979] block mb-3">Gandii Baat Season 5</Link>
              <Link className="text-[#797979] block mb-3">Gandii Baat Season 6</Link>
              <Link className="text-[#797979] block mb-3">Broken But Beautiful Season 1</Link>
              <Link className="text-[#797979] block mb-3">Broken But Beautiful Season 2</Link>
              <Link className="text-[#797979] block mb-3">Class Of 2020</Link>
              <Link className="text-[#797979] block mb-3">Bekaaboo Season 1</Link>
              <Link className="text-[#797979] block ">Ragini MMS Returns Season 2</Link>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
