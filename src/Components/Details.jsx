import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Details() {
  const { state } = useLocation();
  const product = state?.product;

  // Check before using product
  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }

  const [selectedImg, setSelectedImg] = useState(product.images?.[0] || product.Img);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <Wrapper>
      <div className="product-details">
        <div className="image-section">
          <img src={selectedImg} alt="Product" className="main-img" />
          <div className="thumbnails">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumb ${selectedImg === img ? "active" : ""}`}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <p className="brand">{product.brand}</p>
          <h2 className="title">{product.title}</h2>
          <p className="price">{product.price}</p>

          {product.colors && (
            <>
              <p className="label">Color</p>
              <div className="colors">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="color-circle"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </>
          )}

          {product.sizes && (
            <>
              <p className="label">Size</p>
              <div className="sizes">
                {product.sizes.map((size, i) => (
                  <div
                    key={i}
                    className={`size-box ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </>
          )}

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Details;

// Styled-components wrapper
const Wrapper = styled.div`
  .product-details {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
  }

  .image-section {
    flex: 1;
  }

  .main-img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
  }

  .thumbnails {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .thumb {
    width: 60px;
    height: 60px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid transparent;
  }

  .thumb.active {
    border-color: #000;
  }

  .info-section {
    flex: 1;
  }

  .brand {
    font-size: 14px;
    color: #888;
  }

  .title {
    font-size: 24px;
    margin: 0.5rem 0;
  }

  .price {
    font-size: 20px;
    color: green;
    font-weight: bold;
  }

  .label {
    margin-top: 1.5rem;
    font-weight: bold;
  }

  .colors {
    display: flex;
    gap: 10px;
    margin-top: 0.5rem;
  }

  .color-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  .sizes {
    display: flex;
    gap: 10px;
    margin-top: 0.5rem;
  }

  .size-box {
    padding: 5px 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 4px;
  }

  .size-box.selected {
    background-color: #000;
    color: #fff;
  }

  .add-to-cart {
    margin-top: 2rem;
    padding: 10px 20px;
    background-color: #111;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
`;

