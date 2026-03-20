import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, favorites, toggleFavorite } = useCart();

  const isFavorite = favorites.includes(product.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  // Safety check: Ensure price exists, default to 0 if missing
  const currentPrice = product.price || 0;
  const oldPrice = product.oldPrice || (currentPrice * 1.25);

  return (
    <div className="card h-100 shadow-sm border-secondary bg-dark text-white" style={{ transition: 'transform 0.2s' }}>
      
      <div className="product-img-wrapper position-relative overflow-hidden" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        
        {product.discount && (
          <div className="sale-badge position-absolute top-0 start-0 bg-danger text-white px-2 py-1 m-2 rounded fw-bold" style={{ zIndex: 2 }}>
            -{product.discount}%
          </div>
        )}

        <button 
          className="btn position-absolute top-0 end-0 m-2 p-2 rounded-circle shadow-sm" 
          onClick={handleFavoriteClick}
          style={{ zIndex: 2, background: 'rgba(0,0,0,0.6)', border: 'none', transition: 'transform 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className={`fas fa-heart fs-5 ${isFavorite ? 'text-danger' : 'text-white'}`}></i>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', transition: 'transform 0.3s' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>

      <div className="card-body d-flex flex-column bg-dark">
        <h6 className="card-title text-white" style={{ minHeight: '40px', fontSize: '0.9rem' }}>{product.name}</h6>
        
        <div className="mb-2 text-warning">
          {[...Array(5)].map((star, index) => (
            <i key={index} className={`fa-star ${index < (product.rating || 0) ? 'fas' : 'far'}`}></i>
          ))}
        </div>

        <div className="mb-3">
          <span className="text-muted text-decoration-line-through me-2 small">
            P{oldPrice.toFixed(2)}
          </span>
          <span className="fw-bold text-success fs-5">
            P{currentPrice.toFixed(2)}
          </span>
        </div>

        <button 
          className="btn btn-success mt-auto w-100 fw-bold" 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          onMouseOver={(e) => e.currentTarget.classList.add('btn-light')}
          onMouseOut={(e) => e.currentTarget.classList.remove('btn-light')}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;