import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  .classlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    width: 100%;
  }

  .other-products {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .cards {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      justify-content: flex-start;
    }
  }
`;

export const data = [
  {
    id: 1,
    hoverimg: "/front1.jpg",
    Img: "/back1.png",
    title: "Triple Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M", "L", "XL"],
    quantity: 15
  },
  {
    id: 2,
    hoverimg: "/front2.jpg",
    Img: "/back2.png",
    title: "Deep Dive Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"],
    quantity: 20
  },
  {
    id: 3,
    hoverimg: "/front3.jpg",
    Img: "/back3.png",
    title: "Shinobi's Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M", "L"],
    quantity: 10
  },
  {
    id: 4,
    hoverimg: "/front4.jpg",
    Img: "/back4.png",
    title: "Gothic Faith Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"],
    quantity: 12
  },
  {
    id: 5,
    hoverimg: "/front5.jpg",
    Img: "/back5.png",
    title: "Flame Script Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["L", "XL"],
    quantity: 18
  },
  {
    id: 6,
    hoverimg: "/front6.jpg",
    Img: "/back6.png",
    title: "Street Racer Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M"],
    quantity: 9
  },
  {
    id: 7,
    hoverimg: "/front7.png",
    Img: "/back7.png",
    title: "Rebel Spirit Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"],
    quantity: 14
  },
  {
    id: 8,
    hoverimg: "/front8.jpg",
    Img: "/back8.png",
    title: "Fallen Angel Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["L", "XL"],
    quantity: 11
  },
  {
    id: 9,
    hoverimg: "/front9.png",
    Img: "/back9.png",
    title: "Mountains Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "S"],
    quantity: 17
  },
  {
    id: 10,
    hoverimg: "/front10.png",
    Img: "/back10.png",
    title: "Clandestine Tee",
    originalPrice: "₹ 499",
    discountedPrice: "₹ 149",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "L", "XL"],
    quantity: 13
  }
];

function CardList() {
  return (
    <Wrapper>
      <div className="classlist">
        <h3>Product List</h3>
        <div className="cards">
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>

      
    </Wrapper>
  );
}

export default CardList;
