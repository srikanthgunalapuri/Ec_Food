import React from "react";
import OffersImage1 from "../images/banner-1.jpg";
import OffersImage2 from "../images/banner-2.jpg";

const Offers = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* First Card */}
        <div className="col-md-6">
          <div className="offer-card">
            <img src={OffersImage1} alt="Vegetables" />
            <div className="offer-content">
              <h5 className="offer-title">Special Offer</h5>
              <p className="offer-description">Upto 45% Off</p>
              <a
                href="#"
                className="btn btn-check-out text-white bg-success rounded-0 px-8"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-6">
          <div className="offer-card">
            <img src={OffersImage2} alt="Oranges" />
            <div className="offer-content">
              <h5 className="offer-title">Limited Offer</h5>
              <p className="offer-description">Upto 50% Off</p>
              <a
                href="#"
                className="btn btn-check-out text-white bg-success rounded-0 px-8"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

