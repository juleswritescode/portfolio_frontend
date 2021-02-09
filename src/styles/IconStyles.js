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
    background-color: var(--white);
    &:hover {
      * {
        color: var(--primary);
      }
    }

    .icon-description {
      display: none;
      text-transform: uppercase;
      font-weight: 200;
      color: var(--gray);
      margin-top: 1rem;
      margin-bottom: .5rem;
      font-size: .8rem;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      .icon-description {
        display: inline-block;
      }
    }
  }
`;
