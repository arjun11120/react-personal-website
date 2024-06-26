import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Skeleton from '@mui/material/Skeleton';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { SocialButtonContainer } from './SocialButtonContainer'
import bodyImage from '../assets/images/Banner.png';

const BodyImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 50px;
  @media (max-width: 767px) {
    max-width: 100%;
    margin: 20px 0px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 767px) {
    padding-top: 200px;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
  }
`;

const NameWish = styled.span`
  font-size: 48px;
  font-family: 'Sora-Light', sans-serif;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const StyledRow = styled(Row)`
  /* Define styles for StyledRow */
`;

const StyledCol = styled(Col)`
  /* Define styles for StyledCol */
`;

const NameSpan = styled.span`
  font-size: 48px;
  font-family: 'Sora-Bold', sans-serif;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const PositionSpan = styled.span`
  color: white;
  text-shadow: -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px  1px 0 #000,
              1px  1px 0 #000; 
  font-family: 'Sora-Bold', sans-serif;
  font-size: 48px;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const DiscriptionPtag = styled.p`
  font-size: 12px;
  font-family: 'Sora-Light', sans-serif;
  @media (max-width: 767px) {
    font-size: 8px;
  }
`;

export const BodyMain = ({ loading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      {!loading ? (
        <StyledRow className="px-md-4 pt-4 mt-4">
          <StyledCol xs={{ order: "last", span: 12 }} md={{ order: "first", span: 6 }}>
            <ContentContainer>
              <h1 data-aos="fade-up">
                <NameWish>Hello I’am </NameWish>
                <NameSpan>Arjun</NameSpan>
              </h1>
              <h3 data-aos="fade-up">
                <NameSpan>React </NameSpan>
                <PositionSpan>Developer</PositionSpan>
              </h3>
              <p data-aos="fade-up"><NameWish>Based In </NameWish><NameSpan>India.</NameSpan></p>
              <DiscriptionPtag data-aos="fade-up">
                I'm Arjun. Results-driven Associate Software Engineer with 2+ years of hands-on experience in React development. Proven collaborator with cross-functional teams, adept at delivering high-quality software solutions in fast-paced environments. Passionate about innovation, with a focus on enhancing user experiences. Eager to leverage technical expertise for challenging projects at Techversant Infotech.
              </DiscriptionPtag>
            </ContentContainer>
            <SocialButtonContainer />
          </StyledCol>
          <StyledCol xs={{ order: "first", span: 12 }} md={{ order: "last", span: 6 }} className="d-flex align-items-center justify-content-center mt-4" data-aos="fade-up">
            <BodyImage src={bodyImage} alt="profile image" className="img-fluid" />
          </StyledCol>
        </StyledRow>
      ) : (
        <Skeleton className="mt-2" variant="rectangular" height={500} />
      )}
    </>
  );
};
