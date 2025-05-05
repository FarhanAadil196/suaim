// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import styled from 'styled-components';
import Navbar from './Navbar';


const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const { name, address, email, phone } = form;
    if (!name || !address || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }

    const orderData = {
      customer: form,
      products: cartItems,
      total: subtotal,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem('order', JSON.stringify(orderData));
    dispatch(clearCart());
    setForm({ name: '', address: '', email: '', phone: '' });
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Navbar />
      <h2>Checkout</h2>
      {submitted ? (
        <p>Thank you for your purchase!</p>
      ) : (
        <>
          <form>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInput}
              placeholder="Full name"
              required
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInput}
              placeholder="Address"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInput}
              placeholder="Email address"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleInput}
              placeholder="Phone"
              required
            />
          </form>
          <div className="summary">
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <p>
                  {item.title} x {item.quantity} = ₹
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <h3>Total: ₹{subtotal.toFixed(2)}</h3>
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      padding: 0.5rem;
    }
  }
  .summary {
    margin-top: 2rem;
    .summary-item {
      margin-bottom: 0.5rem;
    }
    h3 {
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
    }
  }
`;
