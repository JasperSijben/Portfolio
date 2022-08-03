import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        Hello there, I'm Jasper Sijben. I'm a student at Fontys ICT and right now I'm specializing in Game Design. I enjoy creating cool concepts, working the logic and making things pretty. I still have a lot to learn but here is some of my work so far!
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;