import { createGlobalStyle } from 'styled-components';

export var Typography = createGlobalStyle`
:root {
    --fontxs: .5rem;
    --fonts: .75rem;
    --fontm: 1rem;
    --fontl: 1.25rem;
    --fontxl: 1.5rem;
    --fontxxl: 2rem;
    --fontxxxl: 3rem;
    --test: red;
}
 body {
     font-family: proxima-nova, 'Operator Mono', 'sans-serif'; 
     font-weight: 400;
     letter-spacing: 0.05rem;
 }

 h1,h2,h3,h4,h5,h6 {
     font-family: futura-pt, 'Arial';
     line-height: 1;
     margin: 0;
     padding: 0;
     letter-spacing: -0.015rem;
 }

 p {
     margin: 0;
     font-weight: 300;
     line-height: 1.5;
 }
`;
