import React, { useState, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
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
    var formData = useRef({
        name: '',
        email: '',
        subject: '',
        body: '',
    });
    // register, handleSubmit, watch, errors
    var formHandle = useForm(formData.current);

    return (
        <FormProvider {...formHandle}>
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
                        setTextWritten={setTextWritten}
                        formData={formData}
                    />
                )}

                {textWritten && (
                    <ContactInfo
                        setTextWritten={setTextWritten}
                        formData={formData}
                    />
                )}
            </FormStyles>
        </FormProvider>
    );
}
