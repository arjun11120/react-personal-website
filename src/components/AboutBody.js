import React, {useEffect} from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from '@mui/material/Skeleton';
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImage from '../assets/images/aboutImage.png';

const RowWrapperHeader = styled.div`
  font-size: 48px;
  font-family: "Sora-Bold", sans-serif;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    font-size: 32px;
    justify-content: flex-start;
    padding: 30px 0px;
  }
`;

const PCustomTag = styled.p`
  font-size: 16px;
  color: #71717A;
  
  font-family: 'Sora-regular', sans-serif;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

export const AboutBody = ({ loading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton className="mt-2" variant="rectangular" height={500} />
      ) : (
        <>
          <Row id="section3" className="p-md-5 p-4" data-aos="fade-up">
            <Col xs={12} sm={6}>
              <img src={aboutImage} alt="profile image" className="img-fluid" />
            </Col>
            <Col>
              <RowWrapperHeader>About Me</RowWrapperHeader>
              <PCustomTag>&nbsp; &nbsp;Hey there! I'm Arjun Krishnakumar, currently serving as an Associate Software Engineer at Techversant Infotech. Over the span of 2 years, I've immersed myself in the world of React development, specializing in crafting dynamic and user-centric web applications. My toolkit includes React, Redux, JavaScript, Git, and more, allowing me to engineer robust and scalable solutions tailored to meet diverse project needs.</PCustomTag>

              <PCustomTag>Known for my collaborative spirit and knack for thriving in fast-paced environments, I pride myself on delivering top-notch software solutions that exceed expectations. Recently, I spearheaded a pivotal transition within our team, migrating from traditional Redux to the Redux Toolkit framework. This initiative not only streamlined our codebase but also significantly enhanced performance and maintainability, reflecting my commitment to staying at the forefront of industry best practices.</PCustomTag>

              <PCustomTag>Passionate about the intersection of technology and design, I'm driven by the challenge of translating complex ideas into intuitive and visually stunning digital experiences. Whether it's refining user interfaces for optimal usability or optimizing code for peak performance, I'm dedicated to pushing boundaries and delivering excellence in every project I undertake. Let's collaborate and embark on an exciting journey of innovation and creativity!</PCustomTag>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

