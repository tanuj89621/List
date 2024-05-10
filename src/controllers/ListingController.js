import Item from '../models/data';

const fetchItems = async () => {
  const response = await fetch('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
  const data = await response.json();

  return data.map(item => new Item(item.domains, item.name, item.country));
};

export { fetchItems };
