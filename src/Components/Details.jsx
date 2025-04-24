import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "./Navbar"; // adjust path based on your file structure

function Details() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;
  const { addToCart } = useCart();

  const allProducts = state?.allProducts || [];

  const [selectedImg, setSelectedImg] = useState(
    product?.images?.[0] || product?.Img
  );
  const [selectedSize, setSelectedSize] = useState(null);

  const handleCardClick = (product) => {
    navigate("/product", {
      state: {
        product: product,
        allProducts: allProducts, // pass all products along to the details page
      },
    });
  };

  const otherProducts = allProducts.filter((p) => p.id !== product?.id);

  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }

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
            </span>{" "}
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
              const itemToAdd = {
                ...product,
                size: selectedSize,
              };
              addToCart(itemToAdd);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Other products section */}
      {otherProducts.length > 0 && (
        <>
          <h3 className="section-title">You may also like</h3>
          <div className="other-products">
            {otherProducts.map((p) => (
              <div
                key={p.id}
                className="other-card"
                onClick={() => handleCardClick(p)}
              >
                <img src={p.Img} alt={p.title} />
                <p>{p.title}</p>
                <span>{p.discountedPrice}</span>
              </div>
            ))}
          </div>
        </>
      )}
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

  .section-title {
    margin-top: 4rem;
    font-size: 20px;
  }

  .other-products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }

  .other-card {
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: 0.3s ease;
  }

  .other-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .other-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .section-title {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
