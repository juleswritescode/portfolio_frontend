import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { ContentStyles } from '../styles/ContentStyles';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';

// markup
const NotFoundPage = ({ data }) => {
    var { mainImage, content } = data.sanityNotFound;
    return (
        <ContentStyles>
            <Img fluid={mainImage?.asset?.fluid} alt={mainImage?.alt} />
            <Markdown>{content}</Markdown>
            <Link
                to="/"
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
            >
                Okay, I will move Along
            </Link>
        </ContentStyles>
    );
};

export default NotFoundPage;

export const query = graphql`
    query {
        sanityNotFound {
            content
            mainImage {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
                alt
            }
        }
    }
`;
