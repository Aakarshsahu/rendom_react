import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsertCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
  });

  const [categories, setCategories] = useState([]);
  const [createdCategory, setCreatedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []); 

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/allcategories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInsertCategory = async () => {
    try {
      const response = await axios.post('http://localhost:3000/insertcetegory', formData);
      setCreatedCategory(response.data);
      fetchCategories();
    } catch (error) {
      console.error('Error inserting category:', error);
    }
  };

  return (
    <div>
      <h1>Insert Category</h1>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
      </label>
      <button onClick={handleInsertCategory}>Insert Category</button>

      {createdCategory && (
        <div>
          <h2>Created Category</h2>
          <ul>
            <li>Name: {createdCategory.catname}</li>
            <li>ID: {createdCategory.id}</li>
          </ul>
        </div>
      )}

      <div>
        <h2>All Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category._id}>
              <ul>
                <li>Name: {category.catname}</li>
                <li>ID: {category.id}</li>
              </ul><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsertCategory;
