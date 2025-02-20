import React, { useState } from "react";

const Newslatest = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      // You can make an API call or process the email here
      setEmail(""); // Clear the input field after submitting
    }
  };

  return (
    <div
      className="mt-5"
      style={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "url(./images/newsletter-bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1>Subscribe us For Latest Updates</h1>
        <form
          className="d-flex"
          role="search"
          style={{
            border: "20px solid rgba(128, 128, 128, 0.511)",
          }}
          onSubmit={handleSubmit}
        >
          <input
            className="form-control rounded-0"
            type="email"
            placeholder="Enter your email..."
            aria-label="Search"
            value={email}
            onChange={handleInputChange}
          />
          <button className="btn btn-success rounded-0" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newslatest;
