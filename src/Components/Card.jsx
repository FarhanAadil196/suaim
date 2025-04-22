// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card {
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  .card h2 {
    font-size: 1.2rem;
    margin: 10px 0 5px;
  }

  .card p {
    font-size: 0.9rem;
    color: #555;
    margin: 5px 0;
  }

  .card .price {
    font-weight: bold;
    margin: 5px 0;
  }

  .card button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
  }

  .card button:hover {
    background-color: #555;
  }
`;

function Card({ product }) {
  return (
    <Wrapper>
      <div className="card" key={product.id}>
        <img src={product.img} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <Link to="/details" state={{ product }}>
          <button>View</button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Card;
