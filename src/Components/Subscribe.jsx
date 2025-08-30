import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #f7f7f7;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 1rem;
  margin: 4rem auto;
  max-width: 900px;

  .heading {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #111;
  }

  .subtext {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 999px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);

    input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: none;
      font-size: 1rem;
      outline: none;
    }

    button {
      
      border: none;
      padding: 0 2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #222;
      }
    }
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: ${({ showPopup }) => (showPopup ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 1rem;
    width: 400px;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    button {
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #222;
      }
    }
  }

  @media (max-width: 600px) {
    .heading {
      font-size: 1.8rem;
    }

    form {
      flex-direction: column;
      border-radius: 1rem;

      input, button {
        width: 100%;
        padding: 1rem;
        border-radius: 0;
      }

      button {
        border-radius: 0 0 1rem 1rem;
      }
    }
  }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = (e) => {
    // Prevent closing if the popup content is clicked
    if (e.target.className === 'popup') {
      setShowPopup(false);
      setEmail(''); // Reset email field after subscription
    }
  };

  const handleCloseButton = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling to the background
    setShowPopup(false);
    setEmail(''); // Reset email field
  };

  return (
    <Wrapper showPopup={showPopup}>
      <h2 className="heading">Subscribe for Offers</h2>
      <p className="subtext">Join the Suaim community and get exclusive deals straight to your inbox.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Subscribe</button>
      </form>
      
      <div className="popup" onClick={handleClosePopup}>
        <div className="popup-content">
          <h3>Thank you for subscribing!</h3>
          <p>We've sent a confirmation email to <strong>{email}</strong>. Please click on the link provided to confirm your subscription.</p>
          <button onClick={handleCloseButton}>Close</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Subscribe;
