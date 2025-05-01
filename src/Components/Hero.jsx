import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .hero {
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
  }

  .hero-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
  }

  .hero-img {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.3));
      z-index: 3;
      height:100%;
      object-fit: contain;
    }
  }

  .hero-text h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .hero-text p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  .hero-text button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: var(--clr-primary);
    color: var(--clr-bg);
    cursor: pointer;
    transition: 0.3s;
  }

  .hero-text button:hover {
    background-color: var(--clr-dark);
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
      height: auto;
    }

    .hero-text {
      align-items: center;
      text-align: center;
    }

    .hero-text h2 {
      font-size: 2rem;
    }

    .hero-text p {
      font-size: 1.2rem;
    }

    .hero-text button {
      font-size: 1.2rem;
    }

    .hero-img img {
      max-width: 80%;
    }
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <section className="hero">
        <div className="hero-text">
          <h2>Minimal Streetwear</h2>
          <p>Shop the exclusive T-shirts & hoodies</p>
          <button>Shop Now</button>
        </div>
        <div className="hero-img">
          <img src="/hero-img.png" alt="Streetwear hero" />
        </div>
      </section>
    </Wrapper>
  );
}
