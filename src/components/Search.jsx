import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchApp = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
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

const API_URL = (search) => {
  return `https://www.omdbapi.com/?s=${search}&apikey=73a748a5`;
};

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchResultsRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL(search));
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.Search || []);
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleFocus = () => {
    setShowResults(true);
  };

  const handleBlur = (e) => {
    if (!searchResultsRef.current.contains(e.relatedTarget)) {
      setShowResults(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-[#111111!important]">
        <Toolbar className="bg-[#111111!important] overflow-hidden pl-[00px!important]">
          <SearchApp className="w-[100%!important]">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSubmit}>
              <StyledInputBase
                placeholder="Ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </form>
          </SearchApp>
        </Toolbar>
      </AppBar>
      {showResults && movies.length > 0 && (
        <div
          ref={searchResultsRef}
          className="search-results absolute right-10px bg-[#1c1c1c] p-3 lg:top-[100px] z-20 top-[48px]"
        >
          <h3 className="text-white text-[24px] font-bold text-center">Search Results:</h3>
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID} className="mt-3 hover:bg-[#3c3b3b]">
            <Link
  className="text-white flex items-center"
  to={`/movie/${movie.imdbID}`}
  onClick={() => setShowResults(false)}
>
  {movie.Poster !== "N/A" ? (
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="w-10 h-auto mr-2"
    />
  ) : (
    <div className="w-10 h-auto mr-2">Poster not available</div>
  )}
  <span>{movie.Title}</span>
</Link>

              </li>
            ))}
          </ul>
        </div>
      )}
    </Box>
  );
};

export default Search;
