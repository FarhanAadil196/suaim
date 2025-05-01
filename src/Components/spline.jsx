import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Send it to the background */
  overflow: hidden;
`;

export default function Background() {
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/A30HvsrYrTI3oi-J/scene.splinecode" />
      </Wrapper>
  )
}

