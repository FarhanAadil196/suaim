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
    img: "https://placehold.co/200x250",
    title: "product 1",
    price: "₹ 499",
    description: "lorem ipsmu is the wird"
  },
  {
    id: 2,
    img: "https://placehold.co/200x250",
    title: "product 1",
    price: "₹ 499",
    description: "lorem ipsmu is the wird"
  },
  {
    id: 3,
    img: "https://placehold.co/200x250",
    title: "product 1",
    price: "₹ 499",
    description: "lorem ipsmu is the wird"
  },
  {
    id: 4,
    img: "https://placehold.co/200x250",
    title: "product 1",
    price: "₹ 499",
    description: "lorem ipsmu is the wird"
  },
  {
    id: 5,
    img: "https://placehold.co/200x250",
    title: "product 1",
    price: "₹ 499",
    description: "lorem ipsmu is the wird"
  },
  {
    id: 6,
    img: "https://placehold.co/200x250",
    title: "product 1",
    price: "₹ 499",
    description: "lorem ipsmu is the wird"
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
