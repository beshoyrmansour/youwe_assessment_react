import React from "react";
// import "../App.scss";
import SearchImg from "../assets/zoeken.png";

export default function MainNavBar() {
  return (
    <div className="bg-info text-light py-2">
      <div className="container navbar navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 font-weight-bold">
          <li className="nav-item">
            <a className="nav-link" href="#">
              ARTIKELEN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              NIEUWS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              EVENEMENTEN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              KWALITEITSHANDBOEK
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-secondary my-2 mx-0 my-sm-0" type="submit">
            <img src={SearchImg} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
