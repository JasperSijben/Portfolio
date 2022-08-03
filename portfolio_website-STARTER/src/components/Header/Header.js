import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container id='head'>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: 19 }}>
          <DiCssdeck size= "3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="/#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/jasper-sijben/">
        <AiFillLinkedin size="5rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
