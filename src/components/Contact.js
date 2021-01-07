import React, { useState, useRef } from 'react';
import { HiOutlineMail as Icon } from 'react-icons/hi';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';

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

  return (
    <IconStyles
      onMouseMove={updateTextPosition}
      onMouseEnter={toggleText}
      onMouseLeave={toggleText}
    >
      <div className="icon-wrapper">
        <Icon />
      </div>
      <FloatingText />
    </IconStyles>
  );
}
