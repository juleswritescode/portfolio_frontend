import { createGlobalStyle } from 'styled-components';

export var IconStyles = createGlobalStyle`
    svg {
        font-size: 2rem;
        color: var(--darkgray);
        &:hover {
            color: var(--primary);
        }
    }

  .icon-wrapper {
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:hover {
      * {
        color: var(--primary);
      }
    }

    .icon-description {
      display: none;
      text-transform: uppercase;
      font-weight: 300;
      color: var(--lightgray);
      margin-bottom: .5rem;
      font-size: .8rem;
    }
    
    @media (max-width: 768px) {
      .icon-description {
        display: inline-block;
      }
    }
  }
`;
