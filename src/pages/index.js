import React from 'react';
import styled from 'styled-components';
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
      <WelcomeMessage />
      <Projects />
      <Contact />
      <SocialLinks />
      <MusicHobby />
      <Writing />
    </>
  );
}
