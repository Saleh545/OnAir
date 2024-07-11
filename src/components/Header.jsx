import React, { useState } from "react";
import onair from "../assets/onair.svg";
import avatar from "../assets/avatar.svg";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { Twirl as Hamburger } from "hamburger-react";

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),},
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "9ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: "6ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

const SearchAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-[#111111!important]">
        <Toolbar className="bg-[#111111!important] overflow-hidden pl-[00px!important]">
          <Search className="w-[100%!important]">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
const Header = () => {
  const [isMusicMenuOpen, setIsMusicMenuOpen] = useState(false);

  const toggleMusicMenu = () => {
    setIsMusicMenuOpen(!isMusicMenuOpen);
  };
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
    setOpen(!open);
  };
  return (
    <div className="bg-[#111111!important] px-3 xl:px-14 ">
      <div className="container w-full mx-auto">
        <header className="flex justify-between items-center pt-5 pb-4 w-full">
          <div className="left flex items-center">
            <div className="logo">
              <Link to="/" className="inline-block">
                <img src={onair} alt="On Air" />
              </Link>
            </div>

            <div
              className={
                open
                  ? "resp-bar flex z-30  flex-col  absolute top-0  right-0 items-center content-center h-screen w-full  "
                  : "resp-bar-close hidden  "
              }
            >
              <div className="nav-menu bg-[#111111!important] h-screen w-full absolute top-20 left-0 pl-[22px]">
                <div className="block md:hidden ">
                  <SearchAppBar />
                </div>
                <nav className="  mt-6 mb-12 items-center flex md:hidden  text-left max-w-full ">
                  <ul className="relative flex flex-col gap-10 ">
                    <li>
                      <Link
                        to="/movies"
                        className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                      >
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/series"
                        className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                      >
                        Series
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/channels"
                        className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                      >
                        Channels
                      </Link>
                    </li>
                    <l i className="relative">
                      <button
                        onClick={toggleMusicMenu}
                        className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                      >
                        Music
                      </button>
                      {isMusicMenuOpen && (
                        <ul className="absolute z-20 bg-[#232229] lg:pl-4 lg:pr-4 pl-5 pr-5 mt-8 text-left rounded-xl">
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Classical
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Entertainment
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block text-white border-y-gray-700 py-2 text-[19px]">
                              Free-to-Air (Trial)
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Fun
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Gospel
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Indian
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Jazz
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Kids
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Live cams
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                              Movies
                            </Link>
                          </li>
                        </ul>
                      )}
                    </l>
                  </ul>
                </nav>
                <Link to="/login" onClick={toggleMenu} className="flex block md:hidden items-center text-white gap-2 pl-[16px] inline-block">
                  <img className="max-w-full" src={avatar} alt="Avatar" />
                  Sign in
                </Link>
              </div>
            </div>
            <nav className="flex items-center hidden md:block text-left max-w-full ml-[10px] lg:ml-[56px]">
              <ul className="flex relative items-center">
                <li>
                  <Link
                    to="/movies"
                    className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/series"
                    className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                  >
                    Series
                  </Link>
                </li>
                <li>
                  <Link
                    to="/channels"
                    className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                  >
                    Channels
                  </Link>
                </li>
                <l i className="relative">
                  <button
                    onClick={toggleMusicMenu}
                    className="text-white px-[20px] py-[10px] lg:px-[34px] lg:py-[10px]  py-2 rounded-3xl hover:bg-[#E13C52]"
                  >
                    Music
                  </button>
                  {isMusicMenuOpen && (
                    <ul className="absolute bg-[#232229] lg:pl-4 lg:pr-4 pl-5 pr-5 mt-8 text-left rounded-xl z-20">
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Classical
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block text-white border-y-gray-700 py-2 text-[19px]">
                          Free-to-Air (Trial)
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Fun
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Gospel
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Indian
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Jazz
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Kids
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Live cams
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:text-[#E90000] border-b block pr-14 text-white border-y-gray-700 py-2 text-[19px]">
                          Movies
                        </Link>
                      </li>
                    </ul>
                  )}
                </l>
              </ul>
            </nav>
          </div>
          <div className="right flex items-center gap-2 overflow-hidden">
            <div className="hidden md:block">
              <SearchAppBar />
            </div>
            <div className="block md:hidden text-white z-50 ">
              <Hamburger toggled={open} toggle={toggleMenu} />
            </div>

            <Link 
              to="/login"
              className=" hidden md:flex items-center text-white gap-2 inline-block"
            >
              <img className="max-w-full" src={avatar} alt="Avatar" />
              Sign in
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
