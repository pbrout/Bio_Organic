import React, { useState } from "react";
import BioOrganicLogo from "../../infrastructure/assets/images/bio-logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const [search, setSearch] = useState("");

  return (
    <div className="header-box d-flex justify-content-between align-items-center mx-5">
      <div className="d-flex align-items-center">
        <img className="bio-logo me-1" src={BioOrganicLogo} />
        <span
          style={{
            fontSize: "35px",
            color: "#a3238e",
          }}
        >
          BioOrganics
        </span>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex search-container" style={{ marginLeft: "90px" }}>
          <AiOutlineQuestionCircle size={28} className="info-btn" />
          <input
            className="search-box"
            placeholder="Enter CAT#,CAS#,Chemical Name or Mol Formula"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch size={25} className="search-btn" />
        </div>
        <div className="d-flex flex-row align-items-center">
          <NavLink
            to="/"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active header-btn mx-1"
                : "header-btn mx-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/corporate"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active header-btn mx-1"
                : "header-btn mx-1"
            }
          >
            Corporate
          </NavLink>
          <NavLink
            to="/services"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active header-btn mx-1"
                : "header-btn mx-1"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active header-btn mx-1"
                : "header-btn mx-1"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/products"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active header-btn mx-1"
                : "header-btn mx-1"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/login"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active header-btn mx-1"
                : "header-btn mx-1"
            }
          >
            Log In
          </NavLink>

          <NavLink
            to="/enquirylist"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "header-btn-enq mx-1"
                : "header-btn-enq mx-1"
            }
          >
            Enquiry List
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;

// <Button onClick={() => navigator("")} className={active?.toLowerCase() === ""  ? "header-btn mx-1 active" : "header-btn mx-1"}> Home </Button>
//         <Button onClick={() => navigator("corporate")} className={ active?.toLowerCase() === 'corporate' ? 'header-btn mx-1 active' : 'header-btn mx-1' }>Corporate</Button>
//         <button onClick={() => navigator("services")} className={ active?.toLowerCase() === 'services' ? 'header-btn mx-1 active' : 'header-btn mx-1' } >Services</button>
//         <button className={ active === 'contacts' ? 'header-btn mx-1 btnstyle active' : 'header-btn mx-1 btnstyle' }>Contacts</button>
//         <button className={ active === 'products' ? 'header-btn mx-1 btnstyle active' : 'header-btn mx-1 btnstyle' }>Products</button>
//         <button className='header-btn-enq mx-1'>Enquiry List</button>
