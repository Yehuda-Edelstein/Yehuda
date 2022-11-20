import Experience from "./links/experience/Experience";
import Contact from "./links/contact/Contact";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Projects from "./links/projects/Projects";

function Nav() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between">
        <nav className="nav p-2">
          <div className="nav-link">
            <Experience />
          </div>
          <div className="nav-link">
            <Projects />
          </div>
          {/* <div className="nav-link">
            <Contact />
          </div> */}
        </nav>
        <div className="d-flex">
          <ul className="nav p-2 align social-list">
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yehuda-edelstein/"
              >
                <FontAwesomeIcon icon={brands("linkedin")} />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Yehuda-Edelstein"
              >
                <FontAwesomeIcon icon={brands("github")} />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/yehudaedelstein"
              >
                <FontAwesomeIcon icon={brands("twitter")} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
