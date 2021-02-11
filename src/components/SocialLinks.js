import React from 'react';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import { multiple } from '../utils/utils';

var SocialStyles = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-60%);

    ul {
        display: flex;
        align-items: center;
        padding-bottom: 1rem;
    }

    li {
        margin: 0 0.5rem;
        transform-origin: center;
        transform: rotate(-30deg);
        color: var(--lightgray);
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

    @media (max-width: 1024px) {
        bottom: 1rem;
        ul {
            font-size: var(--fonts);
        }
        li {
            margin: 0 1rem;
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
