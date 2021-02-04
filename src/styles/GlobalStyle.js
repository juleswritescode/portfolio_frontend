import { createGlobalStyle } from 'styled-components';

export var GlobalStyle = createGlobalStyle`
    :root {
        --black: #333;
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

    * {
        cursor: none !important;
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
    }

    svg {
        font-size: 2rem;
        color: var(--black);
        &:hover {
            color: var(--primary);
        }
    }
    
    
`;
