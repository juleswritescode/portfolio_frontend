import React, { useState, useRef } from 'react';
import styled from 'styled-components';

var TextElementStyle = styled.p`
  position: fixed;
  padding: 0 1rem;
  width: 200px;
  top: 0;
  left: 0;
  text-align: center;
  color: var(--gray);

  animation: fadeIn 200ms forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export function useMouseText(text) {
  var [showText, setShowText] = useState(false);
  var textEl = useRef(null);

  var FloatingText = function createTextElementWithRef() {
    return showText && <TextElementStyle ref={textEl}>{text}</TextElementStyle>;
  };

  return {
    FloatingText,
    updateTextPosition,
    toggleText,
  };

  function updateTextPosition(e) {
    var posX, posY;

    {
      let screenHeight = window.innerHeight;
      let screenWidth = window.innerWidth;
      if (e.clientX > screenWidth / 2) {
        posX = e.clientX - 250;
      } else {
        posX = e.clientX + 50;
      }

      if (e.clientY > screenHeight / 5) {
        posY = e.clientY - 70;
      } else {
        posY = e.clientY - 10;
      }
    }

    var textElementStyle = textEl.current.style;
    textElementStyle.top = posY + 'px';
    textElementStyle.left = posX + 'px';
  }

  function toggleText() {
    setShowText(show => !show);
  }
}
