// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from './cartSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="details">
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="buttons">
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="summary">
            <h3>Subtotal: ₹{subtotal.toFixed(2)}</h3>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  padding: 2rem;
  .cart-item {
    display: flex;
    margin-bottom: 1rem;
    img {
      width: 100px;
      margin-right: 1rem;
    }
    .details {
      h3 {
        margin: 0;
      }
      .buttons {
        margin-top: 0.5rem;
        button {
          margin-right: 0.5rem;
        }
      }
    }
  }
  .summary {
    margin-top: 2rem;
    h3 {
      margin-bottom: 1rem;
    }
    button {
      margin-right: 1rem;
    }
  }
`;
