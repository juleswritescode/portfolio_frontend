import React from 'react';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';

var MessageStyles = styled.div`
  position: fixed;
  top: 50%;
  padding-left: 8rem;
  transform: translateY(-100%);

  h3 {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.625rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 6rem;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.025rem;
  }

  p {
    margin: 0 0;
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 1;
    letter-spacing: -0.025rem;
  }
`;

var HandStyles = styled.div`
  animation: waveHand 500ms infinite forwards;
  transform: rotate(-10deg);
  font-size: 2rem;

  @keyframes waveHand {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }
`;

function WavingHand() {
  return <HandStyles>👋</HandStyles>;
}

export function WelcomeMessage() {
  var { toggleText, updateTextPosition, FloatingText } = useMouseText(
    <WavingHand />
  );

  return (
    <>
      <MessageStyles
        onMouseEnter={toggleText}
        onMouseLeave={toggleText}
        onMouseMove={updateTextPosition}
      >
        <h3>Welcome to my page</h3>
        <h2>I'm Julian,</h2>
        <p>a Web Developer.</p>
      </MessageStyles>
      <FloatingText />
    </>
  );
}
