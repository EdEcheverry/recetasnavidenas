import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    ingredients: '',
    instructions: '',
    image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', formData);
      alert('Book added successfully');
    } catch (error) {
      alert('Error adding book');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={e => setFormData({ ...formData, title: e.target.value })} />
      <input type="text" placeholder="Type" onChange={e => setFormData({ ...formData, category: e.target.value })} />
      <textarea placeholder="Tags" onChange={e => setFormData({ ...formData, ingredients: e.target.value })} />
      <textarea placeholder="Stock" onChange={e => setFormData({ ...formData, instructions: e.target.value })} />
      <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, image: e.target.value })} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddRecipe;