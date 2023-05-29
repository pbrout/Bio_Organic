import React from "react";
import SheImage from "../../infrastructure/assets/images/she.png";
import She2Image from "../../infrastructure/assets/images/she2.png";
import SolutionImage from "../../infrastructure/assets/images/solution.png";
import HeaderComponent from "../Header/HeaderComponent";
import FinalBarComponent from "../FinalBar/FinalBarComponent";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import Modal from "../../infrastructure/components/Modal";

export const HomeComponent = () => {
  const [show, setShow] = useState(false);
  // const [isBlurred, setBlurred] = useState(false);
  // const makeBlur1 = () => {
  //   setBlurred(true);
  // };

  return (
    <div className="mainContainer">
      {show ? (
        <Modal setShow={setShow}>
          
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
        <div className="closeIcon">
          <MdOutlineCancel
            type="button"
            className="cancel-button"
            onClick={() => setShow((p) => !p)}
            style={{ marginRight: "100px" }}
          />
        </div>
        <HeaderComponent />
        <div>
          <h2 className="h21">Trusted Manufacturer of</h2>
          <h2 className="h22">Speciality Research</h2>
          <h2 className="h22">Chemicals</h2>
          <h6 className="h61">Reference Standards, Impurities, Metabolities</h6>
          <h6 className="h61">Glucuronides and Isotope Labeled Compounds</h6>
          <button className="btn">Get in Touch</button>
          <img className="sheimage" src={SheImage} />
        </div>
      </div>
      <div className="seconddiv">
        <h6 className="h61">Our</h6>
        <h2 className="h23">Latest Products</h2>
        <button className="btn2">Show More</button>
        <img className="she2image" src={She2Image} />
        <h6 className="h62">About</h6>
        <h2 className="h24">Sub Heading</h2>
        <button className="btn3">Know More</button>
        <img className="sol" src={SolutionImage} />
      </div>
      <div className="thirddiv">
        <h5 className="h51">Area of expertise</h5>
        <h2 className="h25">product categories</h2>
        <button className="btn4">Know More</button>
      </div>
      <div className="fourthdiv">
        <h2 className="h25">Certification of accreditations</h2>
      </div>
      <div>
        <FinalBarComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
