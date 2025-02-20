import React from "react";
import Category1 from "../images/category-1.png";
import Category2 from "../images/category-2.png";
import Category3 from "../images/category-3.png";
import Category4 from "../images/category-4.png";

const Categories = () => {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center"
        style={{ padding: "20px 0px" }}
      >
        <h1>
          Shop By <span className="text-success">Category</span>
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {/* First Category */}
        <div className="col">
          <div className="card p-4 text-center">
            <h2>Vegetables</h2>
            <p>upto 50% off</p>
            <div>
              <img src={Category1} alt="Vegetables" style={{ width: "100%" }} />
            </div>
            <button className="btn btn-success rounded-0">Shop Now</button>
          </div>
        </div>

        {/* Second Category */}
        <div className="col">
          <div className="card p-4 text-center">
            <h2>Juice</h2>
            <p>upto 44% off</p>
            <div>
              <img src={Category2} alt="Juice" style={{ width: "100%" }} />
            </div>
            <button className="btn btn-success rounded-0">Shop Now</button>
          </div>
        </div>

        {/* Third Category */}
        <div className="col">
          <div className="card p-4 text-center">
            <h2>Meat</h2>
            <p>upto 35% off</p>
            <div>
              <img src={Category3} alt="Meat" style={{ width: "100%" }} />
            </div>
            <button className="btn btn-success rounded-0">Shop Now</button>
          </div>
        </div>

        {/* Fourth Category */}
        <div className="col">
          <div className="card p-4 text-center">
            <h2>Fruit</h2>
            <p>upto 12% off</p>
            <div>
              <img src={Category4} alt="Fruit" style={{ width: "100%" }} />
            </div>
            <button className="btn btn-success rounded-0">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
