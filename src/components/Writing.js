import React from 'react';
import { GiRead as Icon } from 'react-icons/gi';
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

export function Writing({ updater, isOpen }) {
    var { showText, hideText, updateTextPosition, FloatingText } = useMouseText(
        'Read some of my articles.'
    );

    return (
        <>
            <IconStyles
                onMouseMove={updateTextPosition}
                onMouseEnter={multiple(showText, highlightCursor)}
                onMouseLeave={multiple(hideText, removeHighlightEffect)}
            >
                <div className="icon-wrapper">
                    <span className="icon-description">ARTICLES</span>
                    <Icon
                        onClick={multiple(
                            isOpen ? showText : hideText,
                            updater
                        )}
                    />
                </div>
            </IconStyles>
            <FloatingText />
        </>
    );
}
