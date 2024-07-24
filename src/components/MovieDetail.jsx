import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
import { Box, Rating } from '@mui/material';
import { FaEyeSlash, FaInstagram, FaPlus, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiImdb } from 'react-icons/si';
import moviebck from '../assets/moviebck.svg';
import { IoMdShare } from 'react-icons/io';
import Popular from './Popular';

const TMDB_API_KEY = '891f350749590453ec1820b27668b67d';
const TMDB_API_URL = (movieID, type) => `https://api.themoviedb.org/3/movie/${movieID}/${type}?api_key=${TMDB_API_KEY}`;
const TMDB_MOVIE_URL = (movieID) => `https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_API_KEY}`;



const MovieDetail = () => {
  const shareUrl = window.location.href;

  const handleShareClick = (platform) => {
    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case "telegram":
        window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case "instagram":
        navigator.clipboard.writeText(shareUrl);
        alert("URL kopyalandı! Instagram'da paylaşmak için yapıştırabilirsiniz.");
        break;
      default:
        break;
    }}
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();


  
  
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log('Fetching data for imdbID:', imdbID);
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/find/${imdbID}`, {
          params: {
            api_key: TMDB_API_KEY,
            external_source: 'imdb_id'
          },
        });
        console.log('Movie Response:', movieResponse.data);
        
        if (!movieResponse.data.movie_results || movieResponse.data.movie_results.length === 0) {
          console.error('No movie results found for imdbID:', imdbID);
          setMovie(null); // Film bulunamadığında movie state'ini null yap
          return;
        }
        
        const movieID = movieResponse.data.movie_results[0]?.id;
        if (!movieID) {
          console.error('Movie ID not found for imdbID:', imdbID);
          setMovie(null); // movieID bulunamadığında movie state'ini null yap
          return;
        }
      
        const movieInfoResponse = await axios.get(TMDB_MOVIE_URL(movieID));
        console.log('Movie Info Response:', movieInfoResponse.data);
      
        if (!movieInfoResponse.data) {
          console.error('No movie info found for movieID:', movieID);
          setMovie(null); // Film bilgisi bulunamadığında movie state'ini null yap
          return;
        }
        
        setMovie(movieInfoResponse.data);
        const imagesResponse = await axios.get(TMDB_API_URL(movieID, 'images'));
        console.log('Images Response:', imagesResponse.data);
        setImages(imagesResponse.data.backdrops);
      
        const videosResponse = await axios.get(TMDB_API_URL(movieID, 'videos'));
        console.log('Videos Response:', videosResponse.data);
        setVideos(videosResponse.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMovie(null); // Hata durumunda movie state'ini null yap
      } finally {
        setLoading(false);
      }
    };
    
    
    fetchMovieDetails();
  }, [imdbID]);
  
  if (loading) {
    return <Spinner />;
  }

  if (!movie) {
    return (
      <div>
        <Header />
        <div className="container xl:px-14 px-3">
          <h2 className="text-white text-center">Film bilgisi bulunamadı.</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${moviebck})` }}>
        <div className="container xl:px-14 px-3">
          <div className="pt-[20px]">
            <h2 className="text-[32px] text-white font-bold text-center lg:text-left">
              {movie.title} <span className="text-[#A1A1AA] font-light text-[24px]">({movie.release_date.split('-')[0]})</span>
            </h2>
          </div>
          <div className="block lg:flex justify-between mt-7">
            <div className="block lg:flex items-center justify-center gap-7">
              <div className="flex justify-center items-center lg:w-[300px] h-[450px]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="my-5 flex-1 lg:flex lg:justify-between">
                <div>
                  <h4 className="text-white text-[24px]">{movie.title} Movie Information</h4>
                  <p className="text-[#D4D4D8] font-bold mt-[32px] text-[24px]">{movie.overview}</p>
                  <p className="text-white my-[14px] font-bold">Director: <span className="text-[#A1A1AA]">N/A</span></p>
                  <p className="text-white font-bold">Actors: <span className="text-[#A1A1AA]">N/A</span></p>
                  <p className="text-white font-bold my-[14px]">Genre: <span className="text-[#A1A1AA]">{movie.genres.map(genre => genre.name).join(', ')}</span></p>
                  <p className="text-white font-bold flex items-center text-yellow-400 gap-3">
                    <SiImdb className="w-[30px] h-[30px]" /> Rating: {movie.vote_average}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block lg:flex gap-4">
                <p className="text-white hover:bg-[#323235] cursor-pointer text-center py-[8px] px-[16px] bg-[#18181B] rounded-[8px] flex flex-col items-center">
                  <FaEyeSlash className="w-[24px] h-[24px]" /> Unwatch
                </p>
                <p className="text-white mt-3 lg:mt-0 hover:bg-[#323235] cursor-pointer text-center py-[8px] px-[16px] bg-[#18181B] rounded-[8px] flex flex-col items-center">
                  <FaPlus className="w-[24px] h-[24px]" /> Follow
                </p>
              </div>
              <div className="mt-[20px]">
                <h3 className="text-white">Rate this film!</h3>
                <div className="flex justify-center gap-3 bg-[#18181B] py-[16px] inline px-[8px] rounded-xl mt-[20px]">
                  <Box sx={{ '& > legend': { mt: 2 } }}>
                    <Rating
                      name="simple-controlled"
                      className="text-white"
                      value={value}
                      onChange={(event, newValue) => { setValue(newValue); }}
                    />
                  </Box>
                </div>
              </div>
              <div className="mt-[20px]">
      <h3 className="flex items-center gap-3 text-white text-2xl">
        <IoMdShare className="w-6 h-6" /> Share
      </h3>
      <div className="flex gap-3 mt-[10px]">
        <div
          className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"
          onClick={() => handleShareClick("whatsapp")}
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </div>
        <div
          className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"
          onClick={() => handleShareClick("twitter")}
        >
          <FaTwitter className="text-white w-6 h-6" />
        </div>
        <div
          className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"
          onClick={() => handleShareClick("telegram")}
        >
          <FaTelegramPlane className="text-white w-6 h-6" />
        </div>
        <div
          className="py-[8px] px-[16px] bg-[#18181B] rounded-xl cursor-pointer hover:bg-[#323235]"
          onClick={() => handleShareClick("instagram")}
        >
          <FaInstagram className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
            </div>
          </div>

          <div className="my-[40px] flex flex-col items-center w-full">
            {videos.length > 0 ? (
              <iframe
                className="rounded-[15px] w-full h-[80vh]"
                src={`https://www.youtube.com/embed/${videos[0].key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="text-white">No videos available</p>
            )}
          </div>

          <div className="container xl:px-14 px-3 mb-5">
            <h4 className="text-[20px] lg:text-[32px] font-normal leading-9 text-white flex inline mb-4">Photos from the movie</h4>
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              {images.length > 0 ? (
                images.map((image) => (
                  <img
                    key={image.file_path}
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    alt="Movie backdrop"
                    className="w-[300px] h-auto rounded-lg"
                  />
                ))
              ) : (
                <p className="text-white">No images available</p>
              )}
            </div>
          </div>

          <Popular />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
