import React from 'react';
import { HiOutlineMail as Icon } from 'react-icons/hi';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import { multiple } from '../utils/utils';
import { useModal } from '../utils/useModal';
import { ContactForm } from '../components/ContactForm';

var IconStyles = styled.div.attrs({
    className: 'icon-corner',
})``;

export function Contact() {
    var { showText, hideText, updateTextPosition, FloatingText } = useMouseText(
        'Contact Me'
    );
    var { Modal, toggleModal } = useModal();

    return (
        <>
            <Modal>
                <ContactForm />
            </Modal>
            <IconStyles
                onMouseMove={updateTextPosition}
                onMouseEnter={multiple(showText, highlightCursor)}
                onMouseLeave={multiple(hideText, removeHighlightEffect)}
            >
                <div onClick={toggleModal} className="icon-wrapper">
                    <Icon />
                </div>
                <FloatingText />
            </IconStyles>
        </>
    );
}
