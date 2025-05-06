// src/components/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCheckout,
} from "./checkoutActions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Cart = () => {
  const cartItems = useSelector((state) => state.checkout.checkoutItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => {
    const rawPrice = item.discountedPrice ?? item.price ?? 0;
    const price = parseFloat(rawPrice.toString().replace(/[^\d.]/g, ""));
    const quantity = parseInt(item.quantity ?? 1, 10);

    if (!isNaN(price) && !isNaN(quantity)) {
      return acc + price * quantity;
    }
    return acc;
  }, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: cartItems });
  };

  const handleBackToShop = () => {
    navigate("/shop");
  };

  if (cartItems.length === 0) {
    return (
      <Wrapper>
        <p>Your cart is empty.</p>
        <button onClick={handleBackToShop}>← Back to Shop</button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, i) => (
          <div className="cart-item" key={i}>
            <img src={item.selectedImg} alt={item.title} />
            <div className="details">
              <h3>{item.title}</h3>
              <p>Size: {item.selectedSize}</p>
              <p>Price: {item.discountedPrice}</p>
              <div className="buttons">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id, item.selectedSize))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id, item.selectedSize))
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      removeProductFromCheckout(item.id, item.selectedSize)
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <h3>Subtotal: ₹{subtotal}</h3>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
        <button onClick={handleBackToShop}>← Back to Shop</button>
      </div>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .cart-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      border-radius: 8px;
    }

    .details {
      flex: 1;

      h3 {
        margin: 0;
      }

      p {
        margin: 0.3rem 0;
      }

      .buttons {
        margin-top: 0.5rem;

        button {
          margin-right: 0.5rem;
          padding: 5px 10px;
          cursor: pointer;
        }

        span {
          display: inline-block;
          min-width: 20px;
          text-align: center;
        }
      }
    }
  }

  .summary {
    text-align: right;
    margin-top: 2rem;

    h3 {
      margin-bottom: 1rem;
    }

    button {
      margin-left: 1rem;
      padding: 10px 20px;
      font-weight: bold;
      cursor: pointer;
      background-color: #111;
      color: #fff;
      border: none;
      border-radius: 6px;

      &:hover {
        background-color: #333;
      }
    }
  }
`;
