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
    title: "Cotton Tee",
    originalPrice: "₹ 699",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M", "L", "XL"],
    quantity: 15
  },
  {
    id: 2,
    hoverimg: "/front2.png",
    Img: "/back2.png",
    title: "T-shirt",
    originalPrice: "₹ 699",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"],
    quantity: 20
  },
  {
    id: 3,
    hoverimg: "/front3.png",
    Img: "/back3.png",
    title: "Designer Tee",
    originalPrice: "₹ 799",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M", "L"],
    quantity: 10
  },
  {
    id: 4,
    hoverimg: "/front4.jpg",
    Img: "/back4.png",
    title: "Graphic Tee",
    originalPrice: "₹ 749",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"],
    quantity: 12
  },
  {
    id: 5,
    hoverimg: "/front5.jpg",
    Img: "/back5.png",
    title: "Plain Tee",
    originalPrice: "₹ 599",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["L", "XL"],
    quantity: 18
  },
  {
    id: 6,
    hoverimg: "/front6.jpg",
    Img: "/back6.png",
    title: "Polo Tee",
    originalPrice: "₹ 649",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "M"],
    quantity: 9
  },
  {
    id: 7,
    hoverimg: "/front7.png",
    Img: "/back7.png",
    title: "Vintage Tee",
    originalPrice: "₹ 699",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "XL"],
    quantity: 14
  },
  {
    id: 8,
    hoverimg: "/front8.jpg",
    Img: "/back8.png",
    title: "Sporty Tee",
    originalPrice: "₹ 649",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["L", "XL"],
    quantity: 11
  },
  {
    id: 9,
    hoverimg: "/front9.png",
    Img: "/back9.png",
    title: "Active Tee",
    originalPrice: "₹ 699",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["M", "L", "S"],
    quantity: 17
  },
  {
    id: 10,
    hoverimg: "/front10.png",
    Img: "/back10.png",
    title: "Classic Tee",
    originalPrice: "₹ 749",
    discountedPrice: "₹ 499",
    description: "lorem ipsum is the word",
    brand: "Suaim",
    sizes: ["S", "L", "XL"],
    quantity: 13
  }
];

function CardList() {
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    // For example, showing related products that have similar sizes or same brand.
    const currentProduct = data[0]; // This could be dynamic based on the selected product

    const relatedProducts = data.filter(
      (product) =>
        product.id !== currentProduct.id && product.brand === currentProduct.brand
    );

    setOtherProducts(relatedProducts);
  }, []);

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

      {otherProducts.length > 0 && (
        <div className="other-products">
          <h3 className="section-title">You may also like</h3>
          {otherProducts.map((p) => (
            <div key={p.id} className="other-card" onClick={() => console.log(`Navigate to product ${p.id}`)}>
              <img src={p.Img} alt={p.title} />
              <p>{p.title}</p>
              <span>{p.discountedPrice}</span>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default CardList;
