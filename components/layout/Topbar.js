import Link from "next/link";
import React from "react";

const Topbar = ({ scroll }) => {
  return (
    <div className={`tg-header__top ${scroll ? "d-none" : "d-block"}`}>
      <div className="container custom-container">
        <div className="row">
          <div className="col-md-6">
            <ul className="tg-header__top-info list-wrap">
              <li>
                <i className="flaticon-pin" /> <span>Islamabad, Pakistan</span>
              </li>
              <li>
                <i className="flaticon-email" />{" "}
                <Link href="mailto:info@gmail.com">
                  thedigitalcoaching@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="tg-header__top-social list-wrap">
              <li>Follow Us On :</li>
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
