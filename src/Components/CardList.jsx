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
      img: "public/front.png",
      hoverImg: "public/back1.png",
      title: "Product 1",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 2,
      img: "public/front.png",
      hoverImg: "public/back2.png",
      title: "Product 2",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 3,
      img: "public/front.png",
      hoverImg: "public/back3.png",
      title: "Product 3",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 4,
      img: "public/front.png",
      hoverImg: "https://placehold.co/200x250?text=Back",
      title: "Product 4",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 5,
      img: "public/front.png",
      hoverImg: "https://placehold.co/200x250?text=Back",
      title: "Product 5",
      price: "₹ 499",
      description: "lorem ipsum is the word"
    },
    {
      id: 6,
      img: "public/front.png",
      hoverImg: "https://placehold.co/200x250?text=Back",
      title: "Product 6",
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
