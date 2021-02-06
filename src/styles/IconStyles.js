import { createGlobalStyle } from 'styled-components';

export var IconStyles = createGlobalStyle`
  .icon-corner {
    display: contents;
  }

  .icon-wrapper {
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--white);
    &:hover {
      * {
        color: var(--primary);
      }
    }
  }
`;
