import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';

var FormStyles = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    min-width: 350px;

    h2 {
        font-size: var(--fontxxl);
        margin-bottom: 2rem;
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        font-weight: 200;

        input,
        textarea {
            border: 0.5px solid var(--gray);
            margin-top: 0.5rem;
            outline: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }
    }

    button {
        background-color: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        font-size: var(--fontl);
        border-radius: 5px;
        box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
        :hover {
            opacity: 0.9;
            box-shadow: none;
        }
    }
`;

export function ContactForm() {
    var { register, handleSubmit, watch, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        body: '',
    });

    return (
        <FormStyles>
            <h2>Contact Me</h2>
            <label htmlFor="name">
                Name
                <input
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                    type="text"
                    name="name"
                    id="name"
                    ref={register({ required: true })}
                />
            </label>
            <label htmlFor="email">
                Email
                <input
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                    type="text"
                    name="email"
                    id="email"
                    ref={register({ required: true })}
                />
            </label>
            <label htmlFor="subject">
                Subject
                <input
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                    type="text"
                    name="subject"
                    id="subject"
                    ref={register({ required: true })}
                />
            </label>
            <label htmlFor="body">
                Message
                <textarea
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                    rows="15"
                    name="body"
                    id="body"
                    ref={register({ required: true })}
                />
            </label>
            <button
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
                type="submit"
            >
                Send Email
            </button>
        </FormStyles>
    );
}
