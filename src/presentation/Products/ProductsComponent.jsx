import React, { useState } from "react";
import HeaderComponent from "../Header/HeaderComponent";
import FinalBarComponent from "../FinalBar/FinalBarComponent";
import { IoFilterSharp } from "react-icons/io5";
import Modal from "../../infrastructure/components/Modal";
import { MdOutlineCancel } from "react-icons/md";

export const ProductsComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
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
      <div>
        <MdOutlineCancel
          type="button"
          className="cancel-button"
          onClick={() => setShow((p) => !p)}
          style={{ marginRight: "100px" }}
        />
      </div>
      <HeaderComponent />
      <div className="search-results-box justify-content-md-center">
        <IoFilterSharp size={10} className="filter-icon" />
        <div className="vl" />
        <div>
          <h2 className="h2">Search Results</h2>
          <h3 className="h3">"20" results found for "Acetaminophen"</h3>{" "}
        </div>
      </div>{" "}
      <div className="related-products-div">
        <h1 className="heading-style">Related Products</h1>
      </div>
      <div className="third-div-products "></div>
      <FinalBarComponent />
    </div>
  );
};

export default ProductsComponent;
