import React, { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Wrapper = styled.div`
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    flex-wrap: wrap;
    gap: 2rem;
    background-color: #f6f6f6;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .hero-text {
    flex: 1;
    max-width: 500px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .hero-text h2 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
  }

  .hero-text button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cards {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: nowrap;
    overflow-x: auto;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }

  .card {
    min-width: 200px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    padding: 1rem;
    transition: transform 0.3s;
    text-align: center;

    @media (max-width: 480px) {
      min-width: 150px;
    }
  }

  .card img {
    width: 100%;
    border-radius: 10px;
  }

  .card p {
    margin-top: 1rem;
    font-weight: 500;
  }
`;

export default function Hero() {
  const cardsRef = useRef([]);
  const textRef = useRef([]);

  const cardData = [
    { id: 1, img: "/front1.jpg", text: "Shop Now" },
    { id: 2, img: "/front2.png", text: "Shop Now" },
    { id: 3, img: "/front3.png", text: "Shop Now" },
    { id: 4, img: "/front4.jpg", text: "Shop Now" },
    { id: 5, img: "/front5.jpg", text: "Shop Now" },
  ];

  useGSAP(() => {
    // Animate hero text elements
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    });

    // Animate cards
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <Wrapper>
      <section className="hero">
        <div className="hero-text">
          <h2 ref={(el) => (textRef.current[0] = el)}>Make Your Look More Perfect!</h2>
          <p ref={(el) => (textRef.current[1] = el)}>
            Fashion is the armor to survive the reality of everyday life :)
          </p>
          <button ref={(el) => (textRef.current[2] = el)}>Start Shopping</button>
        </div>
        <div className="cards">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={card.img} alt={`model-${card.id}`} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
