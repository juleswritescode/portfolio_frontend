import React from 'react';
import { HiOutlineMail as Icon } from 'react-icons/hi';
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

export function Contact({ isOpen, updater }) {
    var { showText, hideText, updateTextPosition, FloatingText } = useMouseText(
        'Contact Me'
    );

    return (
        <>
            <IconStyles
                onMouseMove={updateTextPosition}
                onMouseEnter={multiple(showText, highlightCursor)}
                onMouseLeave={multiple(hideText, removeHighlightEffect)}
            >
                <div className="icon-wrapper">
                    <span className="icon-description">Contact</span>
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
