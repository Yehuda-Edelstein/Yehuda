import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.scss";
import { Link } from "react-router-dom";
import fav from "./../../assets/fav.png";

function Header(props) {
  return (
    <div className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="name">
          <img src={fav} alt="" width="30px" />
          <div>yehuda</div>
        </div>
      </Link>

      <div className="socials">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/yehuda-edelstein/"
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Yehuda-Edelstein"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/yehudaedelstein"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Header;
