
// import React, { createContext, useState, useContext, useEffect} from "react";

// export const ContactContext = createContext();
// export const useCart = () => {
//   return useContext(ContactContext);
// };
// export const ContactProvider = ({ children }) => {

//     const [cart, setCart] = useState( () => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   const [tableData, setTableData] = useState([]);
 
//     useEffect(() => {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);


//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setCart((prevCart) => {
//       return prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
//       );
//     });
//   };
//   return (
//     <ContactContext.Provider value={{ tableData, setTableData, cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </ContactContext.Provider>
//   );
// };


import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
export const ContactContext = createContext();

// Custom hook to access the context
export const useCart = () => useContext(ContactContext);

// Context provider
export const ContactProvider = ({ children }) => {
  // Cart state, persisted to localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Table data state
  const [tableData, setTableData] = useState([]);

  // Persist cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calculate total count of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Add an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Provide context values
  return (
    <ContactContext.Provider
      value={{
        tableData,
        setTableData,
        cart,
        cartCount, // Provide cart count here
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
