import React from 'react';

const Policies = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 text-white">
          <i className="fas fa-shield-alt me-2 text-success"></i>
          Level Up Gear Policies
        </h2>
        <p className="text-secondary">Everything you need to know about shopping with us.</p>
      </div>

      <div className="row g-4">
        
        {/* Shipping Policy */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-3 bg-dark text-white" style={{ borderColor: '#333' }}>
            <div className="card-body">
              <div className="mb-3 text-success">
                <i className="fas fa-truck-fast fa-3x"></i>
              </div>
              <h4 className="card-title fw-bold">Shipping & Delivery</h4>
              <p className="card-text text-secondary">
                We ship nationwide via <strong>LBC</strong> and <strong>J&T Express</strong>. 
                Metro Manila orders arrive in <strong>1-2 business days</strong>. Provincial deliveries take <strong>3-5 business days</strong>. 
                Free shipping on orders over ₱5,000!
              </p>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-3 bg-dark text-white" style={{ borderColor: '#333' }}>
            <div className="card-body">
              <div className="mb-3 text-danger">
                <i className="fas fa-rotate-left fa-3x"></i>
              </div>
              <h4 className="card-title fw-bold">Returns & Warranty</h4>
              <p className="card-text text-secondary">
                Defective gear? No problem. We offer a <strong>7-day replacement guarantee</strong> for factory defects. 
                Manufacturer warranties apply thereafter. Keep your original packaging and receipt for a smooth RMA process.
              </p>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-3 bg-dark text-white" style={{ borderColor: '#333' }}>
            <div className="card-body">
              <div className="mb-3 text-success">
                <i className="fas fa-user-lock fa-3x"></i>
              </div>
              <h4 className="card-title fw-bold">Terms of Service</h4>
              <p className="card-text text-secondary">
                By using Level Up Gear, you agree to comply with the <strong>Cybercrime Prevention Act of 2012</strong>. 
                We verify high-value transactions for security. All prices are in PHP and subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 rounded text-center bg-dark" style={{ border: '1px solid #333' }}>
        <p className="mb-0 small text-secondary">
          Last Updated: March 2026 | <strong className="text-success">Level Up Gear Philippines</strong>
        </p>
      </div>
    </div>
  );
};

export default Policies;