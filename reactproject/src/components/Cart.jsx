import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa'; // Add Cart Icon
import '../styles/cart.css';  

function Cart() {
    const location = useLocation();
    const initialCartItems = location.state?.cart || [];

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [quantities, setQuantities] = useState(initialCartItems.map(() => 1));

    // Handle quantity change
    const handleQuantityChange = (index, amount) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = Math.max(newQuantities[index] + amount, 1); // Ensure quantity doesn't go below 1
            return newQuantities;
        });
    };

    // Handle item deletion
    const handleDelete = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setQuantities((prevQuantities) => prevQuantities.filter((_, i) => i !== index));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item, index) => total + item.price * quantities[index], 0);

    return (
        <Container className="my-5 cart-container">
            {/* Cart Header with Logo and Heading */}
            <Row className="align-items-center mb-4 cart-header">
                <Col className="text-center">
                    <FaShoppingCart size={50} className="text-primary cart-icon" />
                    <h2 className="text-primary font-weight-bold mt-3 cart-heading">Your Shopping Cart</h2>
                </Col>
            </Row>

            {cartItems.length === 0 ? (
                <p className="text-center cart-empty">Your cart is empty. Add some items to start shopping!</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <Card key={index} className="mb-4 shadow-lg rounded cart-item" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Card.Body>
                                <Row className="align-items-center cart-item-row">
                                    <Col md={3} className="text-center">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="img-fluid rounded cart-item-img" 
                                            style={{ maxWidth: '120px', height: 'auto' }} 
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="font-weight-bold text-dark cart-item-title" style={{ fontSize: '1.1rem' }}>{item.title}</h5>
                                        <p className="text-muted cart-item-price">Price: ${item.price}</p>
                                    </Col>
                                    <Col md={3} className="text-end">
                                        <div className="d-flex align-items-center justify-content-end cart-quantity-controls">
                                            <Button 
                                                variant="outline-info" 
                                                className="mx-2 rounded-circle cart-quantity-btn"
                                                onClick={() => handleQuantityChange(index, -1)}
                                            >
                                                -
                                            </Button>
                                            <span className="mx-2 cart-quantity">{quantities[index]}</span>
                                            <Button 
                                                variant="outline-info" 
                                                className="mx-2 rounded-circle cart-quantity-btn"
                                                onClick={() => handleQuantityChange(index, 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="d-flex justify-content-end mt-2">
                                            <p className="fw-bold cart-item-total">Total: ${item.price * quantities[index]}</p>
                                        </div>
                                        <Button 
                                            variant="outline-danger" 
                                            className="mt-2 rounded-circle cart-delete-btn" 
                                            onClick={() => handleDelete(index)}
                                        >
                                            <FaTrashAlt />
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}

                    {/* Total Price Section */}
                    <Row className="mt-4 cart-total-section">
                        <Col md={12} className="text-end">
                            <h4 className="text-primary font-weight-bold cart-total">Total: ${totalPrice.toFixed(2)}</h4>
                        </Col>
                    </Row>

                    {/* Checkout Button */}
                    <Row className="mt-3 cart-checkout-section">
                        <Col md={12} className="text-center">
                            <Button variant="success" size="lg" className="rounded-pill shadow-lg cart-checkout-btn">
                                Proceed to Checkout
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Cart;
