import { useEffect, useState } from "react";

const Sidebar = () => {
  // State to store categories from the backend
  const [categories, setCategories] = useState([]);

  // Fetch categories from the backend API when the component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data); // Save unique categories into state
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <aside className="bg-light p-3 shadow-sm rounded">
      <h5>Categories</h5>
      <ul className="list-group">
        {/* Dynamically render the list of categories using .map() */}
        {categories.map((category, index) => (
          <li key={index} className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;