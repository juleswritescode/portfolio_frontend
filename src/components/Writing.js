import React, { useState } from 'react';
import { GiRead as Icon } from 'react-icons/gi';
import styled from 'styled-components';
import { useMouseText } from '../utils/useMouseText';
import { highlightCursor } from '../utils/highlightCursor';
import { multiple } from '../utils/utils';
import { PostsPreview } from './PostsPreview';

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

export function Writing({ posts }) {
  var [showPosts, setShowPosts] = useState(false);
  var { toggleText, updateTextPosition, FloatingText } = useMouseText(
    'Read some of my articles.'
  );

  return (
    <>
      <IconStyles
        onMouseMove={updateTextPosition}
        onMouseEnter={multiple(toggleText, highlightCursor)}
        onMouseLeave={multiple(toggleText, highlightCursor)}
      >
        <div className="icon-wrapper">
          <Icon onClick={() => setShowPosts(o => !o)} />
        </div>
        {!showPosts && <FloatingText />}
      </IconStyles>
      {showPosts && <PostsPreview posts={posts} />}
    </>
  );
}
