import React from 'react';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import { multiple } from '../utils/utils';

var SocialStyles = styled.div`
    padding: 0;
    bottom: 0;
    left: 50%;
    position: fixed;

    ul {
        transform: translateX(-60%);
        display: flex;
        gap: 1rem;
        align-items: center;
        padding-bottom: 1rem;
    }

    li {
        transform-origin: center;
        text-align: center;
        transform: rotate(-30deg);
        color: var(--lightgray);
        width: 2rem;
        padding: 1rem;
        transition: 50ms;
        &:hover {
            color: var(--primary);
            transform: rotate(0deg);
        }
        &:first-child {
            margin-bottom: -5px;
        }
        &:last-child {
            margin-bottom: 3px;
        }
    }

    @media (max-width: 768px) {
        left: unset;
        right: 1rem;
        bottom: 6rem;

        ul {
            transform: translateX(0);
            flex-direction: column;
            gap: 2rem;
            padding-bottom: 0rem;
            font-size: var(--fonts);

            li {
                width: auto;
                padding: 0;
            }
        }
    }
`;

export function SocialLinks() {
    var { hideText, showText, FloatingText, updateTextPosition } = useMouseText(
        'Visit my social media or github.'
    );

    return (
        <SocialStyles>
            <ul
                onMouseEnter={multiple(showText, highlightCursor)}
                onMouseLeave={multiple(hideText, removeHighlightEffect)}
                onMouseMove={updateTextPosition}
            >
                <li>
                    <a target="_blank" href="https://www.github.com/judocodes">
                        ghub
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.twitter.com/judocodes">
                        twtr
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/judocodes"
                    >
                        lkdn
                    </a>
                </li>
                {/* <li>
        <a target="_blank" href="https://www.instagram.com/julian.domke">
            ingr
          </a>
        </li> */}
            </ul>
            <FloatingText />
        </SocialStyles>
    );
}
