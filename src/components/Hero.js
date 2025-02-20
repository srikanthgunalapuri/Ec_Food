import React from "react";

import heroImage from "../images/home-img.png";
 

const Hero = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={heroImage}
            className="img-fluid rounded"
            alt="Hero"
          />
        </div>
        {/* Text Section */}
        <div className="col-md-6">
          <p className="display-4 text-muted">Fresh and Organic</p>
          <h1>Your Daily Need Products</h1>
          <a
            href="#learn-more"
            className="btn btn-success btn-lg rounded-0 px-8"
            style={{ padding: "7px 30px" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
