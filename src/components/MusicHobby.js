import React from 'react';
import { FaGuitar as Icon } from 'react-icons/fa';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import { highlightCursor } from '../utils/highlightCursor';
import { multiple } from '../utils/utils';

var IconStyles = styled.div.attrs({
  className: 'icon-corner',
})`
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export function MusicHobby() {
  var { toggleText, updateTextPosition, FloatingText } = useMouseText(
    'I make music, too.'
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
