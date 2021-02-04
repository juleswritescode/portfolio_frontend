import React from 'react';
import { HiOutlineMail as Icon } from 'react-icons/hi';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import { highlightCursor } from '../utils/highlightCursor';
import { multiple } from '../utils/utils';
import { useModal } from '../utils/useModal';
import { ContactForm } from '../components/ContactForm';

var IconStyles = styled.div.attrs({
    className: 'icon-corner',
})`
    right: 0;
    top: 0;
`;

export function Contact() {
    var { toggleText, updateTextPosition, FloatingText } = useMouseText(
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
                onMouseEnter={multiple(toggleText, highlightCursor)}
                onMouseLeave={multiple(toggleText, highlightCursor)}
            >
                <div onClick={toggleModal} className="icon-wrapper">
                    <Icon />
                </div>
                <FloatingText />
            </IconStyles>
        </>
    );
}
