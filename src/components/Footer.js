import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bd-footer py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-3 text-center text-lg-start">
            <Link
              className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              to="/"
              aria-label="Bootstrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-basket2-fill text-success"
                viewBox="0 0 16 16"
              >
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
              </svg>
              <span className="fs-5 ms-2">Grocery</span>
            </Link>
            <ul className="list-unstyled small text-muted mt-3">
              <li>Designed and built with all the love in the world.</li>
              <li>Code licensed.</li>
              <li>Currently v5.0.2.</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-3 text-center text-lg-start">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Getting started
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Starter template
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Webpack
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Parcel
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-3 text-center text-lg-start">
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Bootstrap 5
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Bootstrap 4
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Icons
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  RFS
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-3 text-center text-lg-start">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Issues
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Discussions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Corporate sponsors
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted text-decoration-none">
                  Stack Overflow
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
