import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

var MousePointerStyles = styled.div`
    position: fixed;
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
    z-index: 999;
    pointer-events: none;

    .outer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--outer-mouse-size);
        height: var(--outer-mouse-size);
        border-radius: 50%;
        background: transparent;
        border: 2px solid var(--outer-mouse);
        transition-duration: 300ms;
    }

    .inner {
        --size: 60%;
        height: var(--size);
        width: var(--size);
        background-color: var(--inner-mouse);
        border-radius: 50%;
        transition-duration: 300ms;
    }
`;

export function MousePointer(props) {
    var mousePointerEl = useRef(null);

    useEffect(
        function addCustomMouseListener() {
            var { current } = mousePointerEl;
            if (current) {
                window.onmousemove = function updateMousePointerPosition(e) {
                    setTimeout(() => {
                        if (current.style.opacity == 0) {
                            current.style.opacity = 0.75;
                        }
                        current.style.top = e.clientY + 'px';
                        current.style.left = e.clientX + 'px';
                    }, 0);
                };
            } else return;
        },
        [mousePointerEl]
    );

    return (
        <MousePointerStyles ref={mousePointerEl}>
            <div className="outer ">
                <div id="inner-mouse" className="inner"></div>
            </div>
        </MousePointerStyles>
    );
}
