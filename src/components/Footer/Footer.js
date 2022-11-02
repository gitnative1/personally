import React from 'react';
import {BsWhatsapp} from 'react-icons/bs'
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=+621316109035" target="_blank">
          <BsWhatsapp size="3rem" />
            WhatsApp
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:asigitj1@gmail.com">
          <AiFillMail size="3rem" />
            Gmail
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/asigitj" target="_blank">
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://asigit.showwcase.com/" target="_blank">
            <AiFillCode size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/gitnative/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
