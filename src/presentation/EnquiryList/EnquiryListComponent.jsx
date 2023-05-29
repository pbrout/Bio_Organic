import React, { useState } from "react";
import HeaderComponent from "../Header/HeaderComponent";
import Scrollbar from "../../infrastructure/assets/images/scrollbar.png";
import { MdOutlineCancel } from "react-icons/md";
import Modal from "../../infrastructure/components/Modal";

export const EnquiryListComponent = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
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
      <div className="main">
        <MdOutlineCancel
          type="button"
          className="cancel-button"
          onClick={() => setShow((p) => !p)}
        />
        <HeaderComponent />
      </div>
      <div className="enquiry-div">
        <h2 className="list-text">Your list is empty</h2>
        <img className="scroll-image" src={Scrollbar} />
        <div className="info-box-style">
          <input className="search-box-enquiry" placeholder="Search Compound" />
          <input className="quality-box" placeholder="Quality in Mg" />
          <label className="checkbox-container">
            <input
              type="checkbox"
              className="check-btn"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="Draft-style">Draft&nbsp;COA</p>
            <span className={`checkmark ${isChecked ? "checked" : ""}`}></span>
          </label>
          <button className="add-button">+ Add</button>
        </div>
        <div className="input-div">
          <h2 className="h1-query">Fill the form to</h2>
          <h2 className="h12-query">get the Quote</h2>
          <input className="input-name-style" placeholder="Full Name" />
          <input className="input-mail-style" placeholder="Mail ID" />
          <input className="input-phone-style" placeholder="Phone Number" />
          <input className="input-company-style" placeholder="Company Name" />
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </>
  );
};

export default EnquiryListComponent;
