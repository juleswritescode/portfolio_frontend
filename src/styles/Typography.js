import { createGlobalStyle } from 'styled-components';

export var Typography = createGlobalStyle`
 body {
     font-family: proxima-nova, 'Operator Mono', 'sans-serif'; 
     font-weight: 400;
 }

 h1,h2,h3,h4,h5,h6 {
     font-family: futura-pt, 'Arial';
     line-height: 1;
     margin: 0 0;
     margin-bottom: 0;
     padding: 0;
 }
`;
