import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useContext(CartContext);
  const [favProducts, setFavProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!favorites || favorites.length === 0) {
      setFavProducts([]);
      setIsLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        
        // Filter and FORMAT the data to match ProductCard expectations
        const matched = data
          .filter(product => favorites.includes(product.id))
          .map(product => ({
            ...product,
            name: product.title,       // ✅ Rename title to name
            oldPrice: product.price * 1.25, // Add oldPrice for consistency
            discount: 20,              // Add discount for consistency
            rating: Math.round(product.rating.rate) // Add rounded rating
          }));
        
        setFavProducts(matched);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [favorites]);

  if (isLoading) return <div className="container py-5 text-white">Loading...</div>;

  if (favProducts.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-white">Favorites</h2>
        <p className="text-secondary">No items yet.</p>
        <Link to="/products" className="btn btn-success mt-3">Go Shop</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-white mb-4">Favorites ({favProducts.length})</h2>
      
      <div className="row">
        {favProducts.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;