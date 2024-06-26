import React, {useEffect} from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from '@mui/material/Skeleton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RowWrapper = styled(Row)`
  margin-top: 100px;
  padding: 40px 0px 100px;
  background: black;
  color: white;
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
const CardDiv = styled.div`
  border: .5px solid #71717A;
  flex-shrink: 0;
  border-radius: 8px;
  text-align: -webkit-center;
`;
const CustomH6 = styled.h6`
  font-family: 'Sora-SemiBold';
  font-size: 24px;
`;
const CustomH4 = styled.h4`
  font-family: 'Sora-SemiBold';
  font-size: 16px;
  color: #D4D4D8;
`;
const CustomP = styled.p`
  font-family: 'Sora-Light', sans-serif;
  font-size: 11px;
  color: #D4D4D8;
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Experience = ({loading}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
    {!loading ? (
    <RowWrapper id="section1" className="px-md-4" data-aos="fade-up">
      <RowWrapperHeader>My Experience</RowWrapperHeader>
      <Col>
        <CardDiv className = "m-4 p-4">
          <div className="d-block d-md-flex justify-content-between align-items-center">
            <CustomH6>Techversant Infotech.</CustomH6>
            <CustomH4>Jun 2022 - Present</CustomH4>
          </div>
          <div>
            <CustomP>
              I'm Arjun. Results-driven Associate Software Engineer with 2+ years of hands-on experience in React development. Proven collaborator with cross-functional teams, adept at delivering high-quality software solutions in fast-paced environments. Passionate about innovation, with a focus on enhancing user experiences. Eager to leverage technical expertise for challenging projects at Techversant Infotech.
            </CustomP>
          </div>
        </CardDiv>
      </Col>
    </RowWrapper>
    ) : (
      <Skeleton className="mt-2" variant="rectangular" height={500} />
    )}
  </>
  );
};
