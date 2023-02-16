import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../requast";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.featchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function trancate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contant">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{trancate(movie.overview, 150)}</h1>
        <div className="banner-fed" />
      </div>
    </header>
  );
}

export default Banner;
