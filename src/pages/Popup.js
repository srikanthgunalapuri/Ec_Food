import React, { useState, useEffect } from 'react';
import Login from '../components/Login';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Hide popup
  };

  return (
    <>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

// import React, { useState, useEffect } from 'react';
// import Login from '../components/Login';

// const Popup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Show popup after 2 seconds
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);

//     return () => clearTimeout(timer); // Clean up timer on unmount
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false); // Hide popup
//   };

//   return (
//     <>
//       {isVisible && (
  
//           <div className="popup-content">
//             <Login />
//             <button className="close-btn" onClick={handleClose}>Close</button>
//           </div>
  
//       )}
//     </>
//   );
// };

// export default Popup;











