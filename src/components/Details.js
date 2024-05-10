// ItemDetails.js
import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Description:</strong> {item.description}</p>
    </div>
  );
};

export default ItemDetails;
