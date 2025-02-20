// import React from "react";
// import ProductsData from "./ProductsData";
// import Products from "./Products";

// const LatestProducts = () => {
//   return (
//     <div className="container">
//       <div
//         className="d-flex justify-content-center"
//         style={{ padding: "50px 0px 20px 0px" }}
//       >
//         <h1>
//           LATEST <span className="text-success">PRODUCTS</span>
//         </h1>
//       </div>

//       <div className="row row-cols-1 row-cols-md-3 g-4" id="productList">
//         {ProductsData.map((product, index) => (
//           <Products key={product.id || index} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestProducts;

import React from "react";
import ProductsData from "./ProductsData";
import Products from "./Products";

const LatestProducts = ({ addToCart }) => {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center"
        style={{ padding: "50px 0px 20px 0px" }}
      >
        <h1>
          LATEST <span className="text-success">PRODUCTS</span>
        </h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" id="productList">
        {ProductsData.map((product) => (
          <Products key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
