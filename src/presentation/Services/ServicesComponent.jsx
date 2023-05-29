import React, { useState } from "react";
import SheImg from "../../infrastructure/assets/images/chemist_her.png";
import Flask from "../../infrastructure/assets/images/flask_light.png";
import FlaskDark from "../../infrastructure/assets/images/flask_dark.png";
import HeaderComponent from "../Header/HeaderComponent";
import FinalBarComponent from "../FinalBar/FinalBarComponent";
import AnalyticalIcon from "../../infrastructure/assets/icons/analytical service.svg";
import CustomIcon from "../../infrastructure/assets/icons/custom synthesis.svg";
import RDIcon from "../../infrastructure/assets/icons/rnd.svg";
import MoleculeIcon from "../../infrastructure/assets/icons/small molecule.svg";
import FTEIcon from "../../infrastructure/assets/icons/fte service.svg";
import ProcessIcon from "../../infrastructure/assets/icons/process-development.svg";
import Modal from "../../infrastructure/components/Modal";
import { MdOutlineCancel } from "react-icons/md";

export const ServicesComponent = () => {
  const [show, setShow] = useState(false);
  const sidebar = [
    { type: "Custom Synthesis", img: CustomIcon },
    { type: "Analytical Services", img: AnalyticalIcon },
    { type: "Contract R & D", img: RDIcon },
    { type: "Small Molecule Manufacturing", img: MoleculeIcon },
    { type: "FTE Services", img: FTEIcon },
    { type: "Process Development", img: ProcessIcon },
  ];

  const content = [
    {
      type: "Custom Synthesis",
      data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      type: "Analytical Services",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      type: "Contract R & D",
      data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    },
    {
      type: "Small Molecule Manufacturing",
      data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    },
    {
      type: "FTE Services",
      data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    },
    {
      type: "Process Development",
      data: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    },
  ];

  const [info, setInfo] = useState(content[0]);

  const onClickHandler = (item) => {
    const temp = content.find((it) => it.type === item.type);
    setInfo(temp);
  };

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
      <div className="customer-service-div .container-flex">
        <MdOutlineCancel
          type="button"
          className="cancel-button"
          onClick={() => setShow((p) => !p)}
          style={{ marginRight: "100px" }}
        />
        <HeaderComponent />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 2,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{ fontSize: "37px", marginLeft: 100, fontWeight: "bold" }}
            >
              Best in class
            </h1>
            <h2
              style={{
                fontSize: "40px",
                color: "#a3238e",
                fontWeight: "bold",
                marginLeft: 100,
              }}
            >
              Customer Service
            </h2>
            <div
              className="py-3 d-block align-items-left"
              style={{
                width: "60%",
                marginLeft: 100,
              }}
            >
              <p style={{ textAlign: "justify" }}>
                We offer a wide range of Services to meet the diverse needs of
                our clients.Our services are tailored to meet the unique
                requirements of each individual client and help them achieve
                their goals.We strive to exceed expectationsand build long-term
                relationships with our clients.
              </p>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex" }}>
            <img className="sheimg" src={SheImg} />
          </div>
        </div>
      </div>
      <div className="second-div-services">
        <h1
          style={{
            fontWeight: "bold",
            color: "#a3238e",
            paddingLeft: "10rem",
            paddingTop: "0.5rem",
          }}
        >
          We assist our clients in different ways.
        </h1>
        <div className="service-options-box py-3 d-block align-items-center">
          <h2
            style={{
              color: "#a3238e",
              marginLeft: "17rem",
              fontWeight: "bold",
              marginTop: "3rem",
              fontSize: "25px",
            }}
          >
            {info.type}
          </h2>
          <p
            style={{
              marginLeft: "4rem",
              marginTop: "2rem",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            {info.data}
          </p>
        </div>
        <img className="flaskimg1" src={Flask} />
        <img className="flaskimg2" src={Flask} />
        <img className="flaskimg3" src={Flask} />
        <div
          style={{
            marginTop: "11rem",
            backgroundColor: "white",
            width: "15%",
            position: "sticky",
            //padding: "10px 27px 10px 4px",
          }}
        >
          {sidebar.map((item, index) => {
            return (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center"
                onClick={() => onClickHandler(item)}
                style={{
                  backgroundImage:
                    info.type === item.type
                      ? "linear-gradient(to left, #f6913a, #a3238e)"
                      : "",
                  padding: "3px 27px 3px 4px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <img className="icon-img px-2 me-1" src={item.img} />
                <span
                  style={{
                    color: info.type === item.type ? "white" : "#a3238e",
                  }}
                  className="options-box"
                >
                  {item.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="third-div-services .container">
        <h1
          style={{
            fontWeight: "bold",
            color: "#a3238e",
            paddingLeft: "17rem",
            paddingTop: "0.5rem",
          }}
        >
          Have any queries? Write to us
        </h1>
        <img className="flaskimg1" src={FlaskDark} />
        <img className="flaskimg2" src={FlaskDark} />
        <img className="flaskimg3" src={FlaskDark} />
        <form style={{ position: "absolute" }}>
          <input
            className="form-style"
            style={{ height: "3.5rem", marginTop: "4rem" }}
            type="text"
            placeholder="Full Name"
          />
          <input
            className="form-style"
            style={{ height: "3.5rem", marginTop: "8.5rem" }}
            type="text"
            placeholder="Email"
          />
          <input
            className="form-style"
            style={{ height: "13.5rem", marginTop: "13rem" }}
            type="text"
            placeholder="Comment"
          />
          <button className="form-submit-btn" style={{ marginTop: "28rem" }}>
            Submit
          </button>
        </form>
      </div>
      <FinalBarComponent />
    </div>
  );
};

export default ServicesComponent;
