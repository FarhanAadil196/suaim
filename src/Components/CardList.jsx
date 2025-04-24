// CardList.jsx
import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  .classlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    // background-color: #f9f9f9;
    border-radius: 10px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    width:100%;
  }

  @media (max-width: 768px) {
    .cards {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      justify-content: flex-start; /* align items to the start */
    }
  }
`;




const data = [
  {
    id: 1,
    hoverimg: "/front1.jpg",
    Img: "/back1.png",
    title: "Cotton Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    hoverimg: "/front2.png",
    Img: "/back2.png",
    title: "T-shirt",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    hoverimg: "/front3.png",
    Img: "/back3.png",
    title: "Designer Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M", "L"]
  },
  {
    id: 4,
    hoverimg: "/front4.jpg",
    Img: "/back4.png",
    title: "Graphic Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 5,
    hoverimg: "/front5.jpg",
    Img: "/back5.png",
    title: "Plain Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["L", "XL"]
  },
  {
    id: 6,
    hoverimg: "/front6.jpg",
    Img: "/back6.png",
    title: "Polo Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M"]
  },
  {
    id: 7,
    hoverimg: "/front7.png",
    Img: "/back7.png",
    title: "Vintage Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 8,
    hoverimg: "/front8.jpg",
    Img: "/back8.png",
    title: "Sporty Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["L", "XL"]
  },
  {
    id: 9,
    hoverimg: "/front9.png",
    Img: "/back9.png",
    title: "Active Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "S"]
  },
  {
    id: 10,
    hoverimg: "/front10.png",
    Img: "/back10.png",
    title: "Classic Tee",
    price: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "L", "XL"]
  }
];

  

function CardList() {
  return (
    <Wrapper>

    <div className='classlist'>
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
