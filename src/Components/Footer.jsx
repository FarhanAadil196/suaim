import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.footer {
    padding: .7rem;
    text-align: center;
    font-size: 1.1rem;
    @media (max-width: 768px) {
      font-size: .8rem;
      padding: 0.5rem;
    }
      @media(max-width: 480px) {
        font-size: 0.5rem;
}
  }
        `;

function Footer() {
  return (
    <Wrapper>

    <footer className="footer">
      <p>&copy; 2023 suaim</p>
    </footer>
    </Wrapper>
  )
}

export default Footer