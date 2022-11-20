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
        Contact
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <form
            className="contact-form"
            method="post"
            action="https://forms.un-static.com/forms/944b96c01e467a99972dd0f62e993d2c5e1c56c0"
          >
            <div className="contact-form-field d-grid">
              <span>[Email]</span>
              <input type="text" />
            </div>
            <div className="contact-form-field d-grid">
              <span>[Message]</span>
              <textarea></textarea>
            </div>
            <button type="submit">Send</button>
          </form> */}
          <p>
            Message me on Twitter, LinkedIn or send an email to
            yeauthor@gmail.com
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Experience;
