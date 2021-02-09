import React, { useState, useRef, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import { Textarea } from './Textarea';
import { ContactInfo } from './ContactInfo';
import { GrClose as Icon } from 'react-icons/gr';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../../utils/highlightCursor';

var FormStyles = styled.form`
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

    .error {
        width: 100%;
        color: red;
        font-weight: 700;
        text-align: center;
        padding: 1rem 0;
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
    var { handleSubmit, errors } = formHandle;

    return (
        <FormProvider {...formHandle}>
            <FormStyles
                onSubmit={handleSubmit(
                    () => {},
                    () => {}
                )}
            >
                <div
                    className="close-contact"
                    onClick={updater}
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                >
                    <Icon />
                </div>
                {(errors.body ||
                    errors.email ||
                    errors.name ||
                    errors.subject) && (
                    <p className="error">{handleErrors(errors)}</p>
                )}
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

    function handleErrors(error) {
        if (error.body) {
            setTextWritten(false);
            switch (error.body.type) {
                case 'required':
                    return 'Please provide a message.';
                case 'minLength':
                    return 'Please provide a meaningful message.';
            }
        } else if (error.name) {
            switch (error.name.type) {
                case 'required':
                    return 'Please provide a name.';
                case 'maxLength':
                    return 'Your name is too long.';
            }
        } else if (error.email) {
            switch (error.email.type) {
                case 'required':
                    return 'Please provide an email.';
                case 'maxLength':
                    return 'Your email is too long.';
                case 'validate':
                    return 'Please provide a valid email.';
            }
        } else if (error.subject) {
            switch (error.subject.type) {
                case 'required':
                    return 'Please provide a subject.';
                case 'maxLength':
                    return 'Please shorten your subject.';
            }
        } else {
            return 'Something went wrong with your errors...';
        }
    }
}
