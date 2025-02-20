import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactDeatils = () => {
  const [dataFull, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/0c197c20-cf69-4802-a43b-b89f9c89de13"
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setData(data);
      } else {
        console.error("Unexpected data format:", data);
        setData([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (index) => {
    const rowData = dataFull[index];
    navigate("/contact", { state: { rowData, index } });
  };

  const handleDelete = async (index) => {
    try {
      const res = await fetch(
        `https://api.sheetbest.com/sheets/0c197c20-cf69-4802-a43b-b89f9c89de13/${index}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedData = dataFull.filter((_, i) => i !== index);
        setData(updatedData);
        alert("Record deleted successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Contact <span className="text-success">Details</span>
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataFull.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.number}</td>
                <td>{row.subject}</td>
                <td>{row.message}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDeatils;
