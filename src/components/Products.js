


import React from "react";
import { FaHeart, FaRetweet } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCart } from "../ContactContext";

const Products = ({ product }) => {
  const { addToCart } = useCart(); // Access functions from the context

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card p-4 text-center product-card-container">
        <div className="image-container" style={{ width: "100%", height: "250px", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top img-fluid"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            ${product.price}{" "}
            <span className="originalPrice" style={{ textDecoration: "line-through", color: "gray" }}>
              ${product.originalPrice}
            </span>
          </p>
                          <div className="text-warning py-2">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              {/* Repeat the same for the other star icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-half"
                viewBox="0 0 16 16"
              >
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.770-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
              </svg>
            </div>
          {/* Hover actions container */}
          <ul className="featured__item__pic__hover">
            {/* Link for Heart Icon */}
            <li>
          
                <a href="#">
                  <FaHeart className="fa" />
                </a>
              
            </li>

            {/* Link for Retweet Icon */}
            <li>
           
                <a href="#">
                  <FaRetweet className="fa" />
                </a>
              
            </li>

            {/* Cart Add to Cart Icon */}
            <li>
              <Link style={{listStyleType:'none'}} onClick={() => addToCart(product)}>
                <IoMdCart className="fa" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;

