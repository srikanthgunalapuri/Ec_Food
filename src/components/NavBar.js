import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS (for toggler)
import { Link } from "react-router-dom";
import { useCart } from "../ContactContext";

const NavBar = ({ openSidebar }) => {
  const { cartCount } = useCart(); 

  return (
    <nav className="navbar navbar-expand-lg bg-white px-3 px-md-5 shadow-sm sticky-navbar">
      <div className="container-fluid">
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={openSidebar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links (this will be hidden on small screens) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link" style={{ color: "black" }}>
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" style={{ color: "black" }}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pagedeal" className="nav-link" style={{ color: "black" }}>
                Deal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link"  style={{ color: "black" }}>
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/contactdetailes" className="nav-link"  style={{ color: "black" }}>
                Contact Detailes
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Icons Section (this remains visible on all screen sizes) */}
        <div className="d-flex align-items-center gap-3">
         <Link to="/cart" className="text-dark position-relative">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-cart-fill"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
  {cartCount > 0 && (
    <span
      className="badge bg-danger position-absolute"
      style={{
        top: "-5px",
        right: "-10px",
        fontSize: "0.75rem",
        padding: "0.2rem 0.5rem",
        borderRadius: "50%",
      }}
    >
      {cartCount}
    </span>
  )}
</Link>

          <a href="#" className="text-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </a>
          <Link to="/login" className="text-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS (for toggler)
// import { Link } from "react-router-dom";

// const NavBar = ({ openSidebar }) => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-white px-3 px-md-5 shadow-sm">
//       <div className="container-fluid">
//         {/* Navbar Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           onClick={openSidebar}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/" className="nav-link active" style={{ color: "black" }}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/category" className="nav-link" style={{ color: "black" }}>
//                 Category
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/products" className="nav-link" style={{ color: "black" }}>
//                 Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/pagedeal" className="nav-link" style={{ color: "black" }}>
//                 Deal
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link"  style={{ color: "black" }}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Icons Section */}
//         <div className="d-flex align-items-center gap-3">
//           <Link to="/cart" className="text-dark">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-cart-fill"
//               viewBox="0 0 16 16"
//             >
//               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
//             </svg>
//           </Link>
//           <a href="#" className="text-dark">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-heart-fill"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
//               />
//             </svg>
//           </a>
//           <a href="#" className="text-dark">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-person-circle"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//               <path
//                 fillRule="evenodd"
//                 d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

