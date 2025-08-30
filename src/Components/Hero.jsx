import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import shop from "../data/shop";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Wrapper = styled.div`
  .hero {
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
      @media (max-width: 480px) {
        width: 100%;
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
    color: --clr-secondary;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: --clr-primary;
  }

  .hero-text button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.wrapper {
  flex:1;
}
  .container {
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
  }

  .card {
    width: 80px;
    border-radius: 2rem;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    overflow: hidden;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
box-shadow: inset -11px -11px 13px 0px rgba(0, 0, 0,0.8 );
}

  .card > .row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
  }

  .card > .row > .icon {
    background: #223;
    color: white;
    border-radius: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
  }

  .card > .row > .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 520px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    color: white;
    transition: all 0.3s ease;
  }

  .description p {
    
    padding-top: 5px;
  }

  .description h4 {
    text-transform: uppercase;
  }

  input {
    display: none;
  }

  input:checked + label {
    width: 300px;
  }

  input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  label[for="c1"] {
    background-image: url("./front1.jpg");
  }
  label[for="c2"] {
    background-image: url("./front2.png");
  }
  label[for="c3"] {
    background-image: url("./front3.png");
  }
  label[for="c4"] {
    background-image: url("./front4.jpg");
  }
    @media (max-width: 1024px) {
    .container {
      justify-content: center;
    }

    .card {
      width: 60px;
      margin: 0 6px;
    }

    input:checked + label {
      width: 250px;
    }

    .description {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 1rem;
      height:250px;

    }

    .card {
      flex: 0 0 auto;
      scroll-snap-align: center;
      width: 30px;
      margin: 0 5px;
    }

    input:checked + label {
      width: 220px;
    }

    .description {
      width: 100%;
      padding: 0 10px;

    }

    .hero-text h2 {
      font-size: 2.2rem;
    }

    .hero-text p {
      font-size: 1rem;
    }

    .hero-text button {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 20px;
    }

    input:checked + label {
      width: 150px;
    }

    .hero-text h2 {
      font-size: 1.6rem;
    }

    .hero-text p {
      font-size: 0.95rem;
    }

    .description {
      height: auto;
    }
  }
`;

export default function Hero() {
  const scope = useRef(null);
  const textRef = useRef([]);
  const [selectedCard, setSelectedCard] = useState("c1"); // set initial active card

  useGSAP(
    () => {
      gsap.from(textRef.current.filter(Boolean), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope }
  );

  return (
    <Wrapper ref={scope}>
      <section className="hero">
        <div className="hero-text">
          <h2 ref={(el) => (textRef.current[0] = el)}>
            Make Your Look More Perfect!
          </h2>
          <p ref={(el) => (textRef.current[1] = el)}>
            Fashion is the armor to survive the reality of everyday life :
          </p>
          <button ref={(el) => (textRef.current[2] = el)}>
            <Link to="/shop">
            Start Shopping
            </Link>
          </button>
        </div>

        <div className="wrapper">
          <div className="container">
            {["c1", "c2", "c3", "c4"].map((id, index) => (
              <React.Fragment key={id}>
                <input
                  type="radio"
                  name="slide"
                  id={id}
                  checked={selectedCard === id}
                  onChange={() => setSelectedCard(id)}
                />
                <label
                  htmlFor={id}
                  className="card"
                  style={{ backgroundImage: `url('./front${index + 1}.jpg')` }}
                >
                  <div className="row">
                    <div className="icon">{index + 1}</div>
                    <div className="description">
                      <h4>
                        {
                          [
                            "Winter",
                            "Digital Technology",
                            "Globalization",
                            "New Technologies",
                          ][index]
                        }
                      </h4>
                      <p>
                        {
                          [
                            "Winter has so much to offer - creative activities",
                            "Gets better every day - stay tuned",
                            "Help people all over the world",
                            "Space engineering becomes more and more advanced",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

