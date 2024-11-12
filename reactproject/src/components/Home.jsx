import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';

const Home = () => {
  const [data, setData] = useState([]);
  const [likedProducts, setLikedProducts] = useState({}); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Toggle like status for a product
  const toggleLike = (productId) => {
    setLikedProducts((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < data.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const currentItems = data.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="container-fluid px-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/test">RIVER ISLAND</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/test">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/test">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/test">Girls</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/test">Boys</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/test">Holiday Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/test">Inspiration</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a href="/test" className="text-dark me-3">
                <FaSearch />
              </a>
              <a href="/test" className="text-dark me-3">
                <FaShoppingCart />
              </a>
              <a href="/test" className="text-dark">
                <FaUser />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-3">
        <small className="text-secondary">{data.length} products</small>
      </div>

      <div className="mb-4 position-relative">
        <h3 className="h5 mb-2">We thought you might like these!</h3>
        <p className="text-secondary small mb-4">Based on your shopping habits...</p>

        <div className="row g-4">
          {currentItems.map((product) => (
            <div key={product.id} className="col-12 col-md-4">
              <div className="position-relative">
                <div className="product-image-container" style={{ height: '300px', overflow: 'hidden' }}>
                  <img 
                    src={product.image} 
                    className="img-fluid w-100 h-100"
                    alt={product.title}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                {/* Circular like button with color toggle */}
                <button 
                  className="btn btn-light position-absolute top-0 end-0 mt-2 me-2 rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  onClick={() => toggleLike(product.id)}
                >
                  <FaHeart style={{ fontSize: '1.2rem', color: likedProducts[product.id] ? 'red' : 'gray' }} />
                </button>
                <span className="position-absolute bottom-0 start-0 mb-2 ms-2 bg-dark text-white px-2 py-1 small">
                  TRENDING
                </span>
              </div>
              <div className="mt-2">
                <div className="small text-truncate">{product.title}</div>
                <div className="fw-bold mt-1">Fr. {product.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y d-none d-md-block ms-2 ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button 
          className={`btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y d-none d-md-block me-2 ${currentIndex + itemsPerPage >= data.length ? 'disabled' : ''}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      <div className="text-center mt-3">
        <small className="text-muted">
          Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerPage, data.length)} of {data.length} products
        </small>
      </div>
    </div>
  );
};

export default Home;