import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`


.Cat-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    margin: 10px;
    overflow-x: scroll;

    color: var(--clr-dark);
    gap:15px;
}
    .Cat-container::-webkit-scrollbar {
        display: none;
    }

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
      box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    background-color: var(--clr-white);
    color: var(--clr-dark);
    position:relative;
    
  }

  .category img {
  width: 200px;
  height: 250px;
  display: block;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3); /* corrected alpha */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}


  .category p {
  position: absolute;
  top:5px;
  left:5px;
`;

const categories = [
  
  {
    id: 1,
    name: "Half T-shirt",
    img: "/front2.png",
    link: "/halftshirt",
  },
  {
    id: 2,
    name: "Hoodies",
    img: "/front7.png",
    link: "/hoodies",
  },
  {
    id: 3,
    name: "Polo T-shirt",
    img: "/front1.jpg",
    link: "/polotshirt",
  },
  {
    id: 4,
    name: "Oversized T-shirt",
    img: "/front5.jpg",
    link: "/oversizedtshirt",
  },
  {
    id: 5,
    name: "Sweatshirts",
    img: "/front8.jpg",
    link: "/sweatshirts",
  },
];

function Category() {
  return (
    <Wrapper>
      <div className="Cat-container">
        {categories.map((category) => (
          <a key={category.id} href={category.link}>
            <div key={category.id} className="category">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          </a>
        ))}
      </div>
    </Wrapper>
  );
}

export default Category;
