import React, { useState } from "react";
import HeaderComponent from "../Header/HeaderComponent";
import CorporatePic1 from "../../infrastructure/assets/images/corporate-pic1.png";
import CorporatePic2 from "../../infrastructure/assets/images/corporate-pic2.png";
import FlaskLight from "../../infrastructure/assets/images/flask_light.png";
import FinalBarComponent from "../FinalBar/FinalBarComponent";
import { Row, Col } from "react-bootstrap";
import Modal from "../../infrastructure/components/Modal";
import { MdOutlineCancel } from "react-icons/md";

export const CorporateComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ overflow: "hidden" }}>
      {show ? (
        <Modal setShow={setShow}>
          {" "}
          <h3
            style={{
              textAlign: "center",
              padding: "1rem",
              color: "#a3238e",
              fontWeight: "bold",
            }}
          >
            Are you sure?
          </h3>
          <p
            style={{
              textAlign: "center",
              position: "absolute",
              top: "4rem",
              left: "2rem",
              fontWeight: "bold",
            }}
          >
            You Want to leave the site?
          </p>
          <div className="d-flex justify-content-between align-items-center mx-5">
            <button
              style={{
                position: "absolute",
                top: "8rem",
                left: "2rem",
                borderRadius: "18px",
                height: "2rem",
                width: "4rem",
                fontSize: "11px",
                border: "1.5px solid black",
                background: "white",
                fontWeight: "bold",
              }}
            >
              YES
            </button>
            <button
              style={{
                position: "absolute",
                top: "8rem",
                left: "11rem",
                borderRadius: "18px",
                height: "2rem",
                width: "4rem",
                fontSize: "11px",
                border: "1.5px solid black",
                background: "white",
                fontWeight: "bold",
              }}
              onClick={() => setShow(false)}
            >
              NO
            </button>
          </div>
        </Modal>
      ) : null}
      <div className="maindiv">
        <MdOutlineCancel
          type="button"
          className="cancel-button"
          onClick={() => setShow((p) => !p)}
        />
        <HeaderComponent />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1.5,
              padding: 10,
            }}
          >
            <h2 className="corporateBlock1">State of the Art</h2>
            <h2 className="corporateBlock2">laboratory in Banglore</h2>
            <div className="d-block corporatemaindiv">
              <h6 style={{ textAlign: "justify", lineHeight: "30px" }}>
                Recognized By DSIR, Department of Biotechnologies, Department of
                Atomic Energy, Government of India. BioOrganics lab is the only
                laboratory in the country to have a unique collaborative
                agreement with the Department of Atomic Energy's Heavy Water
                Board for supply of Deuterium Oxide for Research and Development
                in the Non-nuclear use of Heavy Water
              </h6>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 2,
              // backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="corporatimage1" src={CorporatePic1} />
          </div>
        </div>
      </div>

      <div className="seconddiv">
        <img className="corporatimage2" src={CorporatePic2} />
        <h6 className="corporateabouttext">About</h6>
        <h2 className="corporateourstorytext">Our Story</h2>
        <div className="corporateseconddiv1st">
          <h6>
            BioOrganics is a leading manufacture of speciality research of
            chemicals for
          </h6>
          <h6>
            pharmaceutical and biomedical research. The company was founded by
            Dr.
          </h6>
          <h6>
            Vijaykumar Hulikal, a distinguished scientist in the year 2001.
          </h6>
        </div>
        <div className="corporateseconddiv2nd">
          <h6>
            BioOrganics was conceptualized with Dr.Hulikal's vision of a
            seamless
          </h6>
          <h6>
            amalgamation of academia and industry for providing medicinal
            chemistry
          </h6>
          <h6>and organic synthetic services of the highest quality.</h6>
        </div>
        <div className="corporateseconddiv3rd">
          <h6>
            The company has developed technologies for the manufacturers of
            Stable
          </h6>
          <h6>
            Isotope Labeled products, Referencen Standards, Metabolites,
            Impurities and
          </h6>
          <h6>
            Glucuronides among its vast array of 20,000+ products. BioOrganics
            also
          </h6>
          <h6>provides custom synthesis of organic compounds.</h6>
        </div>
        <div className="corporateseconddiv4th">
          <h6>
            BioOrganics has championed the field of Deuterium Labelling
            Chemistry.
          </h6>
        </div>
        <img className="flask1" src={FlaskLight} />
        <img className="flask2" src={FlaskLight} />
      </div>
      <div className="thirddiv"></div>
      <div className="fourthdiv">
        <h2 className="corporativefourthh2">Why BioOrganics</h2>
        <Row className="align-center rowstyle">
          <Col className="col1style">
            <div className="col1div2 text-center">
              <h5 className="h5all">Subject Matter &nbsp; Expertise</h5>
            </div>
            <div className="coldiv">
              <p className="div1para">
                BioOrganics is led by an acclaimed scientist with a large term
                of organic chemists. Our chemists have year of experience in the
                exploratory project research and collaborative R & D synthesis
                applied in pharmaceutical and chemical industries
              </p>
            </div>
          </Col>
          <Col className="col1style">
            <div className="col1div2 text-center">
              <h5 className="h5all">State of the Art Laboratory</h5>
            </div>
            <div className="coldiv text-center">
              <p className="div1para">
                BioOrganics is duly recognized for its research activities by
                various Department of the Government of India, including:
                Department of Scientific and Industrial Research (DSIR)
                Department of Biotechnology (DBT) Department of Atomic Energy
                (DAE) - Heavy Water Board (HWB){" "}
              </p>
            </div>
          </Col>
          <Col className="col1style">
            <div className="col1div2 text-center">
              <h5 className="h5all">Customer Service</h5>
            </div>
            <div className="coldiv text-center">
              <p className="div1para">
                Our customer service team is led by technical team of expert.
                Organic Chemists. We offer quick and comprehensive response in
                case of sale queries and off replacement guarantee in case of
                any issues.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <FinalBarComponent />
    </div>
  );
};

export default CorporateComponent;
