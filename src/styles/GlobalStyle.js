import { createGlobalStyle } from 'styled-components';

export var GlobalStyle = createGlobalStyle`
    :root {
        --black: #333;
        --darkgray: #555;
        --gray: #777;
        --lightgray: #aaa; 
        --lightergray: hsla(0, 0%, 93%, .5);
        --white: #fff;
        --primary:#a8d5e2;
        --inner-mouse: #777;
        --outer-mouse: #aaa;
        --outer-mouse-size: 25px;
        --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 18px;
    }

    @media (hover: hover) and (pointer: fine) and (min-width: 1024px) {
        * {
            cursor: none !important;
        }
    }
    
    body {
        background-color: var(--white);
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--lightgray);
        &:focus-visible {
            outline: 1px dashed var(--primary);
        }
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
