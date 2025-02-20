import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarActive, closeSidebar }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarActive ? "active" : ""}`}
        onClick={closeSidebar}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: isSidebarActive ? "block" : "none",
          zIndex: 1040,
        }}
      ></div>

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarActive ? "active" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: isSidebarActive ? "0" : "-300px",
          width: "300px",
          height: "100%",
          backgroundColor: "#fff",
          transition: "left 0.3s ease",
          zIndex: 1050,
          boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
        }}
      >
        <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
          <h5 className="mb-0">Menu</h5>
          <button
            className="btn btn-light rounded-circle"
            onClick={closeSidebar}
          >
            &times;
          </button>
        </div>
      
        <ul className="list-unstyled p-3">
          <li>
            <Link to="/" className="text-dark d-block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/category" className="text-dark d-block py-2">
              Category
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-dark d-block py-2">
              Product
            </Link>
          </li>
          <li>
            <Link to="/pagedeal" className="text-dark d-block py-2">
              Deal
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-dark d-block py-2">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/contactdetailes" className="text-dark d-block py-2">
              Contact Detailes
            </Link>
          </li>
        </ul>
     
      </div>
    </>
  );
};

export default Sidebar;




