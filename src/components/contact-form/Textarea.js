import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../../utils/highlightCursor';

var TextAreaStyles = styled.div`
    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        padding: 2rem 2rem;
        color: var(--darkgray);
        background-color: var(--lightergray);
        border: 0;
        border-radius: 5px;
        box-shadow: var(--shadow-md);
    }

    textarea:focus {
        outline: none;
    }
`;

export function Textarea({ setTextWritten, formData }) {
    var { register, watch, errors, handleSubmit } = useFormContext();

    useEffect(function updateFormData() {
        if (formData.current) {
            formData.current.body = watch('body');
        }
    });

    return (
        <TextAreaStyles>
            <textarea
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
                placeholder="Write me a message..."
                name="body"
                id="body"
                cols="30"
                ref={register({
                    required: true,
                    minLength: 50,
                })}
                rows="10"
                defaultValue={formData.current.body}
            ></textarea>
            <button
                className="btn"
                // handleSubmit will error because the other fields haven't been set. We need to check if we should proceed in the onError callback
                onClick={() => setTextWritten(true)}
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
            >
                Done? Fill in your Details...
            </button>
        </TextAreaStyles>
    );
}
