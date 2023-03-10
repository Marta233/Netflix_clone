import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [titlename, settitlename] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl); // baseURLfromaxios + featchUrlFromapp.js(from requast)
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    handleMouseover(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleMouseover = (movie) => {
    //  titlename(movie.title || movie.name || movie.original_name)

    settitlename(movie.title || movie.name || movie.original_name);
  };

  // console.log(movies);
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__poster">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row__posters ${isLargeRow && "row__large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <div style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
export default Row;
