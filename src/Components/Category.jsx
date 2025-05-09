import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";  // Import the GSAP hook

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  .Cat-container {
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    gap: 15px;
    color: var(--clr-dark);
  }

  h3 {
    color: var(--clr-dark);
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }

  .cat-1 {
    flex: 1;
    height: 315px;
    background-color: var(--clr-white);
    background-image: url("/front11.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    text-align: center;
    opacity: 0;  // Start hidden for animation
    transform: translateY(30px); // Start off slightly down
    transition: all 0.5s ease-out;
  }

  .cat-cont-2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .cat-2,
    .cat-3 {
      height: 150px;
      background-color: var(--clr-white);
      border-radius: 10px;
      background-size: cover;
      background-position: right;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 1rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.5s ease-out;
    }

    .cat-2 {
      background-image: url("/cat-1.jpg");
    }

    .cat-3 {
      background-image: url("/cat-2.jpg");
    }
  }

  /* Responsive Styling */
  @media (max-width: 768px) {
    .Cat-container {
      flex-direction: column;
      width: 90%;
    }

    .cat-1,
    .cat-cont-2 {
      width: 100%;
    }

    .cat-1 {
      height: 250px;
    }

    .cat-2,
    .cat-3 {
      height: 140px;
    }
  }

  @media (max-width: 480px) {
    .cat-1 {
      height: 200px;
      h3 {
        font-size: 1rem;
      }

      button {
        font-size: 0.9rem;
        padding: 0.4rem 1rem;
      }
    }

    .cat-2,
    .cat-3 {
      height: 120px;
    }
  }
`;

function Category() {
  const cat1Ref = useRef(null);
  const cat2Ref = useRef(null);
  const cat3Ref = useRef(null);

  useGSAP(
    () => {
      gsap.to(cat1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(cat2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.to(cat3Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    },
    { scope: cat1Ref }
  );

  return (
    <Wrapper>
      <div className="Cat-container">
        <div ref={cat1Ref} className="cat-1">
          <h3>Exclusive Collection</h3>
          <Link to="/gallery">
            <button>View</button>
          </Link>
        </div>
        <div className="cat-cont-2">
          <div ref={cat2Ref} className="cat-2">
            <h3>Trending Collections</h3>
          <Link to="/shop">
            <button>View</button>
          </Link>
          </div>
          <div ref={cat3Ref} className="cat-3">
            <h3>Best Sellers</h3>
          <Link to="/shop">
            <button>View</button>
          </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Category;
