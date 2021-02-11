import styled from 'styled-components';

export var ContentStyles = styled.div`
    padding: 4rem 1rem;

    .icon {
        position: fixed;
        width: 100px;
        display: flex;
        justify-content: space-between;
        height: 50px;
        top: 25px;
        left: 15px;
    }

    .overview {
        position: fixed;
        top: 50px;
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
            margin-left: 2rem;
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

    @media (max-width: 900px) {
        padding-top: 5rem;

        .icon {
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;
            top: 20px;

            svg {
                color: var(--gray);
            }
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
