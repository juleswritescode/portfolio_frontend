import React, { useState, useRef } from 'react';
import styled from 'styled-components';

var TextElementStyle = styled.div`
    position: fixed;
    padding: 0 1rem;
    top: ${({ position }) => position.top};
    left: ${({ position }) => position.left};
    transform: translateX(-50%);
    width: 200px;
    text-align: center;
    color: var(--gray);

    animation: fadeInText 200ms forwards;

    @keyframes fadeInText {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export function useMouseText(text) {
    var [show, setShow] = useState(false);
    var cachedPosition = useRef({
        top: 0,
        left: 0,
    });
    var textEl = useRef(null);

    function FloatingText() {
        return (
            show && (
                <TextElementStyle
                    position={cachedPosition.current}
                    ref={textEl}
                >
                    {text}
                </TextElementStyle>
            )
        );
    }

    return {
        FloatingText,
        updateTextPosition,
        showText,
        hideText,
    };

    function updateTextPosition(e) {
        var posX, posY;

        {
            let screenHeight = window.innerHeight;
            // Adjusting the location of textelement based on where the mouse is, relative to the viewport.

            posX = e.clientX;
            if (e.clientY > screenHeight * 0.8) {
                posY = e.clientY - 120;
            } else {
                posY = e.clientY + 60;
            }
        }

        if (!textEl.current) {
            // Hard interrupt if textEl.current can't be located
            setShow(false);
            return;
        }

        var top = posY + 'px';
        var left = posX + 'px';
        var textElementStyle = textEl.current.style;

        setTimeout(() => {
            textElementStyle.top = top;
            textElementStyle.left = left;
            cachedPosition.current = { top, left };
        }, 0);
    }

    function showText() {
        setShow(true);
    }

    function hideText() {
        setShow(false);
    }
}
