// Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .card {
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    margin: 10px;
    overflow: hidden;
    background-color: var(--clr-white);
    color: var(--clr-dark);
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 6px;
    overflow: hidden;
  }

  .image-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease;
  }

  .hover-img {
    opacity: 0;
  }

  .image-container:hover .hover-img {
    opacity: 1;
  }

  .image-container:hover .main-img {
    opacity: 0;
  }

  .card h2 {
    font-size: 1.2rem;
    margin: 10px 0 5px;
  }

  .card p {
    font-size: 0.9rem;
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
    cursor: pointer;
    border-radius: 5px;
  }
`;

function Card({ product, allProducts }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="card" key={product.id}>
        <div className="image-container">
          <img src={product.Img} alt={product.title} className="main-img" />
          <img
            src={product.hoverimg}
            alt={`${product.title} back`}
            className="hover-img"
          />
        </div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <button
          onClick={() =>
            navigate("/product", {
              state: { product, allProducts },
            })
          }
        >
          View
        </button>
      </div>
    </Wrapper>
  );
}

export default Card;
