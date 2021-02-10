import React, { useEffect } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Typography } from '../styles/Typography';
import { IconStyles } from '../styles/IconStyles';
import 'normalize.css';
import { MousePointer } from '../components/MousePointer';
import { removeHighlightEffect } from '../utils/highlightCursor';
import styled from 'styled-components';

var LayoutStyles = styled.div`
    width: 100vw;
    min-height: 100vh;
`;

export default function Layout({ children }) {
    useEffect(removeHighlightEffect);
    return (
        <LayoutStyles>
            <MousePointer />
            <IconStyles />
            <Typography />
            <GlobalStyle />
            {children}
        </LayoutStyles>
    );
}
