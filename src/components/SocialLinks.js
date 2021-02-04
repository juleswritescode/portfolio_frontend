import React from 'react';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import { highlightCursor } from '../utils/highlightCursor';
import { multiple } from '../utils/utils';

var SocialStyles = styled.div`
  padding: 0;

  ul {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    display: flex;
    flex-direction: column;
  }

  li {
    transform: rotate(-30deg);
    color: var(--lightgray);
    margin: 0.5rem 0;
    transition: 50ms;
    &:hover {
      color: var(--primary);
      transform: rotate(0deg);
    }
  }
`;

export function SocialLinks() {
  var { toggleText, FloatingText, updateTextPosition } = useMouseText(
    'Visit my social media or github.'
  );

  return (
    <SocialStyles>
      <ul
        onMouseEnter={multiple(toggleText, highlightCursor)}
        onMouseLeave={multiple(toggleText, highlightCursor)}
        onMouseMove={updateTextPosition}
      >
        <li>
          <a target="_blank" href="https://www.github.com/judocodes">
            ghub
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.twitter.com/judocodes">
            twtr
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/judocodes">
            lkdn
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/julian.domke">
            ingr
          </a>
        </li>
      </ul>
      <FloatingText />
    </SocialStyles>
  );
}
