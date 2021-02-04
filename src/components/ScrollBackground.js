import React, { useState, useEffect, useRef } from 'react';
import Topography from '../assets/topography.svg';
import styled from 'styled-components';

var BackgroundStyles = styled.div`
  margin-left: 50%;
  height: 100%;
  width: 40%;

  svg {
    color: var(--lightergray);
    height: 100%;
    width: 100%;
  }
`;

const BackgroundPartial = React.forwardRef(function BackgroundPartial(
  props,
  ref
) {
  return (
    <BackgroundStyles ref={ref}>
      <Topography />
    </BackgroundStyles>
  );
});

export function ScrollBackground() {
  return (
    <>
      <BackgroundPartial />
      <BackgroundPartial />
      <BackgroundPartial />
    </>
  );
}

// export function ScrollBackground() {
//   var [partials, setPartials] = useState([BackgroundPartial]);
//   var lastPartial = useRef(null);

//   useEffect(
//     function implementInfiniteScroll() {
//       if (!lastPartial.current) return;
//       var observer = new IntersectionObserver(changeBackgroundPartials, {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0,
//       });

//       observer.observe(lastPartial.current);

//       function changeBackgroundPartials(entries, observer) {
//         console.log('added another partial');
//         // Add another partial.
//         setPartials(partials => [...partials, BackgroundPartial]);
//       }
//     },
//     [lastPartial]
//   );

//   return (
//     <>
//       {partials.map(function createBackgroundPartial(BackgroundPartial) {
//         return <BackgroundPartial key={Math.random().toString()} />;
//       })}
//       <BackgroundPartial ref={lastPartial} />
//       <p>Testing</p>
//       <BackgroundPartial />
//     </>
//   );
// }
