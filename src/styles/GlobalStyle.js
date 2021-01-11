import { createGlobalStyle } from 'styled-components';

export var GlobalStyle = createGlobalStyle`
    :root {
        --black: #333;
        --gray: #777;
        --lightgray: #aaa; 
        --lightergray: #eee;
        --white: #fff;
        --primary: #e87234;
    }

    html {
        font-size: 18px;
    }
    
    body {
        background-color: var(--white);
        letter-spacing: 0.05rem;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    svg {
        cursor: pointer;
        font-size: 2rem;
        color: var(--black);
        &:hover {
            color: var(--primary);
        }
    }
    
    
`;
