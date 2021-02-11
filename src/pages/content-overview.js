import React from 'react';
import { format } from 'date-fns';
import { graphql, Link } from 'gatsby';
import { BiArrowBack as Icon } from 'react-icons/bi';
import styled from 'styled-components';
import {
    highlightCursor,
    removeHighlightEffect,
} from '../utils/highlightCursor';
import { ContentStyles } from '../styles/ContentStyles';
import Img from 'gatsby-image';

var ContentOverviewStyles = styled.div`
    .gatsby-image-wrapper {
        margin: 0;
        display: inline-block;
        height: 60px;
        width: 60px;
    }

    ul {
        list-style: none;
        li {
            border-bottom: 0.5px solid var(--lightergray);
            border-top: 0.5px solid var(--lightergray);
            padding: 0.5rem 0;
            display: grid;
            grid-template-columns: 60px 1fr auto;
            gap: 1rem;

            &:hover {
                background: var(--lightergray);
            }
            p {
                display: flex;
                height: 100%;
                align-items: center;
            }

            .title {
                font-size: var(--fontl);
                font-weight: 500;
            }
        }
    }
`;

export default function ContentOverview({ data = {} }) {
    var posts = data.posts?.nodes || [];
    var projects = data.projects?.nodes || [];

    return (
        <ContentStyles>
            <div className="icon">
                <Link
                    to="/"
                    onMouseEnter={highlightCursor}
                    onMouseLeave={removeHighlightEffect}
                >
                    <Icon />
                </Link>
            </div>
            <h2>Content Overview</h2>
            <h3>Posts ({data.posts?.totalCount})</h3>
            <ContentOverviewStyles>
                <ul className="posts">
                    {posts.map(function renderPostItem(post) {
                        return (
                            <Link
                                to={`/post/${post.slug.current}`}
                                onMouseEnter={highlightCursor}
                                onMouseLeave={removeHighlightEffect}
                            >
                                <li>
                                    <Img
                                        fluid={post.mainImage?.asset?.fluid}
                                        alt={post.mainImage?.alt}
                                    />
                                    <p className="title">{post.title}</p>
                                    <p className="published">
                                        {format(
                                            new Date(post.publishedAt),
                                            "EEE', 'do' of 'MMMM"
                                        )}
                                    </p>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
                <h3>Projects ({data.projects?.totalCount})</h3>
                <ul className="projects">
                    {projects.map(function renderProjectItem(project) {
                        return (
                            <Link
                                to={`/project/${project.slug.current}`}
                                onMouseEnter={highlightCursor}
                                onMouseLeave={removeHighlightEffect}
                            >
                                <li>
                                    <Img
                                        fluid={project.mainImage?.asset?.fluid}
                                        alt={project.mainImage?.alt}
                                    />
                                    <p className="title">{project.title}</p>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </ContentOverviewStyles>
        </ContentStyles>
    );
}

export const query = graphql`
    query {
        posts: allSanityPost {
            totalCount
            nodes {
                id
                slug {
                    current
                }
                publishedAt
                title
                mainImage {
                    alt
                    asset {
                        fluid(maxWidth: 150) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
        projects: allSanityProject {
            totalCount
            nodes {
                id
                slug {
                    current
                }
                title
                mainImage {
                    alt
                    asset {
                        fluid(maxWidth: 150) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;
