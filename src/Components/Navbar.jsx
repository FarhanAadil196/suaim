import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import "./colors.css";

// Create context for cart
const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-primary);
  
  nav {
    display: flex;
    height: 15vh;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: relative;
    z-index: 10;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;

    img {
      height: 60px;
    }
  }

  .toggle-button {
    font-size: 1.5rem;
    cursor: pointer;
    background: transparent;
    border: none;
    color: var(--clr-white);
    display: none;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;

    li a {
      text-decoration: none;
      color: var(--clr-accent);
      font-weight: bold;
    }
  }

  .cart-icon {
    position: relative;
    color: var(--clr-accent);
    font-size: 1.5rem;
    cursor: pointer;

    .cart-count {
      position: absolute;
      top: -8px;
      right: -10px;
      background-color: red;
      color: white;
      font-size: 12px;
      border-radius: 50%;
      padding: 2px 6px;
    }
  }

  @media (max-width: 768px) {
    .toggle-button {
      display: block;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--clr-primary);
      flex-direction: column;
      padding: 1rem 2rem;
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>
        <button
          className="toggle-button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
        <Link to="/checkout" className="cart-icon">
          <FaShoppingCart />  
        </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}
