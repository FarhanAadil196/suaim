import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .footer {
    background-color: var(--clr-dark);
    color: var(--clr-bg);
    padding: 1.5rem;
    text-align: center;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    .links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;

      a {
        color: var(--clr-bg);
        text-decoration: none;
      }
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 1rem;

      .links {
        gap: 1rem;
      }
    }

    @media (max-width: 480px) {
      flex-direction: column;
      font-size: 0.6rem;
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <footer className="footer">
        <p>&copy; 2023 suaim</p>

        <div>
          <strong>Quick link 🔗</strong>
          <div className="links">
            <a href="#search">Search</a>
            <a href="#about">About Us</a>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
