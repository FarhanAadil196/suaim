import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--clr-dark);
  color: var(--clr-bg);
  font-family: var(--font-primary);
  padding: 1rem;
  height:10vh;
  text-align: center;
  // font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;

  }
  @media (max-width: 480px) {
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
