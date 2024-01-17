import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsertPart = () => {
  const [formData, setFormData] = useState({
    unique_id: '',
    part_code: '',
    name: '',
  });

  const [createdPart, setCreatedPart] = useState(null);
  const [allParts, setAllParts] = useState([]);

  useEffect(() => {
   fetchAllParts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInsertPart = async () => {
    try {
      const response = await axios.post('http://localhost:3000/insertpart', formData);
      setCreatedPart(response.data);
      fetchAllParts();
    } catch (error) {
      console.error('Error inserting part:', error);
    }
  };

  const fetchAllParts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/allparts');
      setAllParts(response.data);
    } catch (error) {
      console.error('Error fetching all parts:', error);
    }
  };

  return (
    <div>
      <h1>Insert Part</h1>
      <label>
        Unique ID:
        <input type="text" name="unique_id" value={formData.unique_id} onChange={handleInputChange} />
      </label>
      <label>
        Part Code:
        <input type="text" name="part_code" value={formData.part_code} onChange={handleInputChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <button onClick={handleInsertPart}>Insert Part</button>

      {createdPart && (
        <div>
          <h2>Created Part</h2>
          <ul>
            <li>Unique ID: {createdPart.unique_id}</li>
            <li>Part Code: {createdPart.part_code}</li>
            <li>Name: {createdPart.name}</li>
            <li>categoryId: {createdPart.categoryId}</li>

          </ul>
        </div>
      )}

      <div>
        <h2>All Parts</h2>
        <ul>
          {allParts.map((part) => (
            <li key={part._id}>
              <ul>
                <li>Unique ID: {part.unique_id}</li>
                <li>Part Code: {part.part_code}</li>
                <li>Name: {part.name}</li>
                <li>categoryId : {part.categoryId}</li>
              </ul><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsertPart;
