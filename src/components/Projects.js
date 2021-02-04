import React from 'react';
import { IoRocketSharp as Icon } from 'react-icons/io5';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import { highlightCursor } from '../utils/highlightCursor';
import { multiple } from '../utils/utils';

var IconStyles = styled.div.attrs({
  className: 'icon-corner',
})`
  left: 0;
  top: 0;
  text-align: left;
`;

export function Projects() {
  var { toggleText, updateTextPosition, FloatingText } = useMouseText(
    'Learn about me and my projects.'
  );
  return (
    <IconStyles
      onMouseMove={updateTextPosition}
      onMouseEnter={multiple(toggleText, highlightCursor)}
      onMouseLeave={multiple(toggleText, highlightCursor)}
    >
      <div className="icon-wrapper">
        <Icon />
      </div>
      <FloatingText />
    </IconStyles>
  );
}
