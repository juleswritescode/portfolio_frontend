import React from 'react';
import styled from 'styled-components';
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

export function Textarea({ setTextWritten, formData, formHandle }) {
    var { register, watch, trigger } = formHandle;

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
            <span
                className="btn"
                onClick={proceedToInfo}
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
            >
                Done? Fill in your Details...
            </span>
        </TextAreaStyles>
    );

    function proceedToInfo() {
        // store the form state in a ref (otherwise, it will get lost when component unmounts)
        formData.current.body = watch('body');
        trigger('body').then(validated => {
            if (validated) {
                setTextWritten(true);
            }
        });
    }
}
