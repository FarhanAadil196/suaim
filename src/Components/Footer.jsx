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

    .email-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      }
    .input {
      display: flex;
      gap: 0.5rem;
    }
    input[type="email"] {
      padding: 0.6rem 1rem;
      border-radius: 6px;
      border: none;
      max-width: 280px;
      }
      button {
        background-color: var(--clr-bg);
        color: var(--clr-primary);
        }
        
        @media (max-width: 768px) {
          font-size: 0.8rem;
          padding: 1rem;
          
          .links {
            gap: 1rem;
            }
            
            input[type="email"] {
              width: 90%;
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

        <div className="email-section">
          <label htmlFor="email">Subscribe to our email</label>
          <div className="input">
            <input type="email" id="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
