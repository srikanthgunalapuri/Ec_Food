import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="my-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    className="me-3"
                  />
                  <span>{item.name}</span>
                </div>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h5>Total: ${total.toFixed(2)}</h5>
        </>
      )}
    </div>
  );
};

export default Cart;
