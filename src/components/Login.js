// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUserCircle } from "react-icons/fa";

// const Login = () => {
//   const [view, setView] = useState("register"); // 'login', 'register', 'forgotPassword'
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email.";
//     }

//     if (view === "register") {
//       if (!formData.name) {
//         newErrors.name = "Name is required.";
//       }
//       if (!formData.password || formData.password.length < 6) {
//         newErrors.password = "Password must be at least 6 characters.";
//       }
//       if (!formData.confirmPassword) {
//         newErrors.confirmPassword = "Confirm password is required.";
//       } else if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match.";
//       }
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     setErrors({});
  
//     // Replace with your Google Apps Script URL
//     const scriptURL = "https://script.google.com/macros/s/AKfycbzbeXDi91QKJIgVJOxrRwJ3g6jgQAH5ITQj_mTpY11MJH9wF71Fj8dKkiIEKLmMOAP4qA/exec";
    
//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const result = await response.json();
//       if (result.status === "success") {
//         alert("Form data submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//         });
//       } else {
//         alert("Failed to submit form data.");
//       }
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//       alert("An error occurred while submitting the form.");
//     }
//   };
  

//   return (
//     <div className="container py-5 d-flex justify-content-center">
//       <div className="card shadow" style={{ width: "400px" }}>
//         <div className="card-body">
//           <div className="text-center mb-4">
//             <FaUserCircle size={80} color="green" />
//           </div>
//           <h3 className="text-center mb-4">{view === "register" ? "Register" : view === "login" ? "Login" : "Reset Password"}</h3>
//           <form onSubmit={handleSubmit}>
//             {view === "register" && (
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                   placeholder="Enter Your Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//                 {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//               </div>
//             )}
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                 placeholder="Enter Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//             </div>
//             {view !== "forgotPassword" && (
//               <>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">Password:</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                     placeholder="Enter Password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                   />
//                   {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
//                 {view === "register" && (
//                   <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
//                       placeholder="Enter Confirm Password"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                     />
//                     {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
//                   </div>
//                 )}
//               </>
//             )}
//             <button type="submit" className="btn btn-primary w-100">
//               {view === "register" ? "Register" : view === "login" ? "Login" : "Reset Password"}
//             </button>
//           </form>
//           <div className="text-center mt-3">
//             {view === "register" ? (
//               <>
//                 Already have an account?{" "}
//                 <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("login")}>
//                   Login
//                 </span>
//               </>
//             ) : view === "login" ? (
//               <>
//                 Don't have an account?{" "}
//                 <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("register")}>
//                   Register
//                 </span>
//                 <br />
//                 <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("forgotPassword")}>
//                   Forgot Password?
//                 </span>
//               </>
//             ) : (
//               <>
//                 Remembered your password?{" "}
//                 <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("login")}>
//                   Login
//                 </span>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios'


const Login = () => {
  const [view, setView] = useState("register"); // 'login', 'register', 'forgotPassword'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Please enter a valid email.";
  //   }

  //   if (view === "register") {
  //     if (!formData.name) {
  //       newErrors.name = "Name is required.";
  //     }
  //     if (!formData.password || formData.password.length < 6) {
  //       newErrors.password = "Password must be at least 6 characters.";
  //     }
  //     if (!formData.confirmPassword) {
  //       newErrors.confirmPassword = "Confirm password is required.";
  //     } else if (formData.password !== formData.confirmPassword) {
  //       newErrors.confirmPassword = "Passwords do not match.";
  //     }
  //   }

  //   return newErrors;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('', {name, email, password, confirmPassword})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }; 
  

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <FaUserCircle size={80} color="green" />
          </div>
          <h3 className="text-center mb-4">{view === "register" ? "Register" : view === "login" ? "Login" : "Reset Password"}</h3>
          <form onSubmit={handleSubmit}>
            {view === "register" && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            {view !== "forgotPassword" && (
              <>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                {view === "register" && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                      placeholder="Enter Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
                )}
              </>
            )}
            <button type="submit" className="btn btn-primary w-100">
              {view === "register" ? "Register" : view === "login" ? "Login" : "Reset Password"}
            </button>
          </form>
          <div className="text-center mt-3">
            {view === "register" ? (
              <>
                Already have an account?{" "}
                <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("login")}>
                  Login
                </span>
              </>
            ) : view === "login" ? (
              <>
                Don't have an account?{" "}
                <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("register")}>
                  Register
                </span>
                <br />
                <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("forgotPassword")}>
                  Forgot Password?
                </span>
              </>
            ) : (
              <>
                Remembered your password?{" "}
                <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setView("login")}>
                  Login
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
