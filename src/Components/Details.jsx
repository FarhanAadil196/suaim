import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProductToCheckout } from "./checkoutActions";

function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

  const [selectedImg, setSelectedImg] = useState(
    product?.images?.[0] || product?.Img
  );
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }

  const handleAddToCheckout = () => {
    const selectedProductDetails = {
      id: product.id,
      title: product.title,
      brand: product.brand,
      discountedPrice: product.discountedPrice,
      originalPrice: product.originalPrice,
      description: product.description,
      selectedImg,
      selectedSize,
      quantity: 1,
    };
console.log("Selected product being dispatched:", selectedProductDetails);
    dispatch(addProductToCheckout(selectedProductDetails));
    navigate("/checkout");
  };

  return (
    <Wrapper>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>

      <div className="product-details">
        <div className="image-section">
          <img src={selectedImg} alt="Product" className="main-img" />
          <div className="thumbnails">
            {(product.images || [product.Img, product.hoverimg]).map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  className={`thumb ${selectedImg === img ? "active" : ""}`}
                  onClick={() => setSelectedImg(img)}
                />
              )
            )}
          </div>
        </div>

        <div className="info-section">
          <p className="brand">{product.brand}</p>
          <h2 className="title">{product.title}</h2>
          <p className="price">
            <span style={{ textDecoration: "line-through", color: "#888" }}>
              {product.originalPrice}
            </span>
            &nbsp;
            <span style={{ fontWeight: "bold", color: "#111" }}>
              {product.discountedPrice}
            </span>
          </p>

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
                    className={`size-box ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </>
          )}

          <button
            className="add-to-cart"
            onClick={() => {
              handleAddToCheckout();
              navigate("/cart");
            }}
            disabled={!selectedSize && product.sizes?.length}
          >
            {product.sizes?.length && !selectedSize
              ? "Select Size"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Details;

const Wrapper = styled.div`
  padding: 2rem;

  .back-btn {
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .product-details {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  .image-section {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }

  .main-img {
    width: 100%;
    max-width: 360px;
    max-height: 410px;
    border-radius: 8px;
    object-fit: contain;
  }

  .thumbnails {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-direction: column;

    @media (max-width: 940px) {
      flex-direction: row;
    }
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
    font-size: 35px;
    color: #888;
  }

  .title {
    font-size: 35px;
    margin: 0.5rem 0;
  }

  .description {
    margin: 0.5rem 0;
    font-size: 16px;
    color: #333;
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
    transition: 0.3s;
  }

  .add-to-cart:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
    
`;
