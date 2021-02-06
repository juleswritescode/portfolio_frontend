import React, { useState, useRef } from 'react';
import styled from 'styled-components';

var cachedPosition = {
    top: 0,
    left: 0,
};

var TextElementStyle = styled.div`
    position: fixed;
    padding: 0 1rem;
    top: ${cachedPosition.top};
    left: ${cachedPosition.left};
    width: 200px;
    transform: translateX(-50%);
    text-align: center;
    color: var(--gray);

    animation: fadeIn 200ms forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export function useMouseText(text) {
    var [show, setShow] = useState(false);
    var [position, setPosition] = useState({
        top: 0,
        left: 0,
    });
    var textEl = useRef(null);

    function FloatingText() {
        return show && <TextElementStyle ref={textEl}>{text}</TextElementStyle>;
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

        var textElementStyle = textEl.current.style;
        setTimeout(() => {
            textElementStyle.top = posY + 'px';
            textElementStyle.left = posX + 'px';
        }, 0);
    }

    function showText(e) {
        setShow(true);
    }

    function hideText(e) {
        setShow(false);
    }
}
