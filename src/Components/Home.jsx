import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Hero from './Hero';
import Banner from './Banner';
import CardList from './CardList';


const Wrapper = styled.div`
  background: #f9f9f9;
  color: #111;
`;

export default function Home() {
  return (
    <Wrapper>
      <Banner />
        <Navbar />
      <Hero/>
      <CardList />
    </Wrapper>
  );
}
