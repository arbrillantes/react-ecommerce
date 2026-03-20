import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
    // Store products from backend
    const [products, setProducts] = useState([]);

    // Track loading state
    const [loading, setLoading] = useState(true);

    // Fetch products when component loads
    useEffect(() => {
        // Updated to use the LIVE API
        fetch("https://fakestoreapi.com/products") 
            .then((res) => res.json())
            .then((data) => {
                // Map LIVE API data to your specific product model
                const formatted = data.map(item => ({
                    id: item.id,
                    name: item.title, // fakestoreapi uses 'title', your card uses 'name'
                    oldPrice: item.price * 1.25, // Artificial markup for the discount look
                    price: item.price,
                    discount: 20,
                    rating: Math.round(item.rating.rate), // Rounding the decimal rating
                    image: item.image
                }));
                
                setProducts(formatted); // Save the newly formatted data
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h3 className="text-center">Loading products...</h3>;
    }

    return (
        <div className="container">
            <div className="row">

                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                {/* Products */}
                <div className="col-lg-10 col-md-9">
                    <h2 className="mb-3">All Products</h2>

                    <div className="row">
                        {products.map((product) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductList;