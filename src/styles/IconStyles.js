import { createGlobalStyle } from 'styled-components';

export var IconStyles = createGlobalStyle`
  .icon-corner {
    position: fixed;
    padding: 25px;
    text-align: right;
    width: 10vh;
    height: 10vh;
  }

  .icon-wrapper {
    display: inline-flex;
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--white);
    border: 2px solid var(--lightergray);
    cursor: pointer;
    &:hover {
      border-color: var(--primary);
      * {
        color: var(--primary);
      }
    }
  }
`;
