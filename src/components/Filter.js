import React from 'react';

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter by category:</label>
      <select id="filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;