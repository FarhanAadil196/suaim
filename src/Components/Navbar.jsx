import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Wrapper = styled.div`
  background: #f9f9f9;
  color: #111;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: relative;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;

    img {
      height:60px;
    }
  }

  .toggle-button {
    font-size: 1.5rem;
    cursor: pointer;
    background: transparent;
    border: none;
    color: #111;
    transition: all 10s ease-in-out;
    display: none; /* Hidden by default */
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;

    li a {
      text-decoration: none;
      color: #111;
      font-weight: bold;
    }
  }

  /* Media query for mobile responsiveness */
  @media (max-width: 768px) {
    .toggle-button {
      display: block; /* Show on mobile */
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: #f9f9f9;
      padding: 1rem 2rem;
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Conditional rendering */
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
          <img src="/logo.png" alt="" />
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
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </Wrapper>
  );
}
