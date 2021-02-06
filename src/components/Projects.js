import React from 'react';
import { IoRocketSharp as Icon } from 'react-icons/io5';
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

export function Projects({ updater, isOpen }) {
    var { showText, hideText, updateTextPosition, FloatingText } = useMouseText(
        'Learn about me and my projects.'
    );
    return (
        <>
            <IconStyles
                onMouseMove={updateTextPosition}
                onMouseEnter={multiple(showText, highlightCursor)}
                onMouseLeave={multiple(hideText, removeHighlightEffect)}
            >
                <div className="icon-wrapper">
                    <Icon
                        onClick={multiple(
                            isOpen ? showText : hideText,
                            updater('projects')
                        )}
                    />
                </div>
                <FloatingText />
            </IconStyles>
        </>
    );
}
