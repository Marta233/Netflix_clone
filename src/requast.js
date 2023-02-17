// const API_KEY = "780c98ddf017dccd9298b3225b96e2e1";
const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  featchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feachTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  feachActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  feachComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  feachHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  feachRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  feachDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
// /trending/all/week?api_key=780c98ddf017dccd9298b3225b96e2e1&language=en-US
