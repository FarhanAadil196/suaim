import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
    @media(max-width: 480px) {
      font-size: 0.8rem;
    }
`;

const Banner = () => {
  return (
    <Wrapper>
      <p>Get 20% off on your first purchase!</p>
    </Wrapper>
  );
};

export default Banner;
