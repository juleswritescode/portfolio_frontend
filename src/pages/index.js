import React from 'react';
import { Helmet } from 'react-helmet';
// Components
import { Contact } from '../components/Contact';
import { SocialLinks } from '../components/SocialLinks';
import { MusicHobby } from '../components/MusicHobby';
import { Writing } from '../components/Writing';
import { Projects } from '../components/Projects';
import { WelcomeMessage } from '../components/WelcomeMessage';

export default function index() {
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
      <Writing />
    </>
  );
}
