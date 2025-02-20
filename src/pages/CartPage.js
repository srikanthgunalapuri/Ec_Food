// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../ContactContext"; // Access cart from context
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import NavBar from "../components/NavBar";

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart(); // Access cart and functions from context

//   // Calculate total before tax
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   // Calculate GST (10%)
//   const gst = (subtotal * 0.1).toFixed(2);

//   // Apply a discount if any (e.g., 5% discount)
//   const discount = (subtotal * 0.05).toFixed(2);

//   // Final total calculation
//   const total = (subtotal + parseFloat(gst) - parseFloat(discount)).toFixed(2);

//   return (
//     <>
//     <Header />
//     <NavBar />
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Shopping <span className="text-success">Cart</span> </h1>

//       <div className="row">
//         <div className="col-lg-8">
//           <div className="table-responsive">
//             <table className="table table-bordered align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Product</th>
//                   <th>Quantity</th>
//                   <th>Price</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.length === 0 ? (
//                   <tr>
//                     <td colSpan="4" className="text-center">
//                       No items in the cart.
//                     </td>
//                   </tr>
//                 ) : (
//                   cart.map((item, index) => (
//                     <tr key={index}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "50px", height: "50px", objectFit: "cover" }}
//                           className="me-3"
//                         />
//                         {item.name}
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-secondary btn-sm"
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)} // Decrease quantity
//                           disabled={item.quantity === 1} // Disable if quantity is 1
//                         >
//                           -
//                         </button>
//                         <span className="mx-2">{item.quantity}</span>
//                         <button
//                           className="btn btn-secondary btn-sm"
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)} // Increase quantity
//                         >
//                           +
//                         </button>
//                       </td>
//                       <td>${(item.price * item.quantity).toFixed(2)}</td>
//                       <td>
//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => removeFromCart(item.id)} // Remove item from cart
//                         >
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="col-lg-4">
//           <div className="card">
//             <div className="card-header bg-primary text-white">
//               <h5 className="card-title mb-0">Order Summary</h5>
//             </div>
//             <div className="card-body">
//               <div className="d-flex justify-content-between mb-3">
//                 <span>Subtotal:</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="d-flex justify-content-between mb-3">
//                 <span>GST (10%):</span>
//                 <span>${gst}</span>
//               </div>
//               <div className="d-flex justify-content-between mb-3">
//                 <span>Discount (5%):</span>
//                 <span>-${discount}</span>
//               </div>
//               <div className="d-flex justify-content-between fw-bold">
//                 <span>Total:</span>
//                 <span>${total}</span>
//               </div>
//               <hr />
//               <button
//                 className="btn btn-success w-100"
//                 id="checkoutButton"
//                 disabled={cart.length === 0} // Disable if the cart is empty
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Link to="/">
//         <button className="py-2 px-4" style={{border:"none",color:"white", backgroundColor:"red"}}>Back</button>
//         </Link>
       
//       </div>
//     </div>
//     <Footer />
//     </>
    
//   );
// };

// export default CartPage;


import React from "react";

import { Link } from "react-router-dom";
import { useCart } from "../ContactContext";// Access cart from context
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Access cart and functions from context

  // Calculate total before tax
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calculate GST (10%)
  const gst = (subtotal * 0.1).toFixed(2);

  // Apply a discount if any (e.g., 5% discount)
  const discount = (subtotal * 0.05).toFixed(2);

  // Final total calculation
  const total = (subtotal + parseFloat(gst) - parseFloat(discount)).toFixed(2);

  return (
    <>
      <Header />
      <NavBar />
      <div className="cart-container container  my-5">
        <h1 className="text-center mb-4">
          Shopping <span className="text-success">Cart</span>
        </h1>

        <div className="row">
          {/* Left Section: Cart Items */}
          <div className="col-lg-8">
            {cart.length === 0 ? (
              <div className="text-center p-5">
                <h4>Your cart is empty!</h4>
                <Link to="/" className="btn btn-primary mt-3">
                  Shop Now
                </Link>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  className="d-flex align-items-center justify-content-between border p-3 mb-3 rounded"
                  key={index}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      className="me-3 rounded"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p className="text-muted mb-1">₹{item.price.toFixed(2)}</p>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="cart-btn btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="cart-btn btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="cart-btn btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Section: Price Details */}
          <div className="col-lg-4">
            <div className="cart-details-container card shadow-sm">
              <div className="cart-details-header card-header bg-primary text-white">
                <h5 className="card-title mb-0">Price Details</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Discount (5%):</span>
                  <span className="text-success">-₹{discount}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges:</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>GST (10%):</span>
                  <span>₹{gst}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold border-top pt-3">
                  <span>Total Amount:</span>
                  <span>₹{total}</span>
                </div>
                <hr />
                <button
                  className="cart-btn btn btn-success w-100"
                  disabled={cart.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-end mt-4">
          <Link to="/">
            <button
              className="cart-btn py-2 px-4"
              style={{ border: "none", color: "white", backgroundColor: "red" }}
            >
              Back
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;

