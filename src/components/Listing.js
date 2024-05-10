// ItemList.js
import React from 'react';

const ItemList = ({ items, onItemClick }) => {
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
            localStorage.setItem("itemsData", item.name),

          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
