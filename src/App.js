import React, { useState, useEffect } from 'react';
import ItemList from './components/Listing';
import ItemDetails from './components/Details';
import { fetchItems } from './controllers/ListingController';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      const itemsData = await fetchItems();
      console.log(itemsData)

      setItems(itemsData);
    };
    loadItems();
  }, []);

  const handleItemClick = (itemId) => {
    const selectedItem = items.find(item => item.id === itemId);
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <ItemList items={items} onItemClick={handleItemClick} />
      {selectedItem && <ItemDetails item={selectedItem} />}
    </div>
  );
};
export default App;
