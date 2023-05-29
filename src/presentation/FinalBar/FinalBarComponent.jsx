import React from "react";
import { Row, Col } from "react-bootstrap";
import BioOrganicLogo from "../../infrastructure/assets/images/translogo.png";
import Location from "../../infrastructure/assets/images/location2.jpg";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import PurpleImage from "../../infrastructure/assets/images/purple_circle.png";

export const FinalBarComponent = () => {
  return (
    <div className="fifthdiv">
      <image className="pcircle" src={PurpleImage} />
      <Row className="rowstyle">
        <Col>
          <p className="text-white">
            <img className="bio-logo me-2" src={BioOrganicLogo} />
            <span className="bio-text">BioOrganics</span>
          </p>
        </Col>
        <Col className="colstyle align-item-center">
          <div>
            <p className="phone">Phone</p>
            <p className="text-white p2-phone">+91 7259396247</p>
          </div>
          <div>
            <p className="email">Email</p>
            <p className="text-white p2-email" style={{ fontSize: "13px" }}>
              Example@gmail.com
            </p>
          </div>
          <div>
            <p className="location">Location</p>
            <p className="text-white p2-location" style={{ fontSize: "13px" }}>
              Banglore
            </p>
          </div>
        </Col>
        <Col>
          <p className="colstyle">Locate Us</p>
          <img className="locationimg" src={Location} />
        </Col>
      </Row>
      <hr className="text-white" />
      <p className="copyrights">
        All Copyrights <AiOutlineCopyrightCircle /> Reserved
      </p>
    </div>
  );
};

export default FinalBarComponent;
