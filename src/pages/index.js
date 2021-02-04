import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// Components
import { Contact } from '../components/Contact';
import { SocialLinks } from '../components/SocialLinks';
import { MusicHobby } from '../components/MusicHobby';
import { Writing } from '../components/Writing';
import { Projects } from '../components/Projects';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { ScrollBackground } from '../components/ScrollBackground';
import { graphql } from 'gatsby';

export default function index({ data }) {
    const posts = data.allSanityPost.nodes || [];
    console.log({ posts });
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <title>Jules' Portfolio</title>
                <link rel="canonical" href="http://jules.codes" />
            </Helmet>
            <WelcomeMessage />
            <Projects />
            <Contact />
            <SocialLinks />
            <MusicHobby />
            <Writing posts={posts} />
            {/* <ScrollBackground /> */}
        </>
    );
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
                }
                id
                slug {
                    current
                }
                publishedAt
            }
        }
    }
`;
