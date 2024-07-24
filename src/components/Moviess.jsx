import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = '891f350749590453ec1820b27668b67d';
const movie_id = '551';

const Moviess = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images`, {
          params: { api_key },
        });
        setImages(imagesResponse.data.backdrops);

        const videosResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, {
          params: { api_key },
        });
        setVideos(videosResponse.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>

      <h2>Images</h2>
      <div>
        {images.length > 0 ? (
          images.map((image) => (
            <img
              key={image.file_path}
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt="Movie backdrop"
              style={{ width: '200px', margin: '10px' }}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <h2>Videos</h2>
      <div>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id}>
              <p>{video.name}</p>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default Moviess;
