import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      The purpose of software developer is to help Start-Up and established Companies to take their business to the next level and build awesome apps.
      </SectionText>
      <Button onClick={() => window.location ="https://www.instagram.com/gitnative/" }>Get In Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;