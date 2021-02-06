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
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

var SingleNodeStyles = styled.div`
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
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
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
