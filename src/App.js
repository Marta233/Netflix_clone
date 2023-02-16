import "./App.css";
import Row from "./component/Row/Row";
import Banner from "./component/Banner/Banner";
import requests from "./requast";
import React from "react";
import Nav from "./component/Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIC ORIGINAL"
        fetchUrl={requests.featchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Rated Movies" fetchUrl={requests.feachTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.feachActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feachComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feachHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feachRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feachDocumentaries} />
    </div>
  );
}

export default App;
