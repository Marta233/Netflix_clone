import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
              alt="Netflix Logo"
            />
          </a>
          <img
            className="nav__avater"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="avater logo"
          />
          <form className="d-flex ser nav__avater searchs">
            <SearchIcon className="search-icone" />
            <input
              className="form-control me-2 search1"
              type="search"
              placeholder="      Search"
              aria-label="Search"
            />
          </form>
          <NotificationsOutlinedIcon className="nav__avater  notfication" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tv Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browth By Languadge
                </a>
              </li>
            </ul>

            {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DVD
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  List
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      {/* <img
        classNameNameNameNameNameName="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        classNameNameNameNameNameName="nav__avater"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="avater logo"
      /> */}
    </div>
  );
}

export default Nav;
