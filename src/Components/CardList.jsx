// CardList.jsx
import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Wrapper = styled.div`
.classlist{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 10px;
}
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;


const data = [
    {
      id: 1,
      hoverimg: "/front1.jpg",
      Img: "/back1.png",
      title: "Product 1",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 2,
      hoverimg: "/front2.png",
      Img: "/back2.png",
      title: "Product 2",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 3,
      hoverimg: "/front3.png",
      Img: "/back3.png",
      title: "Product 3",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 4,
      hoverimg: "/front4.jpg",
      Img: "/back4.png",
      title: "Product 4",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 5,
      hoverimg: "/front5.jpg",
      Img: "/back5.png",
      title: "Product 5",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 6,
      hoverimg: "/front6.jpg",
      Img: "/back6.png",
      title: "Product 6",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 7,
      hoverimg: "/front7.png",
      Img: "/back7.png",
      title: "Product 7",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 8,
      hoverimg: "/front8.jpg",
      Img: "/back8.png",
      title: "Product 8",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 9,
      hoverimg: "/front9.png",
      Img: "/back9.png",
      title: "Product 9",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 10,
      hoverimg: "/front10.png",
      Img: "/back10.png",
      title: "Product 10",
      price: "₹ 499",
      description: "lorem ipsum is the word"
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
