import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Change import to free-brands-svg-icons

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  padding-top: 1rem;
  margin-bottom: 0.5rem;
`;

const NavItem = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const NavLinkText = styled.span`
  font-size: 0.675rem;
  line-height: 1.25rem;
  font-weight: 550;
  text-align: center;
  font-family: inherit;
  color: #eee;
`;

const NavLinks = styled.div`
  color: black;
  background-color: white;
  border-radius: 0.5rem;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem; /* Adjust width as needed */
  height: 3rem; /* Adjust height as needed */
  transition: background-color 0.15s ease, transform 0.15s ease;
  &:hover {
    background-color: #000;
    color: rgba(255, 51, 51, 0.8);
    &:hover {
      background-color: #fff;
      color: #000;
      border: 3px solid black;
      transform: scaleX(1.1) scaleY(1.1);
    }
  }
`;


export const SocialButtonContainer = () => {
  return (
    <>
      <MainContainer>
        <NavItem href="/LinkedIn">
          <NavLinks className="transition-all">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLinks>
          <NavLinkText>LinkedIn</NavLinkText>
        </NavItem>
        <NavItem href="/Instagram">
          <NavLinks className="transition-all">
            <FontAwesomeIcon icon={faInstagram} />
          </NavLinks>
          <NavLinkText>Instagram</NavLinkText>
        </NavItem>
        <NavItem href="/Facebook">
          <NavLinks className="transition-all">
            <FontAwesomeIcon icon={faFacebook} />
          </NavLinks>
          <NavLinkText>Facebook</NavLinkText>
        </NavItem>
        <NavItem href="/Whatsapp">
          <NavLinks className="transition-all">
            <FontAwesomeIcon icon={faWhatsapp} />
          </NavLinks>
          <NavLinkText>Whatsapp</NavLinkText>
        </NavItem>
      </MainContainer>
    </>
  );
};
