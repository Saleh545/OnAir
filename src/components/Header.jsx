import React from 'react';
import onair from '../assets/onair.svg';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '8ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='bg-[#111111!important]'>
        <Toolbar className='bg-[#111111!important] overflow-hidden'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// Header bileşeni
const Header = () => {
  return (
    <div className="bg-[#111111!important] px-14 md:px-4 ">
      <div className="container w-full">
        <header className="flex justify-between items-center pt-5 pb-4">
          <div className="left flex items-center">
            <div className="logo">
              <Link to="/" className="inline-block">
                <img src={onair} alt="On Air" />
              </Link>
            </div>
            <nav className="flex gap-11 text-left max-w-full ml-[56px]">
              <Link to="/movies" className="text-white">
                Movies
              </Link>
              <Link to="/series" className="text-white">
                Series
              </Link>
              <Link to="/channels" className="text-white">
                Channels
              </Link>
              <Link to="/music" className="text-white">
                Music
              </Link>
              
            </nav>

          </div>
          <div className="right flex items-center gap-2">
            <SearchAppBar />
            <Link className="flex items-center text-white gap-2 inline-block">
                <img className="max-w-full" src="./src/assets/avatar.svg"alt="Avatar"/>
              Sign in
            </Link>
          </div>
          
        </header>
      </div>
    </div>
  );
};

export default Header;
