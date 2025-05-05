// Subscribe.jsx

import React from 'react';
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
      background-color: #111;
      color: #fff;
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
  return (
    <Wrapper>
      <h2 className="heading">Subscribe for Offers</h2>
      <p className="subtext">Join the Suaim community and get exclusive deals straight to your inbox.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </Wrapper>
  );
};

export default Subscribe;
