import React from 'react';
import { format } from 'date-fns';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { highlightCursor } from '../utils/highlightCursor';

var PostsStyles = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: center;
    align-items: center;
    bottom: 0;
    padding-bottom: 4rem;
`;

var SinglePostStyles = styled.div`
    margin: 0 50px;
    animation: fadeIn forwards ease-in;
    animation-duration: ${({ idx }) => idx * 200 + 'ms'};

    h4 {
        font-size: var(--fontl);
        margin-bottom: 0;
        font-weight: 400;
    }
    p {
        font-size: var(--fonts);
        margin: 0;
    }
    .gatsby-image-wrapper {
        width: 200px;
        height: 200px;
        border-radius: 25px;
        margin-bottom: 1rem;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%);
        }
        to {
            opacity: 1;
            transform: translateX(0%);
        }
    }
`;

export function PostsPreview({ posts }) {
    return (
        <PostsStyles>
            {posts.slice(0, 3).map(function renderSinglePost(post, idx) {
                return (
                    <SinglePostPreview post={post} idx={idx} key={post.id} />
                );
            })}
        </PostsStyles>
    );
}

function SinglePostPreview({ post, idx }) {
    return (
        <Link to={`/post/${post.slug.current}`}>
            <SinglePostStyles
                idx={idx}
                onMouseLeave={highlightCursor}
                onMouseEnter={highlightCursor}
            >
                <Img fluid={post.mainImage.asset.fluid} />
                <h4>{post.title}</h4>
                <p>
                    {format(new Date(post.publishedAt), "EEE', 'do' of 'MMMM")}
                </p>
            </SinglePostStyles>
        </Link>
    );
}
