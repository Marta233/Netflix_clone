import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/muvie/top_rated")
// api.themoviedb.org/3//muvie/top_rated
// export default instance;
export default instance;

// https://api.themoviedb.org/3
