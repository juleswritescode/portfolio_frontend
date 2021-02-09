import React, { useState } from 'react';
import { GrClose as Icon } from 'react-icons/gr';
import styled from 'styled-components';
import { highlightCursor } from './highlightCursor';
import { stopPropagation } from './utils';

var ModalStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    .contents {
        padding: 4rem;
        border-radius: 15px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .close-modal {
        position: absolute;
        top: 20px;
        left: 20px;
        transition: transform 300ms;
        &:hover {
            transform: rotate(-90deg);
        }
    }
`;

export function useModal() {
    var [open, setOpen] = useState(false);
    return { Modal, toggleModal };

    function Modal({ children }) {
        return (
            open && (
                <ModalStyles onClick={toggleModal}>
                    <div onClick={stopPropagation} className="contents">
                        <div
                            onClick={toggleModal}
                            onMouseEnter={highlightCursor}
                            onMouseLeave={highlightCursor}
                            className="close-modal"
                        >
                            <Icon />
                        </div>
                        {children}
                    </div>
                </ModalStyles>
            )
        );
    }

    function toggleModal(e) {
        setOpen(o => !o);
    }
}
