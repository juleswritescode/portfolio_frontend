import React from 'react';
import styled from 'styled-components';

var QuoteStyles = styled.figure`
    margin-top: 6rem;
    position: relative;
    margin-bottom: 4rem;

    span {
        position: absolute;
        line-height: 0.5;
        z-index: -1;
        color: var(--lightergray);
        font-size: 16rem;
    }
    blockquote {
        margin-bottom: 0.5rem;
        text-align: center;
        padding: 0 1rem;
        font-weight: 300;
        font-size: var(--fontxl);
    }

    figcaption {
        line-height: 1;
        text-align: center;
        color: var(--gray);
        font-weight: 300;
    }
`;

export function Quote({ node }) {
    return (
        <QuoteStyles>
            <span>&ldquo;</span>
            <blockquote>{node.quote}</blockquote>
            <figcaption>{node.author || ''}</figcaption>
        </QuoteStyles>
    );
}
