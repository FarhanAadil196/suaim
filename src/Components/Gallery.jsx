// src/pages/GalleryPage.jsx
import React from 'react';

import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';


const images = [
 "/gallery1.png",
 "/gallery3.png",
 "/gallery4.png",
 "/gallery5.png",
 "/gallery6.png",
 "/gallery7.png",
 "/gallery8.png",
 "/gallery9.png",
 "/gallery10.png",
 "/gallery12.png",
 "/gallery13.png",
 "/gallery14.png",
 "/gallery15.png"
];

const GalleryPage = () => {
  return (
    <Wrapper>
        <Navbar />
      <div className="container">
        <h1 className="title">Gallery</h1>
        <p className="subtitle">Explore our latest collection</p>

        <div className="grid">
          {images.map((src, i) => (
            <div className="card" key={i}>
              <img src={src} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default GalleryPage;

const Wrapper = styled.section`
  min-height: 100vh;
  .container {
    text-align: center;
  }

  .title {
    font-size: 2.5rem;
    color: #111;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
.grid{
columns: 300px;
.card{
 
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover{
      cursor: pointer;
      transform: scale(1.15);
    }
      @media (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
      }
  }
}}
`;
