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
    width: clamp(100px, 80%, 950px);
    padding: 2rem;
    min-width: 100px;
    max-width: 950px;
    margin: 0 auto;
`;
var IconStyles = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-items: center;
    padding: 0 5rem;
`;

export default function Index({ data = {} }) {
    var [showProjects, setShowProjects] = useState(false);
    var [showPosts, setShowPosts] = useState(false);
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
                    <Projects updater={updater} isOpen={showProjects} />
                    <Writing updater={updater} isOpen={showPosts} />
                    <MusicHobby />
                    <Contact />
                </IconStyles>
                {showProjects && <NodesPreview nodes={projects} />}
                {showPosts && <NodesPreview nodes={posts} />}
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
