import React from 'react';
import { graphql, Link } from 'gatsby';
import { BiArrowBack as Icon } from 'react-icons/bi';
import BlockContent from '@sanity/block-content-to-react';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import { BlogPostImage } from '../components/BlogPostImage';
import { Quote } from '../components/Quote';
import { ContentStyles } from '../styles/ContentStyles';
import Img from 'gatsby-image';
import { format } from 'date-fns';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

var serializers = {
    types: {
        mainImage: ({ node }) => {
            return <BlogPostImage node={node} />;
        },
        code: ({ node }) => {
            return (
                <SyntaxHighlighter language="javascript" style={codeStyle}>
                    {node.code}
                </SyntaxHighlighter>
            );
        },
        quote: ({ node }) => {
            return <Quote node={node} />;
        },
    },
};

export default function BlogPost({ data = {} }) {
    var { body, mainImage, title, publishedAt } = data.post || {};
    return (
        <ContentStyles>
            <h2>
                {title}{' '}
                <span className="published">
                    {format(new Date(publishedAt), "EEE', 'do' of 'MMMM")}
                </span>
            </h2>
            <hr />
            <div className="icon-wrapper">
                <Link
                    to="/"
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                >
                    <Icon />
                </Link>
            </div>
            <Img
                fluid={mainImage?.asset?.fluid}
                alt={mainImage?.alt}
                title={mainImage?.caption}
            />
            <BlockContent blocks={body} serializers={serializers} />
        </ContentStyles>
    );
}

export const pageQuery = graphql`
    query($id: String) {
        post: sanityPost(id: { eq: $id }) {
            id
            body: _rawBody
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
            title
            publishedAt
        }
    }
`;
