import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../images/header.png';

var MessageStyles = styled.div`
    padding-top: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: auto;

    img {
        object-fit: contain;
        width: clamp(100px, 100%, 950px);
        min-width: 100px;
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

export function WelcomeMessage() {
    return (
        <>
            <MessageStyles>
                <img
                    src={HeaderImage}
                    alt="Welcome to my page. I'm Julian, a Web Developer."
                />
            </MessageStyles>
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
