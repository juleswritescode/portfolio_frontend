import React from 'react';
import { graphql, Link } from 'gatsby';
import { BiArrowBack as Icon } from 'react-icons/bi';
import styled from 'styled-components';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';

var ProjectStyles = styled.div`
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
        align-items: baseline;

        span {
            font-size: var(--fontm);
            color: var(--lightgray);
            font-weight: 400;
        }
    }

    .links {
        a {
            margin: 0 10px;
            &:hover {
                color: var(--primary);
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

    figure .gatsby-image-wrapper {
        margin: 2rem 0;
    }
`;

export default function BlogPost({ data = {} }) {
    console.log({ data });
    var { description, mainImage, title, github, link } = data.project || {};
    console.log(description);
    return (
        <ProjectStyles>
            <h2>
                {title}
                <span className="links">
                    <a
                        target="_blank"
                        onMouseEnter={highlightCursor}
                        onMouseLeave={removeHighlightEffect}
                        href={link}
                    >
                        Visit Project
                    </a>
                    <a
                        target="_blank"
                        href={github}
                        onMouseEnter={highlightCursor}
                        onMouseLeave={removeHighlightEffect}
                    >
                        Github
                    </a>
                </span>
            </h2>
            <hr />
            <div className="icon-wrapper">
                <Link
                    to="/"
                    onMouseEnter={highlightCursor}
                    onMouseLeave={highlightCursor}
                >
                    <Icon />
                </Link>
            </div>
            <Img
                fluid={mainImage?.asset?.fluid}
                alt={mainImage?.alt}
                title={mainImage?.caption}
            />
            <Markdown>{description}</Markdown>
        </ProjectStyles>
    );
}

export const pageQuery = graphql`
    query($id: String) {
        project: sanityProject(id: { eq: $id }) {
            id
            mainImage {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
                alt
                caption
            }
            slug {
                current
            }
            description
            title
            github
            link
        }
    }
`;
