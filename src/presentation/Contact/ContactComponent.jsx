import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import Location from "../../infrastructure/assets/images/location2.jpg";
import PurpleCircle from "../../infrastructure/assets/images/purple_circle.png";
import HeaderComponent from "../../presentation/Header/HeaderComponent";

function ContactComponent() {
  return (
    <div className="bg-danger">
      <HeaderComponent />
      <div className="upper-div .container-flex"></div>
      <Container fluid className="containerDiv">
        <Row>
          <Col className="contact-div .container align-item-center">
            <div className="div-col-style">
              <img className="purpleimg" src={PurpleCircle} />
              <p className="p1">
                <BsTelephone size={28} className="mx-4 mb-3" />
                Phone
              </p>
              <p className="text-white">+91 7259396247</p>

              <p className="p1">
                <CiMail size={35} className="mx-4 mb-1" />
                Email
              </p>
              <p className="text-white">Example@gmail.com</p>

              <p className="p1">
                <CiLocationArrow1 size={35} className="mx-4" />
                Location
              </p>
              <p className="text-white flex-container">
                #01,Lorem Ipsum dolor sit amet,
              </p>
              <img className="locationimg" src={Location} />
            </div>
          </Col>
          <Col className="form-div">
            <h1 className="form-text-div" style={{ color: "#434343" }}>
              We'd love to hear from you,
            </h1>
            <h1 className="form-text-div mt-0" style={{ color: "#a3238e" }}>
              Get in touch
            </h1>
            <form>
              <input
                className="form-style"
                style={{
                  height: "3rem",
                  marginTop: "5%",
                  marginBottom: "20px",
                }}
                type="text"
                placeholder="Full Name"
              />
              <input
                className="form-style"
                style={{
                  height: "3rem",
                  marginTop: "13%",
                  marginBottom: "20px",
                }}
                type="text"
                placeholder="Email"
              />
              <input
                className="form-style"
                style={{ height: "13rem", marginTop: "21%" }}
                type="text"
                placeholder="Message"
              />
              <button className="form-submit-btn">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;
