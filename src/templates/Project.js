import React from 'react';
import { graphql, Link } from 'gatsby';
import { BiArrowBack as Icon } from 'react-icons/bi';
import { AiOutlineOrderedList as ListIcon } from 'react-icons/ai';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import { ContentStyles } from '../styles/ContentStyles';

export default function BlogPost({ data = {} }) {
    var { description, mainImage, title, github, link } = data.project || {};
    return (
        <ContentStyles>
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
            <div className="icon">
                <Link
                    to="/"
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                >
                    <Icon title="Back" />
                </Link>
                <Link
                    to="/content-overview"
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                >
                    <ListIcon title="See All Projects" />
                </Link>
            </div>
            <Img
                fluid={mainImage?.asset?.fluid}
                alt={mainImage?.alt}
                title={mainImage?.caption}
            />
            <Markdown>{description}</Markdown>
        </ContentStyles>
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
