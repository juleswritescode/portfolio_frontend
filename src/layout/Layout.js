import React, { useEffect } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Typography } from '../styles/Typography';
import { IconStyles } from '../styles/IconStyles';
import 'normalize.css';
import { MousePointer } from '../components/MousePointer';
import { removeHighlightEffect } from '../utils/highlightCursor';
import styled from 'styled-components';
import { ContextProvider } from '../components/Context';

var Wrapper = styled.div`
    width: clamp(100px, 90%, 950px);
    min-width: 100px;
    max-width: 950px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
`;

export default function Layout({ children }) {
    useEffect(removeHighlightEffect);
    return (
        <ContextProvider>
            <Wrapper>
                <GlobalStyle />
                <Typography />
                <IconStyles />
                <MousePointer />
                {children}
            </Wrapper>
        </ContextProvider>
    );
}
