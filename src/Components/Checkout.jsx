// src/components/Checkout.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCheckout } from "./checkoutActions"; // Make sure this is the correct action
import styled from "styled-components";
import Navbar from "./Navbar";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.checkout.checkoutItems);

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    const priceRaw = item.discountedPrice ?? item.price ?? 0;
    const price = parseFloat(priceRaw.toString().replace(/[^\d.]/g, "")); // removes ₹ or symbols
    const quantity = parseInt(item.quantity ?? 1, 10);
    const totalForItem =
      !isNaN(price) && !isNaN(quantity) ? price * quantity : 0;
    const itemTotal =
      !isNaN(price) && !isNaN(quantity)
        ? (price * quantity).toFixed(2)
        : "0.00";
    return acc + totalForItem;
  }, 0);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const { name, address, email, phone } = form;
    if (!name || !address || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    const orderData = {
      customer: form,
      products: cartItems,
      total: subtotal,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("order", JSON.stringify(orderData));
    dispatch(clearCheckout()); // Fixed action name
    setForm({ name: "", address: "", email: "", phone: "" });
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Navbar />
      {submitted ? (
        <div className="submitted">
          <video autoPlay loop muted>
            <source src="/animation.mp4" type="video/mp4" />
          </video>
          <p>Thank you for your purchase!</p>
          <button onClick={() => setSubmitted(false)}>Back to Shop</button>
        </div>
      ) : (
        <div className="checkout">
          <form>
          <h2>Checkout</h2>
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
          <div className="summary">
            <h3>Order Summary</h3>
            {cartItems.map((item) => {
              const priceRaw = item.discountedPrice ?? item.price ?? 0;
              const price = parseFloat(
                priceRaw.toString().replace(/[^\d.]/g, "")
              );
              const quantity = parseInt(item.quantity ?? 1, 10);
              const itemTotal =
                !isNaN(price) && !isNaN(quantity)
                  ? (price * quantity).toFixed(2)
                  : "0.00";

              return (
                <div key={item.id} className="summary-item">
                  <img src={item.selectedImg} alt={item.title} />
                  <p>
                    {item.title} x {quantity} = ₹{itemTotal}
                  </p>

                </div>
              );
            })}

            <h3>Total: ₹{subtotal.toFixed(2)}</h3>
            <h4>Shipping: Free</h4>
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
.submitted {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  video{
    width: 150px;
    height: 150px;
  }
  p {
    margin-top: 1rem;
  }
  button {
    margin-top: 1rem;
  }
}
  .checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 1rem;
    flex-wrap: wrap;
    @media (max-width: 550px) {
      flex-direction: column;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    input {
      margin-bottom: 1rem;
      padding: 0.5rem;
    }
  }
  .summary {
    margin-top: 2rem;
    flex: 1;
    .summary-item {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: ;
      align-items: center;
    }
    img {
      width: 50px;
    }
    h3 {
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
    }
  }
`;
