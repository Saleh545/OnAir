import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";
import footerlogo from "../assets/footer-logo.svg";
import store from "../assets/store.svg";
import play from "../assets/play.svg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Footer = () => {

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <footer className="bg-[#191919] pt-[60px] flex pb-[32px]">
        <div className="container xl:px-14 px-3 block lg:flex justify-between md:block sm:block">
        <div className="  xl:hidden  md:hidden  sm:block bg-[#191919]">
      <Accordion className="bg-[#191919]">
        <AccordionSummary className="bg-[#191919]"  expandIcon={<ExpandMoreIcon />}aria-controls="panel1-content"id="panel1-header">
        <h4 className="flex text-white mb-[22px] gap-[6.5px]"><img src="./src/assets/avatar.svg" alt="" />Sign in</h4>
        </AccordionSummary>
        <AccordionDetails className="bg-[#191919]">
        <Link className="text-[#797979] block mb-3"> Personal data</Link>
              <Link className="text-[#797979] block mb-3" to="/plans" onClick={(handleLinkClick)}>Choosing a Plan</Link>
              <Link className="text-[#797979] block mb" to="/payments" onClick={(handleLinkClick)}>Payment</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#191919]">
        <AccordionSummary className="bg-[#191919]" expandIcon={<ExpandMoreIcon />}aria-controls="panel2-content"id="panel2-header">
        <h4 className="flex text-white mb-[22px] gap-[6.5px]">Movies</h4>
        </AccordionSummary>
        <AccordionDetails className="bg-[#191919]">
        <Link className="text-[#797979] block mb-3">Lock Upp</Link>
              <Link className="text-[#797979] block mb-3">Pavitra Rishta</Link>
              <Link className="text-[#797979] block mb-3">Girgit</Link>
              <Link className="text-[#797979] block mb-3">Hai Taubba Season 3</Link>
              <Link className="text-[#797979] block mb-3">Cartel</Link>
              <Link className="text-[#797979] block mb-3">Crimes And Confessions</Link>
              <Link className="text-[#797979] block mb-3">Puncch Beat Season 2</Link>
              <Link className="text-[#797979] block ">Broken But Beautiful Season 3</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#191919]" >
        <AccordionSummary className="bg-[#191919]" expandIcon={<ExpandMoreIcon />}aria-controls="panel3-content"id="panel3-header">
        <h4 className="flex text-white mb-[22px] gap-[6.5px]">Series</h4>
        </AccordionSummary>
        <AccordionDetails className="bg-[#191919]">
        <Link className="text-[#797979] block mb-3">X.X.X. Season 2</Link>
              <Link className="text-[#797979] block mb-3">Gandii Baat Season 5</Link>
              <Link className="text-[#797979] block mb-3">Gandii Baat Season 6</Link>
              <Link className="text-[#797979] block mb-3">Broken But Beautiful Season 1</Link>
              <Link className="text-[#797979] block mb-3">Broken But Beautiful Season 2</Link>
              <Link className="text-[#797979] block mb-3">Class Of 2020</Link>
              <Link className="text-[#797979] block mb-3">Bekaaboo Season 1</Link>
              <Link className="text-[#797979] block ">Ragini MMS Returns Season 2</Link>
        </AccordionDetails>
      </Accordion>
    </div>
          <div className="left lg:w-[26%]  w-full ">
            <div className="logo mt-[10px] flex justify-center lg:justify-start">
              <Link to="/" onClick={(handleLinkClick)}>
                <img src={footerlogo} alt="" />
              </Link>
            </div>
            <div className="footer-text mt-[95px]">
              <p className="text-[#8D8D8D]">
                Hot Africa, we offer original, exclusive and premium stories.
                Everything you want to watch, anytime, anywhere and as much.
              </p>
            </div>
            <div className="app flex my-[32px] gap-[20px] items-center justify-center lg:justify-start">
              <Link to="https://www.apple.com/" target="blank">
                <img src={store} alt="" />
              </Link>
              <Link  to="https://www.play.google.com/" target="blank">
                <img src={play} alt="" />
              </Link>
            </div>
            <div className="social flex items-center gap-[40px] mb-[54px]  justify-center lg:justify-start ">
              <Link to="https://www.facebook.com/" target="blank" className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <FaFacebookSquare className="w-[17px]" />
              </Link>
              <Link to="https://www.instagram.com/" target="blank" className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <TiSocialInstagram className="" />
              </Link>
              <Link to="https://www.x.com/" target="blank" className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <FaTwitter />
              </Link>
              <Link to="https://www.youtube.com/" target="blank" className="border rounded-full p-[12px] border-[#363636] hover:text-[#55ACE3] hover:border-[#55ACE3] text-white">
                <IoLogoYoutube />
              </Link>
            </div>
            <div className="terms flex gap-3 mb-[13px]  justify-center lg:justify-start">
              <Link className="text-[#616161]">Terms of use</Link>
              <Link className="text-[#616161]">Privacy Policy</Link>
              <Link className="text-[#616161]">SiteMap</Link>
            </div>
            <div className="text-bottom">
              <p className="text-[#616161] flex justify-center lg:justify-start">
                Copyright © 2024  Baku. All rights reserved.
              </p>
            </div>
          </div>

          <div className="right flex gap-[190px] md:mt-6   lg:flex md:flex hidden ">
            <div className="card-footer">
              <h4 className="flex text-white mb-[22px] gap-[6.5px]"><img src="./src/assets/avatar.svg" alt="" />Sign in</h4>
              <Link className="text-[#797979] block mb-3"> Personal data</Link>
              <Link to="/plans" onClick={(handleLinkClick)} className="text-[#797979] block mb-3">Choosing a Plan</Link>
              <Link to="/payments" onClick={(handleLinkClick)} className="text-[#797979] block mb">Payment</Link>
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
    </>
  );
};

export default Footer;
