import Link from 'next/link';
import React from 'react';
import { AiFillCode, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: " white", marginBottom: "20px" }}>
        <DiCssdeck size="3rem" /> <Span>asigit</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/asigitj" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://asigit.showwcase.com/" target="_blank">
        <AiFillCode size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/gitnative/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
