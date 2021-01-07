import React from 'react';
import { GiRead as Icon } from 'react-icons/gi';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';

var IconStyles = styled.div.attrs({
  className: 'icon-corner',
})`
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export function Writing() {
  var { toggleText, updateTextPosition, FloatingText } = useMouseText(
    'Read some of my articles.'
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
