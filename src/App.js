import React, {useEffect, useState} from "react";
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
import soraExtraBold from './fonts/static/Sora-ExtraBold.ttf'

import { BodyMain } from './components/BodyMain';
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { AboutBody } from "./components/AboutBody";
import { Projects } from "./components/Projects";
import { Contact }  from "./components/Contact";
import { Footer }  from "./components/Footer";

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
  @font-face {
    font-family: 'Sora-ExtraBold';
    src: url(${soraExtraBold}) format('truetype'); // Define the font source for Sora-Light
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

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
      setLoading(false);
    // }, 3000);
  }, []);

  const HeaderMain = () => {
    const [activeSection, setActiveSection] = useState("section1");
    return !loading ? (
      <Navbar expand="lg" className="bg-body-tertiary px-2">
        <Navbar.Brand href="/" className="d-flex">
          <BrandContainer>
            <LogoImage src={logoImage} alt="Example" />
            <StyledH4>Arjun</StyledH4>
          </BrandContainer>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
          <div className="flex-grow-1 d-lg-flex d-sm-block justify-content-center align-items-center">
          <StyledH4
            onClick={() => {
              setActiveSection("section2");
              scrollToSection("section2");
            }}
            style={{ color: activeSection === "section2" ? "gray" : "black" }}
          >
            Skills
          </StyledH4>
          <StyledH4
            onClick={() => {
              setActiveSection("section1");
              scrollToSection("section1");
            }}
            style={{ color: activeSection === "section1" ? "gray" : "black" }}
          >
            Experience
          </StyledH4>
          <StyledH4
            onClick={() => {
              setActiveSection("section3");
              scrollToSection("section3");
            }}
            style={{ color: activeSection === "section3" ? "gray" : "black" }}
          >
            About
          </StyledH4>
          <StyledH4
            onClick={() => {
              setActiveSection("section4");
              scrollToSection("section4");
            }}
            style={{ color: activeSection === "section4" ? "gray" : "black" }}
          >
            Contact
          </StyledH4>
          </div>
          <Form className="d-flex">
            <Button className="bg-black border-0" href="/src/assets/documents/Arjun_Krishnakumar_Resume.pdf" download>
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
      <Container fluid style={{ maxWidth: '2000px' }}>
        <HeaderMain loading={loading}  />
        <GlobalStyle />
        <BodyMain loading={loading} />
        <Skills loading={loading} />
        <Experience loading={loading} />
        <AboutBody loading={loading} />
        <Projects loading={loading} />
        <Contact />
        <Footer/>
      </Container>
  );
};
export default App;
