import styled from 'styled-components';

export var ContentStyles = styled.div`
    max-width: 700px;
    padding: 4rem 1rem;
    margin: 0 auto;

    .icon-wrapper {
        position: fixed;
        width: 50px;
        height: 50px;
        padding: 1rem;
        top: 0;
        left: 0;
    }

    .gatsby-image-wrapper {
        margin: 2rem 0;
    }

    h2 {
        font-size: var(--fontxxxl);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        span {
            font-size: var(--fontm);
            color: var(--lightgray);
            font-weight: 400;
        }

        .links {
            a {
                color: var(--lightgray);
                margin: 0 10px;
                &:hover {
                    color: var(--primary);
                }
            }
        }
    }

    hr {
        border-color: var(--lightergray);
        margin: 1rem 0;
    }

    h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: var(--fontxl);
    }

    p {
        margin-bottom: 1rem;
    }

    ul {
        margin: 2rem 0;
        list-style: square;
        li {
            margin: 1rem 0rem;
            font-weight: 300;
            color: var(--black);
        }
    }

    pre {
        margin: 3rem 0;
    }

    a {
        color: var(--primary);
    }

    figure .gatsby-image-wrapper {
        margin: 2rem 0;
    }

    @media (max-width: 768px) {
        padding-top: 5rem;

        .icon-wrapper {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 15px;
            left: 15px;
        }

        h2 {
            font-size: var(--fontxxl);
            span {
                padding-top: 1rem;
                height: 20px;
                position: absolute;
                right: 15px;
                top: 15px;
            }
        }
    }
`;
