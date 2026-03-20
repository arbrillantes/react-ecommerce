import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { searchQuery, setSearchQuery, favorites } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // If user is on Home page and starts typing, redirect to Products page
    if (window.location.pathname === '/' && value.length > 0) {
      navigate('/products');
    }
  };

  return (
    <header className="bg-black text-white py-3 border-bottom border-success shadow-lg">
      <div className="container">
        <div className="row align-items-center g-3">
          
          {/* Logo / Brand */}
          <div className="col-md-4 text-center text-md-start">
            <Link to="/" className="text-decoration-none">
              <h2 className="m-0 fw-bold text-success">
                LEVEL UP GEAR
              </h2>
              <small className="text-secondary">Pro Gaming Essentials</small>
            </Link>
          </div>

          {/* Functional Search Bar with Auto-Redirect */}
          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text bg-dark border-secondary text-success">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Search mice, keyboards, headsets..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Favorites Icon */}
          <div className="col-md-3 text-center text-md-end">
            <Link to="/favorites" className="text-white position-relative text-decoration-none">
              <i className="fas fa-heart fs-4 text-danger"></i>
              {favorites.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;