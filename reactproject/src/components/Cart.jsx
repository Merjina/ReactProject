import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Cart() {
    const location = useLocation();
    const initialCartItems = location.state?.cart || [];

    // Initialize state for cart items and quantities
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [quantities, setQuantities] = useState(initialCartItems.map(() => 1));

    // Handle quantity change for a specific item
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

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.title} className="cart-item-image" width={100} />
                            <div className="cart-item-details">
                                <h5>{item.title}</h5>
                                <p>Price: ${item.price * quantities[index]}</p> {/* Dynamic price */}
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                                    <span className="mx-2">{quantities[index]}</span>
                                    <Button variant="outline-secondary" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                                </div>
                                <Button variant="outline-danger" onClick={() => handleDelete(index)}>Delete</Button>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
