import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../images/header.png';

var MessageStyles = styled.div`
    padding-top: 4rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: auto;

    img {
        object-fit: contain;
        width: clamp(100px, 100%, 950px);
        min-width: 100px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

var MobileMessageStyles = styled.div`
    padding-top: 1.5rem;
    text-align: center;
    width: 100%;

    h1,
    h2,
    h3 {
        margin-bottom: 0.2rem;
    }

    h3 {
        color: var(--primary);
        font-weight: 500;
    }

    h2 {
        color: var(--darkgray);
    }

    h1 {
        color: var(--black);
        line-height: 1;
    }

    hr {
        margin: 1rem 0;
        opacity: 0.75;
        border: 0.5px solid var(--lightgray);
    }

    @media (min-width: 768px) {
        display: none;
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
            <MobileMessageStyles>
                <h3>Welcome to my Page</h3>
                {/* <h1>
                    &lt;<span>Julian Domke</span>/&gt;
                </h1> */}
                <h1>Julian Domke</h1>
                <h2>Web Developer</h2>
                <hr />
            </MobileMessageStyles>
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
