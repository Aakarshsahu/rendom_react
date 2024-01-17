import React, { useState } from 'react';
import axios from 'axios';

const PartCodeList = () => {
  const [partCode, setPartCode] = useState('');
  const [partData, setPartData] = useState(null);

  const handleInputChange = (e) => {
    setPartCode(e.target.value);
  };

  const handleFetchPartCode = async () => {
    try {
      const response = await axios.post('http://localhost:3000/partcode', { part_code: partCode });
      setPartData(response.data);
    } catch (error) {
      console.error('Error fetching part code:', error);
    }
  };

  return (
    <div>
      <h1>Part Code List</h1>
      <input type="text" value={partCode} onChange={handleInputChange} />
      <button onClick={handleFetchPartCode}>Fetch Part Code</button>

      {partData && (
        <ul>
          <li>Unique ID: {partData.unique_id}</li>
          <li>Part Code: {partData.part_code}</li>
          <li>Name: {partData.name}</li>
          <li>Category ID: {partData.categoryId}</li>
        
        </ul>
      )}
    </div>
  );
};

export default PartCodeList;
