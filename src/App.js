import React, {useEffect, useRef, useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled, {createGlobalStyle} from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import logoImage from './assets/images/logo 1.png';
import soraBold from './fonts/static/Sora-Bold.ttf';
import soraSemiBold from './fonts/static/Sora-SemiBold.ttf'
import SoraThin from './fonts/static/Sora-Thin.ttf'
import soraLight from './fonts/static/Sora-Light.ttf';
import soraRegular from './fonts/static/Sora-Regular.ttf'

import { BodyMain } from './components/BodyMain';
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { AboutBody } from "./components/AboutBody";
import { Projects } from "./components/Projects";

import './css/App.css'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sora-Regular'; // Define the font family name
    src: url(${soraRegular}) format('truetype'); // Specify the font source
    font-weight: bold; // Optional: specify font-weight
    font-style: normal; // Optional: specify font-style
  }
  @font-face {
    font-family: 'Sora-Bold'; // Define the font family name
    src: url(${soraBold}) format('truetype'); // Specify the font source
    font-weight: bold; // Optional: specify font-weight
    font-style: normal; // Optional: specify font-style
  }
  @font-face {
    font-family: 'Sora-SemiBold'; // Define the font family name for Sora-SemiBold
    src: url(${soraSemiBold}) format('truetype'); // Specify the font source for Sora-SemiBold
    font-weight: 600; // Specify the font weight for Sora-SemiBold
    font-style: normal;
  }
  @font-face {
    font-family: 'Sora-Thin';
    src: url(${SoraThin}) format('truetype');
    font-weight: 200; /* Adjust weight as needed */
    font-style: normal;
  }
  @font-face {
    font-family: 'Sora-Light';
    src: url(${soraLight}) format('truetype'); // Define the font source for Sora-Light
    font-weight: 300; // Adjust the font weight if necessary
    font-style: normal;
  }
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`;
const StyledH4 = styled.h4`
  padding: 10px;
  font-size: 20px;
  font-family: 'Sora-Bold', sans-serif;
  margin-bottom : 0;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled(Button)`
  font-family: 'Sora-SemiBold', sans-serif;
  padding: 2px;
`;
const StyledSkeleton = styled(Skeleton)`
  font-family: 'Sora-SemiBold', sans-serif;
  padding: 2px;
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (!elementRef || !elementRef.current) {
      console.error("Element reference is null or current element is null.");
      return;
    }
  
    // Add a short delay before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }, 100); // Adjust the delay as needed
  };
  

  useEffect(() => {
    // setTimeout(() => {
      setLoading(false);
    // }, 3000);
  }, []);

  const HeaderMain = () => {
    return !loading ? (
      <Navbar expand="lg" className="bg-body-tertiary px-md-4">
        <Navbar.Brand onClick={() => scrollToSection(homeRef)} className="d-flex">
          <BrandContainer>
            <LogoImage src={logoImage} alt="Example" />
            <StyledH4>Arjun</StyledH4>
          </BrandContainer>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
          <div className="flex-grow-1 d-lg-flex d-sm-block justify-content-center align-items-center">
            <StyledH4 onClick={() => scrollToSection(experienceRef)}>Experience</StyledH4>
            <StyledH4 onClick={() => scrollToSection(skillsRef)}>Skills</StyledH4>
            <StyledH4 onClick={() => scrollToSection(aboutRef)}>About</StyledH4>
            <StyledH4>Contact me</StyledH4>
          </div>
          <Form className="d-flex">
            <Button className="bg-black border-0">
              <StyledButton className="bg-black border-0">
                <StyledFontAwesomeIcon icon={faDownload} />
                Resume
              </StyledButton>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <StyledSkeleton className="mt-2" variant="rectangular" height={50}></StyledSkeleton>
    );
  };

  return (
    <Container className="p-0 m-0" fluid>
      <Container fluid style={{ maxWidth: '2000px' }}>
        <GlobalStyle />
        <HeaderMain />
        <BodyMain ref={homeRef} loading={loading} />
        <Skills ref={skillsRef} loading={loading} />
        <Experience ref={experienceRef} loading={loading} />
        <AboutBody ref={aboutRef} loading={loading} />
        <Projects ref={aboutRef} loading={loading} />
      </Container>
    </Container>
  );
};
export default App;
