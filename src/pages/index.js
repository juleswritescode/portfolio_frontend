import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// Components
import { Contact } from '../components/Contact';
import { SocialLinks } from '../components/SocialLinks';
import { MusicHobby } from '../components/MusicHobby';
import { Writing } from '../components/Writing';
import { Projects } from '../components/Projects';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { NodesPreview } from '../components/NodesPreview';
import { graphql } from 'gatsby';
import styled from 'styled-components';

var Wrapper = styled.div`
    width: clamp(100px, 90%, 950px);
    min-width: 100px;
    max-width: 950px;
    margin: 0 auto;
`;
var IconStyles = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    justify-items: center;
    padding: 0 5rem;

    @media (max-width: 768px) {
        margin-top: 1rem;
        grid-template-columns: repeat(2, 1fr);
        justify-items: space-around;
        column-gap: 4rem;
        padding: 0 2rem;
    }
`;

export default function Index({ data = {} }) {
    var [showProjects, setShowProjects] = useState(false);
    var [showPosts, setShowPosts] = useState(false);
    var [showContact, setShowContact] = useState(false);
    var posts = data.allSanityPost?.nodes || [];
    var projects = data.allSanityProject?.nodes || [];

    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <title>Jules' Portfolio</title>
                <link rel="canonical" href="http://jules.codes" />
            </Helmet>
            <Wrapper>
                <WelcomeMessage />
                <IconStyles>
                    <Projects
                        updater={updater('projects')}
                        isOpen={showProjects}
                    />
                    <Writing updater={updater('posts')} isOpen={showPosts} />
                    <MusicHobby />
                    <Contact />
                </IconStyles>
                {showProjects && <NodesPreview nodes={projects} />}
                {showPosts && <NodesPreview nodes={posts} />}
                {showContact && <p>PopelContact</p>}
            </Wrapper>
            <SocialLinks />
        </>
    );

    function updater(string) {
        return () => {
            if (string == 'posts') {
                setShowPosts(o => !o);
                setShowProjects(false);
            } else if (string == 'projects') {
                setShowProjects(o => !o);
                setShowPosts(false);
            } else if (false) {
            }
        };
    }
}

export const pageQuery = graphql`
    query {
        allSanityPost {
            nodes {
                title
                mainImage {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                    alt
                }
                id
                slug {
                    current
                }
                publishedAt
            }
        }
        allSanityProject {
            nodes {
                title
                mainImage {
                    alt
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                id
                slug {
                    current
                }
            }
        }
    }
`;
