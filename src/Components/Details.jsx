// Details.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
.details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.details img {
  max-width: 350px;
  max-height:310px;
}
  .text{
      font-size: 20px;
    line-height: 3;
    display: flex
;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }
`;

function Details() {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  if (!product) {
    return (
      <Wrapper>
        <div className="details">
          <p>No product data found.</p>
          <Link to="/">Back</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Navbar />

      <div className="details">
        <div className="img-b">

      <Link onClick={() => navigate(-1)}><p>⬅</p></Link>
        <img src={product.hoverImg} alt={product.title} />
        </div>
        <div className="text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Details;
