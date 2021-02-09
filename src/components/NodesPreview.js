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
    padding-top: 3rem;
    padding-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 50px;
    justify-items: center;
    align-items: center;

    @media (max-height: 800px) {
        padding-left: 1.5rem;
        justify-items: flex-start;
    }
`;

var SingleNodeStyles = styled.div`
    animation: fadeInPreview forwards ease-in;
    animation-duration: ${({ idx }) => (idx + 1) * 200 + 'ms'};
    color: var(--darkgray);
    max-width: 205px;

    h4 {
        font-size: var(--fontl);
        margin-bottom: 0;
        font-weight: 400;
    }
    p {
        font-size: var(--fonts);
        margin: 0.5rem 0;
    }
    .gatsby-image-wrapper {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        width: 200px;
        height: 200px;
        border-radius: 25px;
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
