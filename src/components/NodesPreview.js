import React from 'react';
import { format } from 'date-fns';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';

var NodesStyles = styled.div`
    padding-top: 6rem;
    padding-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    gap: 50px;

    @media (max-width: 768px) {
        padding-top: 2rem;
        padding-bottom: 8rem;
        gap: 25px;
        justify-items: center;
    }
`;

var SingleNodeStyles = styled.div`
    animation: fadeInPreview forwards ease-in;
    animation-duration: ${({ idx }) => (idx + 1) * 200 + 'ms'};
    color: var(--darkgray);
    max-width: 200px;

    h4 {
        font-size: var(--fontl);
        font-weight: 400;
    }

    p {
        font-size: var(--fonts);
        margin: 0.5rem 0 0 0;
    }
    .gatsby-image-wrapper {
        box-shadow: var(--shadow-md);
        width: 200px;
        height: 200px;
        border-radius: 5px;
        margin-bottom: 1rem;
    }

    @keyframes fadeInPreview {
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

export function NodesPreview({ nodes }) {
    return (
        <NodesStyles>
            {nodes.slice(0, 3).map(function renderSingleNode(node, idx) {
                return (
                    <SingleNodePreview node={node} idx={idx} key={node.id} />
                );
            })}
        </NodesStyles>
    );
}

function SingleNodePreview({ node, idx }) {
    var base = node.publishedAt ? 'post' : 'project';
    return (
        <Link to={`/${base}/${node.slug.current}`}>
            <SingleNodeStyles
                idx={idx}
                onMouseEnter={highlightCursor}
                onMouseLeave={removeHighlightEffect}
            >
                <Img fluid={node.mainImage?.asset?.fluid} />
                <h4>{node.title}</h4>
                <p>
                    {node.publishedAt &&
                        format(
                            new Date(node.publishedAt),
                            "EEE', 'do' of 'MMMM"
                        )}
                </p>
            </SingleNodeStyles>
        </Link>
    );
}
