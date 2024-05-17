import React, { useEffect } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Change import to free-brands-svg-icons
import Skeleton from '@mui/material/Skeleton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextField from '@mui/material/TextField';

const RowWrapper = styled(Row)`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
`;

const RowWrapperHeader = styled.div`
  font-size: 48px;
  font-family: "Sora-Bold", sans-serif;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const StyledButton = styled(Button)`
  font-size: 20px;
  padding: 8px;
  font-family: 'Sora-ExtraBold', sans-serif;
`;

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'black',
    borderWidth: 2,
  }
});

const ValidationTextArea = styled(TextField)({
    minHeight: "200px",
  '& input:valid + fieldset': {
    borderColor: 'black',
    borderWidth: 2,
    minHeight: "200px"
  }
});

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
  align-items: flex-start;
`;

const NavItem = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const NavLinkText = styled.span`
  font-size: 0.675rem;
  line-height: 25px;
  font-weight: 550;
  text-align: center;
  font-family: inherit;
  color: #eee;
`;

const NavLinks = styled.div`
  color: black;
  background-color: white;
  border-radius: 6px;
  border: 2px solid black;
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
      border: 2px solid black;
      transform: scaleX(1.1) scaleY(1.1);
    }
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 767px) {
    padding-top: 30px;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
  }
`;
const NameSpan = styled.span`
  font-size: 48px;
  font-family: 'Sora-Bold', sans-serif;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;
const NameSpan2 = styled.span`
  font-size: 28px;
  font-family: 'Sora-Bold', sans-serif;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
const DiscriptionPtag = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #71717A;
  font-family: 'Sora-Light', sans-serif;
  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
const PositionSpan = styled.span`
  color: white;
  text-shadow: -2px -2px 0 #000,  
    2px -2px 0 #000,
    -2px  2px 0 #000,
    2px  2px 0 #000;
  font-family: 'Sora-ExtraBold', sans-serif;
  font-size: 48px;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;


export const Contact = ({ loading }) => {
  const SocialButtonContainer = () => {
    return (
      <>
        <MainContainer id="section4" data-aos="fade-up">
          <StyledButton variant="dark">Get In Touch</StyledButton>
          <NavItem href="/Facebook">
            <NavLinks className="transition-all text-white bg-black">
              <FontAwesomeIcon icon={faFacebook} />
            </NavLinks>
            <NavLinkText>Facebook</NavLinkText>
          </NavItem>
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {!loading ? (
        <RowWrapper data-aos="fade-up">
          <Row>
            <RowWrapperHeader>My Testimonial</RowWrapperHeader>
          </Row>
          <Row className="mt-4 d-md-flex justify-content-md-center">
            <Col xs={12} sm={5} className="p-sm-0 p-md-5">
              <ValidationTextField label="Your Name" id="margin-none" className="w-100" />
              <ValidationTextField label="Email" id="margin-none" className="w-100 mt-3" />
              <ValidationTextField label="Your website (If exists)" id="margin-none" className="w-100 mt-3" />
              <ValidationTextArea label="Enter your message" id="margin-none" minRows={5} className="w-100 mt-3" />
              <SocialButtonContainer />
            </Col>
            <Col xs={12} sm={7} className="p-sm-0 p-md-5">
              <ContentContainer>
                <h3 data-aos="fade-up">
                  <NameSpan>Let's </NameSpan>
                  <PositionSpan>talk</PositionSpan>
                  <NameSpan> for</NameSpan>
                </h3>
                <h1 data-aos="fade-up">
                  <NameSpan>Something special</NameSpan>
                </h1>
                <DiscriptionPtag data-aos="fade-up">
                  I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                </DiscriptionPtag>
                <h1Custom data-aos="fade-up" className="mt-4">
                  <NameSpan2>arjunarjun2159@gmail.com
                  </NameSpan2><br></br>
                  <NameSpan2>7593911819</NameSpan2>
                </h1Custom>  
              </ContentContainer>
            </Col>
          </Row>
        </RowWrapper>
      ) : (
        <Skeleton className="mt-2" variant="rectangular" height={500} />
      )}
    </>
  );
};

