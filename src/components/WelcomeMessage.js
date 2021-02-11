import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../images/header.png';
import MobileHeaderImage from '../images/header-mobile.png';

var MessageStyles = styled.div`
    padding-top: 4rem;

    img {
        object-fit: contain;
        width: 100%;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

var MobileMessageStyles = styled.div`
    padding-top: 2rem;
    img {
        object-fit: contain;
        width: 100%;
    }

    hr {
        opacity: 0.5;
        border-color: var(--lightgray);
        margin-top: 1rem;
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
                <img
                    src={MobileHeaderImage}
                    alt="Welcome to my page. I'm Julian, a Web Developer."
                />
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
