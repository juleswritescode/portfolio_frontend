import { createGlobalStyle } from 'styled-components';

export var GlobalStyle = createGlobalStyle`
    :root {
        --black: #333;
        --darkgray: #555;
        --gray: #777;
        --lightgray: #aaa; 
        --lightergray: hsla(0, 0%, 93%, .5);
        --white: #fff;
        --primary: #e87234;
        --inner-mouse: #777;
        --outer-mouse: #aaa;
        --outer-mouse-size: 25px;
    }

    html {
        font-size: 18px;
    }

    @media (hover: hover) and (pointer: fine) {
        * {
            cursor: none !important;
        }
    }
    
    body {
        background-color: var(--white);
        letter-spacing: 0.05rem;
        overflow-x: hidden;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: currentColor;
        &:focus-visible {
            outline: 1px dashed var(--primary);
        }
    }

    svg {
        font-size: 2rem;
        color: var(--darkgray);
        &:hover {
            color: var(--primary);
        }
    }
    
    .gatsby-image-wrapper, img {
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
    }
    
`;
