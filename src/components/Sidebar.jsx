import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
  const { filterCategory, setFilterCategory } = useContext(CartContext);

  // Hardcoded categories based on fakestoreapi data for reliability
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <aside className="bg-dark p-3 shadow-sm rounded border border-secondary">
      <h5 className="text-white mb-3">
        <i className="fas fa-filter me-2 text-success"></i>
        Categories
      </h5>
      <ul className="list-group list-group-flush">
        {categories.map((category) => (
          <li 
            key={category} 
            onClick={() => setFilterCategory(category)}
            className={`list-group-item list-group-item-action bg-dark text-white border-secondary ${filterCategory === category ? 'active bg-success border-success' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;