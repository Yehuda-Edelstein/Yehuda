import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Nav.scss";

function Experience() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="link" onClick={handleShow}>
        Experience
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Freelance Software Work</h3>
          <span>[Present]</span>
          <p>
            Develop full-stack applications for clients in exchange for fiat
            currency.
          </p>
          <h3>Software Engineer, TLP Ventures</h3>
          <span>[Jan 2022 - April 2022]</span>
          <p>
            Worked in React.js, TypeScript, and Sass to maintain and improve
            user dashboard.
          </p>
          <h3>Assistant Manager, Schmaltz Brothers</h3>
          <span>[2021 - Jan 2022]</span>
          <p>
            Oversaw production and distribution of edible matter from vehicular
            storefront. I also flipped burgers.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Experience;
