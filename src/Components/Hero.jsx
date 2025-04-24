import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

  .hero{

    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
    text-align: center;
  }

  .hero-text{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding:1rem;
  }

  .hero-text h2{  
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hero-text p{
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .hero-text button{
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
   
    cursor: pointer;
  }
@media (max-width: 768px) {
  .hero-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .hero-text h2{
    font-size: 2rem;
  }
  .hero-text p{
    font-size: 1.2rem;
  }
  .hero-text button{
    font-size: 1.2rem;
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
    </section>
    </Wrapper>
  );
}

