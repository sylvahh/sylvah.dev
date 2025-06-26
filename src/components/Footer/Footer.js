import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234 8104205644">+234 8104205644</LinkItem>
        </LinkColumn>
      </LinkList>
        <CompanyContainer>
          <Slogan>Developed by Sylvester ✌️</Slogan>
        </CompanyContainer>
  
    </FooterWrapper>
  );
};

export default Footer;