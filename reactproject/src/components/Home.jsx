import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
import Cart from './Cart'
import '../styles/style.css';

const Home = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart,setCart]=useState([])
  const [slideDirection, setSlideDirection] = useState(''); // State to track slide direction
  const itemsPerPage = 6;

  // Fetch data from API
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

  // Toggle product like status
  const toggleLike = (productId) => {
    setLikedProducts((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  // Handle pagination with sliding animation
  const handleNext = () => {
    if (currentIndex + itemsPerPage < data.length) {
      setSlideDirection('slide-left'); // Set direction to slide left
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSlideDirection('slide-right'); // Set direction to slide right
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  // Reset animation class after rendering
  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => setSlideDirection(''), 500); // Clear animation after it completes
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);
  const addtocart=(product)=>{
    setCart([...cart,product]);
   }
   const togglecart = () => navigate('/cart', { state: { cart } });


  const currentItems = data.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="container-fluid px-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MARKET NEST</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              {/* Dropdown Menu for Categories */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                  <li><a className="dropdown-item" href="/category/men">Men</a></li>
                  <li><a className="dropdown-item" href="/category/girls">Girls</a></li>
                  <li><a className="dropdown-item" href="/category/boys">Boys</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">Inspiration</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a href="/search" className="text-dark me-3">
                <FaSearch />
              </a>
              <a href="/cart" className="text-dark me-3" onClick={togglecart}>
                <FaShoppingCart />
                {cart.length > 0 &&(
                  <span className='cart-count'>{cart.length}</span>
                )}
              </a>
              <a href="/test" className="text-dark">
                <FaUser />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Display Section */}
      <div className="py-3">
        <small className="text-secondary">{data.length} products</small>
      </div>

      <div className="mb-4 position-relative">
        <h3 className="h5 mb-2">We thought you might like these!</h3>
        <p className="text-secondary small mb-4">Based on your shopping habits...</p>

        {/* Apply animation class conditionally based on slide direction */}
        <div className={`row g-4 ${slideDirection}`}>
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
                <button
                  className="btn btn-light position-absolute top-0 end-0 mt-2 me-2 rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  onClick={() => toggleLike(product.id)}
                >
                  <FaHeart style={{ fontSize: '1.2rem', color: likedProducts[product.id] ? 'red' : 'gray' }} />
                </button>
              </div>
              <div className="mt-2">
                <div className="small fw-bold text-truncate text-center mt-3">{product.title}</div>
                <div className="small fw-light m-2" style={{ minHeight: '60px', color: '#212529' }}>
                  {product.description.split(' ').length > 20
                    ? product.description.split(' ').slice(0, 25).join(' ') + '...'
                    : product.description}
                </div>
                <div className="fw-bold mt-2 ms-2 text-start">Fr. {product.price.toFixed(2)}</div>

                <button className="button-hover-effect" onClick={()=>addtocart(product)}>Add to cart</button>
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
