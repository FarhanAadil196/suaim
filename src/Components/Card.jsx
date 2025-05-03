// Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .card {
    width: 220px;
    height:400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    margin: 10px;
    overflow: hidden;
    
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 260px;
    border-radius: 6px;
    overflow: hidden;
  }

  .image-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.8s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%);
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
    font-size: 1rem;
    margin: 10px 0 5px;
  }

  .card p {
    font-size: 0.9rem;
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
        <div className="text-container">

        <h2>{product.title}</h2>

        <p className="price">
          <span style={{ textDecoration: "line-through", color: "#888" }}>
            {product.originalPrice}
          </span>{" "}
          &nbsp;
          <span style={{ fontWeight: "bold", color: "#111" }}>
            {product.discountedPrice}
          </span>
        </p>
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
      </div>
    </Wrapper>
  );
}

export default Card;
