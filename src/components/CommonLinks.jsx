import settingsImg from "../assets/settings.png";
import React from "react";
import notificationImg from "../assets/notification.png";
import LogoImg from "../assets/Bitmap.png";

function CommonLinks() {
  return (
    <div className=" container">
      <div className=" navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                </a>
                </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              Groepen
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Smoelenboek
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Microblog
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Over ons
            </a>
          </li>
        </ul>

        <button className="btn btn-secondary btn-lg my-2 mx-0 my-sm-0 mr-3" type="submit">
          <img src={settingsImg} alt="" />
        </button>
        <button className="btn btn-secondary btn-lg my-2 mx-0 my-sm-0" type="submit">
          <img src={notificationImg} alt="" />
        </button>
      </div>
      <div className="d-flex py-3 w-100 border-top">
          <div className=""><img src={LogoImg} alt=""/></div>
          <div className="d-flex flex-column">
              <h3 className="m-0"><strong>Cura</strong><span className="font-weight-ligh">Nu</span></h3>
              <span>Zorg en welzijn</span>
          </div>
      </div>   </div>
  );
}

export default CommonLinks;
