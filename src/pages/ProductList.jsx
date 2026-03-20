import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
    const { 
        searchQuery, 
        filterCategory, 
        sortOption, 
        setSortOption,
        recentlyViewed, 
        addRecentlyViewed 
    } = useContext(CartContext);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products") 
            .then((res) => res.json())
            .then((data) => {
                const formatted = data.map(item => ({
                    id: item.id,
                    name: item.title,
                    category: item.category,
                    oldPrice: item.price * 1.25,
                    price: item.price,
                    discount: 20,
                    rating: Math.round(item.rating.rate),
                    image: item.image
                }));
                
                setProducts(formatted);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = [...products];

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        if (filterCategory && filterCategory !== "all") {
            const category = filterCategory.toLowerCase();
            result = result.filter(product => 
                product.category.toLowerCase() === category
            );
        }

        if (sortOption === "price-low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-high") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortOption === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(result);
    }, [products, searchQuery, filterCategory, sortOption]);

    const handleProductClick = (product) => {
        console.log("Product Clicked:", product.name); // Debug log
        addRecentlyViewed(product);
    };

    if (loading) {
        return <div className="text-center mt-5"><h3 className="text-success">Loading Gear...</h3></div>;
    }

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                <div className="col-lg-10 col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                        <h2 className="text-white m-0">
                            <i className="fas fa-filter me-2 text-success"></i>
                            All Products
                        </h2>
                    </div>

                    <div className="mb-4">
                         <select 
                            className="form-select bg-dark text-white border-secondary w-100 w-md-auto"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="default">Default Sorting</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A-Z</option>
                            <option value="rating">Top Rated</option>
                        </select>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="alert alert-warning bg-dark text-warning border-secondary">
                            No products found matching your criteria.
                        </div>
                    ) : (
                        <div className="row">
                            {filteredProducts.map((product) => (
                                <div 
                                    className="col-lg-3 col-md-4 col-sm-6 mb-4" 
                                    key={product.id}
                                    onClick={() => handleProductClick(product)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* RECENTLY VIEWED SECTION */}
                    {recentlyViewed && recentlyViewed.length > 0 && (
                        <div className="mt-5 pt-4 border-top border-secondary">
                            <h3 className="text-white mb-3">
                                <i className="fas fa-history me-2 text-success"></i>
                                Recently Viewed
                            </h3>
                            <div className="row">
                                {recentlyViewed.map((product) => (
                                    <div className="col-lg-2 col-md-4 col-sm-6 mb-3" key={`recent-${product.id}`}>
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;