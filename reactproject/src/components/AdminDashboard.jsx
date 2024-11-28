import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import '../styles/style.css';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', price: '', description: '', image: '' });
  const [editingItem, setEditingItem] = useState(null);

  // Fetch items from the API on initial load
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  // Handle adding a new item
  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.title || !newItem.price || !newItem.description || !newItem.image) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('https://fakestoreapi.com/products', newItem);
      setItems([...items, response.data]);
      setNewItem({ title: '', price: '', description: '', image: '' });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Handle editing an existing item
  const handleEditItem = async (id) => {
    if (!editingItem) return;
    try {
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, ...editingItem } : item
      );
      setItems(updatedItems);
      setEditingItem(null);
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  // Handle deleting an item
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container-fluid px-4">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <FaShoppingCart className="me-2 logo-icon text-dark" />
            <span className="brand-name text-dark highlight-title">Market Nest Admin</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active text-dark" href="/">
                  Dashboard
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a href="/search" className="text-dark me-3">
                <FaSearch />
              </a>
              <a href="/login" className="text-dark">
                <FaUser />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Section */}
      <div className="mb-4">
        <h2 className="text-center mb-3  ">Admin Dashboard</h2>

        {/* Form to Add a New Item */}


 <div className="d-flex justify-content-center align-items-center vh-95 mb-4"> 
<Card className='mb-5 shadow-sm text-center' style={{ width: '30rem', height: '31rem' }}>
   <Card.Body>
     <Card.Title className='mb-3'>Add New Item</Card.Title>
        <Card.Text>
            <form
              // className="bg-light p-4 rounded shadow"
              style={{ width: '100%', maxWidth: '30rem' }}
              onSubmit={handleAddItem}>
              {/* <h3 className="text-center mb-4">Add New Item</h3> */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  rows="3"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image URL"
                  value={newItem.image}
                  onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-5" >
                Add Item
              </button>
            </form>
       </Card.Text>
     </Card.Body>
 </Card>
</div> 




        {/* Items Display */}
        <div className="row g-4">
          {items.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ objectFit: 'contain', height: '200px' }}
                />
                <div className="card-body">
                  {editingItem?.id === item.id ? (
                    <>
                      <input
                        type="text"
                        className="form-control mb-2"
                        defaultValue={item.title}
                        onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                      />
                      <input
                        type="number"
                        className="form-control mb-2"
                        defaultValue={item.price}
                        onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                      />
                      <textarea
                        className="form-control mb-2"
                        defaultValue={item.description}
                        onChange={(e) =>
                          setEditingItem({ ...editingItem, description: e.target.value })
                        }
                      ></textarea>
                      <button
                        className="btn btn-success w-100"
                        onClick={() => handleEditItem(item.id)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-truncate" title={item.description}>
                        {item.description}
                      </p>
                      <p className="text-primary fw-bold">${item.price.toFixed(2)}</p>
                      <div className="d-flex justify-content-bewteen">
                        <button
                          className="btn btn-warning "
                          onClick={() => setEditingItem(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger "
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
