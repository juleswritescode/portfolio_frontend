import React from 'react';
import { FaGuitar as Icon } from 'react-icons/fa';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import { multiple } from '../utils/utils';

var IconStyles = styled.div.attrs({
    className: 'icon-corner',
})``;

export function MusicHobby() {
    var { showText, hideText, updateTextPosition, FloatingText } = useMouseText(
        'I make music, too.'
    );
    return (
        <>
            <IconStyles
                onMouseMove={updateTextPosition}
                onMouseEnter={multiple(showText, highlightCursor)}
                onMouseLeave={multiple(hideText, removeHighlightEffect)}
            >
                <a
                    href="https://www.instagram.com/julian.domke"
                    target="_blank"
                >
                    <div className="icon-wrapper">
                        <span className="icon-description">Music</span>
                        <Icon />
                    </div>
                </a>
            </IconStyles>
            <FloatingText />
        </>
    );
}
