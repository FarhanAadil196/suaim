import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCheckout, removeProductFromCheckout } from "./checkoutActions"; 


function Checkout() {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector((state) => state.checkout.checkoutProducts);

  const Navigate = useNavigate();
  const product = useSelector((state) => state.product.selectedProduct);
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState("");
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    const storedCheckoutProducts = JSON.parse(localStorage.getItem("checkout_products"));
    if (storedCheckoutProducts) {
      storedCheckoutProducts.forEach((product) => {
        dispatch(addProductToCheckout(product)); // Add stored products to Redux
      });
    }
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addProductToCheckout(product));
  };
  const handleRemoveProduct = (productId) => {
    dispatch(removeProductFromCheckout(productId));
  };
  const subtotal = productsToShow.reduce((acc, prod) => acc + prod.price, 0); // Calculate total price

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleOrder = () => {
    const { name, address, email, phone } = form;
    if (!name || !address || !email || !phone) {
      showToast("❌ Please fill in all fields");
      return;
    }

    const orderData = {
      customer: form,
      products: productsToShow,
      total: subtotal,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("suaim_order", JSON.stringify(orderData));
    localStorage.removeItem("checkout_products");  // Clear cart after order is placed

    setForm({ name: "", address: "", email: "", phone: "" });
    setLocalProducts([]);  // Clear local products after the order
    setSubmitted(true);
    showToast("✅ Order placed successfully!");
  };

  const addMoreProducts = () => {
    Navigate("/shop"); // Navigate to the shop to add more products
  };

  return (
    <Wrapper>
      <Navbar />
      {toast && <div className="toast">{toast}</div>}
      <div className="container">
        <h1>Suaim</h1>
        <div className="checkout">
          <div className="shipping">
            <h2>Shipping Information</h2>
            <form>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="Full name"
                required
              />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleInput}
                placeholder="Address"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                placeholder="Email address"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInput}
                placeholder="Phone"
                required
              />
            </form>
          </div>

          <div className="summary">
            <h2>Order Summary</h2>
            {checkoutProducts.length > 0 ? (
          checkoutProducts.map((product) => (
            <div key={product.id}>
              <img src={product.Img} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No items in the checkout</p>
        )}
            <div className="summary-footer">
              <div className="row">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(1)}</span>
              </div>
              <div className="row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="row total">
                <strong>Total</strong>
                <strong>{subtotal.toFixed(1)}</strong>
              </div>
            </div>

            <button className="AddMore" onClick={addMoreProducts}>
              Add More Products
            </button>
          </div>
        </div>

        <button
          className="place-order"
          onClick={handleOrder}
          disabled={productsToShow.length === 0}
        >
          Place Order
        </button>

        {submitted && (
          <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>
            ✅ Thank you for your purchase!
          </p>
        )}
      </div>
    </Wrapper>
  );
}

export default Checkout;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  min-height: 100vh;
  .container {
    max-width: 1200px;
    margin: 2rem auto;
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.08);
  }
  h1 {
    text-align: center;
    font-size: 2.75rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    color: #333;
    margin-bottom: 2rem;
  }
  .checkout {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .shipping,
  .summary {
    flex: 1;
    background: #fff;
    border-radius: 10px;
    padding: 1.5rem 2rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.04);
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #444;
  }
  form input {
    width: 100%;
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s ease;
    &:focus {
      border-color: #b57b4a;
      outline: none;
      box-shadow: 0 0 0 2px rgba(181, 123, 74, 0.2);
    }
  }
  .product {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
  }
  img {
    border-radius: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 1rem;
  }
  .details p {
    margin: 0;
    font-weight: 600;
  }
  .details span {
    color: #888;
    font-size: 0.875rem;
  }
  .price {
    margin-left: auto;
    font-weight: 500;
    font-size: 1rem;
    color: #333;
  }
  .summary-footer {
    border-top: 1px solid #eee;
    padding-top: 1rem;
  }
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #444;
  }
  .total {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .place-order {
    display: block;
    margin: 2rem auto 0 auto;
    background: #b57b4a;
    color: white;
    padding: 0.9rem 2.2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
      background: #a06838;
    }
  }
  @media (max-width: 768px) {
    .checkout {
      flex-direction: column;
    }
  }
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    z-index: 999;
    animation: fadeInOut 3s ease-in-out;
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
