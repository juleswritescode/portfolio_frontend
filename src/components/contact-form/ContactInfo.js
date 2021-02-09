import React, { useEffect } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import { useFormContext } from 'react-hook-form';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../../utils/highlightCursor';

var ContactInfoStyles = styled.form`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .inputs {
        display: flex;
        flex-direction: column;
        color: var(--darkgray);
        width: 100%;

        label {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            width: 100%;

            span {
                margin-bottom: 0.3rem;
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-size: var(--fonts);
                color: var(--lightgray);
                font-weight: 300;
            }

            input {
                font-size: var(--fontm);
                width: clamp(100px, 100%, 800px);
                border: 0;
                border-radius: 5px;
                padding: 0.5rem 1rem;
                background: var(--lightergray);
                &:focus {
                    outline: 1px solid var(--primary);
                }
            }
        }
    }

    span.btn {
        display: inline-block;
        margin-left: 1rem;
    }
`;

export function ContactInfo({ setTextWritten, formData }) {
    var { register, watch, errors } = useFormContext();

    useEffect(function updateFormValues() {
        if (formData.current) {
            formData.current.name = watch('name');
            formData.current.email = watch('email');
            formData.current.subject = watch('subject');
        }
    });

    return (
        <ContactInfoStyles>
            <div className="inputs">
                <label htmlFor="name">
                    <span>Your Name</span>
                    <input
                        type="text"
                        onMouseEnter={highlightCursor}
                        onMouseLeave={removeHighlightEffect}
                        id="name"
                        name="name"
                        ref={register({ required: true, maxLength: 144 })}
                        defaultValue={formData.current.name}
                    />
                </label>
                <label htmlFor="email">
                    <span>Your Email</span>
                    <input
                        onMouseEnter={highlightCursor}
                        onMouseLeave={removeHighlightEffect}
                        type="text"
                        id="email"
                        name="email"
                        ref={register({ required: true, maxLength: 144 })}
                        defaultValue={formData.current.email}
                    />
                </label>
                <label htmlFor="subject">
                    <span>Subject</span>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        ref={register({
                            required: true,
                            maxLength: 144,
                            validate: validator.isEmail,
                        })}
                        onMouseEnter={highlightCursor}
                        onMouseLeave={removeHighlightEffect}
                        defaultValue={formData.current.subject}
                    />
                </label>
            </div>
            <div className="buttons">
                <button
                    className="btn"
                    onSubmit={() => {}}
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                >
                    Message Me
                </button>
                <span
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                    onClick={() => setTextWritten(false)}
                    className="btn"
                >
                    Review Text...
                </span>
            </div>
        </ContactInfoStyles>
    );
}
