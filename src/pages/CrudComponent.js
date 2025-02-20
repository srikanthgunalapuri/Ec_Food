import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);  // Flag to toggle between Edit/Create

  // Fetch data (Read)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle changes in the input fields
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle updating an existing entry
  const handleUpdate = (id) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, editData)
      .then((response) => {
        const updatedData = data.map((item) =>
          item.id === id ? response.data : item
        );
        setData(updatedData);
        alert('Data updated successfully');
        setEditData({});
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  // Handle the edit button (populate form with data)
  const handleEdit = (user) => {
    setEditData(user);
    setIsEditing(true);
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      
      {/* Form for creating or editing data */}
      <div>
        <input
          type="text"
          name="name"
          value={editData.name || ''}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          value={editData.email || ''}
          onChange={handleChange}
          placeholder="Email"
        />
        {isEditing ? (
          <button onClick={() => handleUpdate(editData.id)}>Save Changes</button>
        ) : (
          <button onClick={() => alert('Create functionality not supported for jsonplaceholder')}>Create Data</button>
        )}
      </div>

      <h2>Users List</h2>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
          <button onClick={() => handleEdit(user)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default CrudComponent;


