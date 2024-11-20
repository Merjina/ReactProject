import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Wishlist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const wishlist = location.state?.wishlist || []; // Get wishlist from passed state

  // Navigate to Home
  const goBack = () => navigate('/');

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty. Start adding products!</p>
      ) : (
        <div className="row g-4">
          {wishlist.map((product) => (
            <div key={product.id} className="col-12 col-md-4">
              <div className="card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text">{product.description.substring(0, 80)}...</p>
                  <p className="card-text fw-bold">Price: ${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={goBack}>
          <FaShoppingCart /> Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
