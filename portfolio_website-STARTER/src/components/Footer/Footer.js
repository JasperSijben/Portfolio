import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Link from 'next/dist/client/link';
import { SocialIcons, NavLink } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionTitle>Contacts</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Send a Message</LinkTitle>
          <ContactForm/>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Info:</LinkTitle>
          jasper@familiesijben.nl
          <br/>
          <br/>
          +31 618260881
        </LinkColumn>
      </LinkList>

      <div style={{alignment: 'center'}}>
        <Link href='#head'>
          <NavLink>Back to top</NavLink>
        </Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
