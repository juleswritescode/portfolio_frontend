import React from 'react';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import HeaderImage from '../images/header.png';

var MessageStyles = styled.div`
  position: fixed;
  top: 50%;
  padding: 0 15vw 0 5vw;
  transform: translateY(-100%);

  img {
    width: clamp(100px, 100%, 950px);
    min-width: 100px;
    max-width: 950px;
    width: 100%;
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
  return (
    <HandStyles>
      <span role="img" aria-label="waving-hand">
        👋
      </span>
    </HandStyles>
  );
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
        <img
          src={HeaderImage}
          alt="Welcome to my page. I'm Julian, a Web Developer."
        />
        {/* <h3>Welcome to my page</h3>
        <h2>I'm Julian,</h2>
        <p>a Web Developer.</p> */}
      </MessageStyles>
      <FloatingText />
    </>
  );
}

/* h3 {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.625rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 10rem;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -0.025rem;
    background-image: url(${TextImageUrl});
    background-size: cover;
    background-position: 25% 25%;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
  }

  p {
    margin: 0 0;
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 1;
    letter-spacing: -0.025rem;
  } */
