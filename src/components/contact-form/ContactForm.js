import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Textarea } from './Textarea';
import { ContactInfo } from './ContactInfo';
import { GrClose as Icon } from 'react-icons/gr';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../../utils/highlightCursor';

var FormStyles = styled.div`
    padding-top: 3rem;
    padding-bottom: 4rem;
    animation: fadeInForm forwards ease-in;
    animation-duration: 300ms;

    .close-contact {
        svg {
            font-size: var(--fontm);
            color: var(--lightergray);
            margin-bottom: 0.5rem;
            transition: transform 300ms;

            &:hover {
                transform: rotate(90deg);
            }
        }
    }

    .btn {
        padding: 0.875rem 1.5rem;
        background: transparent;
        border: 3px solid var(--gray);
        color: var(--gray);
        box-shadow: var(--shadow-md);
        margin-top: 1rem;
        border-radius: 5px;
        font-size: var(--fontm);
        font-weight: 900;

        &:hover {
            transform: scale(0.95);
            box-shadow: 0;
        }
    }

    @keyframes fadeInForm {
        from {
            transform: translateX(-50%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-height: 800px) {
        padding-left: 1.5rem;
    }
`;

export function ContactForm({ updater }) {
    var [textWritten, setTextWritten] = useState(false);
    // register, handleSubmit, watch, errors
    var formHandle = useForm({
        name: '',
        email: '',
        subject: '',
        body: '',
    });

    console.log(formHandle);

    return (
        <FormStyles>
            <div
                className="close-contact"
                onClick={updater}
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
            >
                <Icon />
            </div>
            {!textWritten && (
                <Textarea
                    formHandle={formHandle}
                    setTextWritten={setTextWritten}
                />
            )}
            {textWritten && (
                <ContactInfo
                    setTextWritten={setTextWritten}
                    formHandle={formHandle}
                />
            )}
        </FormStyles>
    );
}
