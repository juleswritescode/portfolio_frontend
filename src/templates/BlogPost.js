import React from 'react';
import { graphql, Link } from 'gatsby';
import { BiArrowBack as Icon } from 'react-icons/bi';
import BlockContent from '@sanity/block-content-to-react';
import { BlogPostImage } from '../components/BlogPostImage';
import { Quote } from '../components/Quote';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { format } from 'date-fns';

var BlogPostStyles = styled.div`
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

var serializers = {
    types: {
        mainImage: ({ node }) => {
            return <BlogPostImage node={node} />;
        },
        code: ({ node }) => {
            return <pre>{node.code}</pre>;
        },
        quote: ({ node }) => {
            return <Quote node={node} />;
        },
    },
};

export default function BlogPost({ data = {} }) {
    var { body, mainImage, title, publishedAt } = data.post || {};
    return (
        <BlogPostStyles>
            <h2>
                {title}{' '}
                <span className="published">
                    {format(new Date(publishedAt), "EEE', 'do' of 'MMMM")}
                </span>
            </h2>
            <hr />
            <div className="icon-wrapper">
                <Link to="/">
                    <Icon />
                </Link>
            </div>
            <Img
                fluid={mainImage?.asset?.fluid}
                alt={mainImage?.alt}
                title={mainImage?.caption}
            />
            <BlockContent blocks={body} serializers={serializers} />
        </BlogPostStyles>
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
