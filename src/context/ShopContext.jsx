// src/context/ShopContext.jsx
import { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // Load favorites/recent from local storage on refresh (Optional but recommended)
  useEffect(() => {
    const savedFavs = localStorage.getItem('favorites');
    const savedRecent = localStorage.getItem('recentlyViewed');
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    if (savedRecent) setRecentlyViewed(JSON.parse(savedRecent));
  }, []);

  // Save to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToFavorites = (productId) => {
    if (!favorites.includes(productId)) {
      setFavorites((prev) => [...prev, productId]);
    } else {
      removeFromFavorites(productId);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((id) => id !== productId));
  };

  const addRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      // Remove if already exists to move it to the top
      const filtered = prev.filter((item) => item.id !== product.id);
      // Add to front, keep only last 5 items
      return [product, ...filtered].slice(0, 5);
    });
  };

  const getValue = () => {
    return {
      cartItems,
      setCartItems,
      favorites,
      addToFavorites,
      removeFromFavorites,
      recentlyViewed,
      addRecentlyViewed,
      searchQuery,
      setSearchQuery,
      filterCategory,
      setFilterCategory,
      sortOption,
      setSortOption
    };
  };

  return (
    <ShopContext.Provider value={getValue()}>
      {children}
    </ShopContext.Provider>
  );
};