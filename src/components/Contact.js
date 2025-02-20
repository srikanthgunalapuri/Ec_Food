import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [rowIndex, setRowIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state) {
      setFormData(location.state.rowData);
      setRowIndex(location.state.index);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const validateForm = () => {
    const { name, email, number, subject, message } = formData;
    let isValid = true;
    let newError = {};

    if (!name.trim()) {
      newError.name = "Please enter your name.";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      newError.name = "Name should contain only letters.";
      isValid = false;
    } else if (name.trim().length !== 3) {
      newError.name = "Name should be exactly 3 characters long.";
      isValid = false;
    }

    if (!email.trim()) {
      newError.email = "Please enter your email.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      newError.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!number.trim()) {
      newError.number = "Please enter your phone number.";
      isValid = false;
    } else if (!/^\d{10}$/.test(number.trim())) {
      newError.number = "Phone number must be 10 digits.";
      isValid = false;
    }

    if (!subject.trim()) {
      newError.subject = "Please enter a subject.";
      isValid = false;
    }

    if (!message.trim()) {
      newError.message = "Please enter your message.";
      isValid = false;
    } else if (message.trim().length < 20) {
      newError.message = "Message must be at least 20 characters long.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const url =
        rowIndex !== null
          ? `https://api.sheetbest.com/sheets/0c197c20-cf69-4802-a43b-b89f9c89de13/${rowIndex}`
          : "https://api.sheetbest.com/sheets/0c197c20-cf69-4802-a43b-b89f9c89de13";

      const method = rowIndex !== null ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(
          rowIndex !== null
            ? "Record updated successfully!"
            : "Message sent successfully!"
        );
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
        navigate("/", { replace: true });
      } else {
        alert("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error while sending data:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center"
        style={{ padding: "50px 0px 20px 0px" }}
      >
        <h1>
          Contact{" "}
          <span className="text-success">
            {rowIndex !== null ? "Edit" : "US"}
          </span>
        </h1>
      </div>
      <div className="contact_input_container">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Name"
            />
            {error.name && <small className="text-danger">{error.name}</small>}
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
            />
            {error.email && (
              <small className="text-danger">{error.email}</small>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              id="number"
              type="text"
              name="number"
              className="form-control"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              aria-label="Phone Number"
            />
            {error.number && (
              <small className="text-danger">{error.number}</small>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Subject"
            />
            {error.subject && (
              <small className="text-danger">{error.subject}</small>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
            ></textarea>
            {error.message && (
              <small className="text-danger">{error.message}</small>
            )}
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-success rounded-0"
              style={{ width: "200px" }}
              disabled={loading}
            >
              {rowIndex !== null ? "Update" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     subject: "",
//     message: "",
//   });

//   const [error, setError] = useState({
//     name: "",
//     email: "",
//     number: "",
//     subject: "",
//     message: "",
//   });

//   const [rowIndex, setRowIndex] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (location.state) {
//       setFormData(location.state.rowData);
//       setRowIndex(location.state.index);
//     }
//   }, [location.state]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setError({ ...error, [name]: "" }); // Clear error message when user starts typing
//   };

//   const validateForm = () => {
//     const { name, email, number, subject, message } = formData;
//     let isValid = true;
//     let newError = {};

//     if (!name) {
//       newError.name = "Please enter your name.";
//       isValid = false;
//     }
//     if (!email) {
//       newError.email = "Please enter your email.";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newError.email = "Please enter a valid email address.";
//       isValid = false;
//     }
//     if (!number) {
//       newError.number = "Please enter your phone number.";
//       isValid = false;
//     } else if (number.length !== 10) {
//       newError.number = "Phone number must be 10 digits.";
//       isValid = false;
//     }
//     if (!subject) {
//       newError.subject = "Please enter a subject.";
//       isValid = false;
//     }
//     if (!message) {
//       newError.message = "Please enter your message.";
//       isValid = false;
//     }

//     setError(newError);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       const url = rowIndex !== null
//         ? `https://api.sheetbest.com/sheets/0c197c20-cf69-4802-a43b-b89f9c89de13/${rowIndex}`
//         : "https://api.sheetbest.com/sheets/0c197c20-cf69-4802-a43b-b89f9c89de13";

//       const method = rowIndex !== null ? "PUT" : "POST";

//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert(rowIndex !== null ? "Record updated successfully!" : "Message sent successfully!");
//         setFormData({ name: "", email: "", number: "", subject: "", message: "" });
//         navigate("/", { replace: true });
//       } else {
//         alert("Failed to submit the form. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error while sending data:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div
//         className="d-flex justify-content-md-center"
//         style={{ padding: "50px 0px 20px 0px" }}
//       >
//         <h1>
//           Contact <span className="text-success">{rowIndex !== null ? "Edit" : "US"}</span>
//         </h1>
//       </div>
//       <div
//         className="contact_input_container"
//         style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//       >
//         <form
//           id="form"
//           className="all-inputs"
//           style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           onSubmit={handleSubmit}
//         >
//           <div className="row">
//             <div className="col">
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 style={{ width: "100%" }}
//                 value={formData.name}
//                 onChange={handleChange}
//                 aria-label="Name"
//               />
//               {error.name && <small style={{color:"red"}}>{error.name}</small>}
//             </div>
//             <div className="col">
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 style={{ width: "100%" }}
//                 value={formData.email}
//                 onChange={handleChange}
//                 aria-label="Email"
//               />
//               {error.email && <small style={{color:"red"}}>{error.email}</small>}
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <label htmlFor="number">Phone Number</label>
//               <input
//                 id="number"
//                 type="number"
//                 name="number"
//                 placeholder="Number"
//                 style={{ width: "100%" }}
//                 value={formData.number}
//                 onChange={handleChange}
//                 aria-label="Phone Number"
//               />
//               {error.number && <small style={{color:"red"}}>{error.number}</small>}
//             </div>
//             <div className="col">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 id="subject"
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 style={{ width: "100%" }}
//                 value={formData.subject}
//                 onChange={handleChange}
//                 aria-label="Subject"
//               />
//               {error.subject && <small style={{color:"red"}}>{error.subject}</small>}
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 className="form-control"
//                 name="message"
//                 placeholder="Message"
//                 rows="10"
//                 style={{ width: "100%" }}
//                 value={formData.message}
//                 onChange={handleChange}
//                 aria-label="Message"
//               ></textarea>
//               {error.message && <small style={{color:"red"}}>{error.message}</small>}
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               gap: 30,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <button
//               type="submit"
//               className="btn btn-success rounded-0 text-center"
//               style={{ width: "200px" }}
//               disabled={loading}
//             >
//               {rowIndex !== null ? "Update" : "Send"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// de94bba4-06d1-4d40-a16a-bfd50179d6ac
// 0X8000000000000001
// export default Contact;
