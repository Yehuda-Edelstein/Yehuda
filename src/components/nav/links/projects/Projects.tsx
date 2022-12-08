import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Nav.scss";

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="link" onClick={handleShow}>
        Projects
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h3>Dumbnail</h3>
            <div className="project">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://app.dumbnail.com"
              >
                <span>[2022]</span>
                <p>The ultimate memeshot maker</p>
              </a>
            </div>
          </div>
          <div>
            <h3>How To Write A Screenplay</h3>
            <div className="project">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://screenplayrules.com"
              >
                <span>[2022]</span>
                <p>
                  This personal project was built in React.js and explains the
                  dos and don’ts of spec screenwriting in an enjoyable way. Made
                  for rookies.
                </p>
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Projects;
