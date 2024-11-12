import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchItems = () => {
  // State for the search query and search results
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allProducts, setAllProducts] = useState([]); // To store all products

  // Fetch all products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setAllProducts(response.data); // Store all products in state
      } catch (err) {
        setError('Error fetching products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter the products based on the query
  useEffect(() => {
    if (query === '') {
      setResults([]); 
    } else {
      const filteredResults = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query, allProducts]); 

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container mt-4">
      {/* Search bar */}
      <div className="search-bar mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      
      {/* Display Search Results */}
      <div className="search-results">
        {results.length > 0 ? (
          <div className="row g-4">
            {results.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card h-100">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'contain', padding: '10px' }} // Image size adjustment
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Fr. {product.price}</p>
                    <button className="btn btn-dark mt-auto">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default SearchItems;
