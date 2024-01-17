import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Alldata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/alldata');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <p>Unique ID: {item.unique_id}</p>
            <p>Part Code: {item.part_code}</p>
            <p>Name: {item.name}</p>
            <p>Category ID: {item.categoryId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alldata;
