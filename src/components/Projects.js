import React, {useEffect} from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from "@mui/material/Skeleton";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import myImage from "../assets/images/ProjectImage1.png";
import myImage2 from "../assets/images/ProjectImage2.png";
import myImage3 from "../assets/images/ProjectImage3.png";

const RowWrapper = styled(Row)`
  padding: 40px 0px 100px;
  background: black;
  color: white;
`;

const ColImage = styled(Col)`
  justify-content: center;
  display: flex;
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

const RowWrapperBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
    border-bottom: 1px solid #686868;
  }
`;

const ProjectImage = styled.img`
  align-self: flex-end;
  @media (max-width: 767px) {
    padding-left: 20px;
    justify-content: center;
    display: flex;
  }
`;
const ProjectImage2 = styled.img`
  align-self: flex-end;
  @media (max-width: 767px) {
    padding-right: 20px;
    justify-content: center;
    display: flex;
  }
`;

const StyledCard = styled(Card)`
  background: black;
  color: white;

  .card-body-size {
    padding: 1.25rem;
  }
`;

const CardTitle = styled(Card.Title)`
  font-size: 48px;
  font-family: 'Sora-ExtraBold', sans-serif;
`;

const CardSubtitle = styled(Card.Subtitle)`
  font-size: 32px;
  margin-bottom: 0.5rem;
  font-family: 'Sora-Bold', sans-serif;
`;

const CardText = styled(Card.Text)`
  font-size: 16px;
  font-family: 'Sora-Regular'; 
  color: #71717A;
`;

export const Projects = ({ loading }) => {
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
        <RowWrapper className="p-md-5">
          <RowWrapperHeader data-aos="fade-up">Projects</RowWrapperHeader >
          <RowWrapperBody>
            <ColImage xs={12} sm={6} data-aos="fade-up">
              <ProjectImage
                src={myImage}
                alt="profile image"
                className="img-fluid"
                data-aos="fade-up"
              />
            </ColImage>
            <Col xs={12} sm={6} className="mt-4 d-sm-block d-md-flex justify-content-center" data-aos="fade-up">
              <StyledCard className="card-body-size">
                <Card.Body>
                  <CardTitle>01</CardTitle>
                  <CardSubtitle>Portfolio using react</CardSubtitle>
                  <CardText>
                    Designed and developed a personal website using React.js, showcasing my portfolio, projects, and personal information. Leveraged React's component-based architecture to create a modular and scalable website structure. Employed modern design principles and responsive web design techniques to ensure optimal user experience across devices. Integrated interactive elements and animations to engage visitors and highlight key information effectively.
                  </CardText>
                  <Card.Link href="https://github.com/arjun11120/react-personal-website">
                    <FontAwesomeIcon className="text-white" icon={faShareFromSquare} />
                  </Card.Link>
                </Card.Body>
              </StyledCard>
            </Col>
          </RowWrapperBody>
          <RowWrapperBody data-aos="fade-up">
            <Col xs={12} sm={6} className="mt-4 d-sm-block d-md-flex justify-content-center">
              <StyledCard className="card-body-size" data-aos="fade-up">
                <Card.Body>
                  <CardTitle>02</CardTitle>
                  <CardSubtitle>React Shopping Cart Application</CardSubtitle>
                  <CardText>
                    Developed a dynamic shopping cart app using React.js, allowing users to browse products and seamlessly add items to their cart. Utilized state management to track cart items, enhancing user experience by providing real-time updates. Implemented responsive design principles for optimal performance across various devices.
                  </CardText>
                  <Card.Link href="https://github.com/arjun11120/react-cart">
                    <FontAwesomeIcon className="text-white" icon={faShareFromSquare} />
                  </Card.Link>
                </Card.Body>
              </StyledCard>
            </Col>
            <ColImage xs={12} sm={6} data-aos="fade-up">
              <ProjectImage2
                src={myImage2}
                alt="profile image"
                className="img-fluid"
              />
            </ColImage>
          </RowWrapperBody>
          <RowWrapperBody data-aos="fade-up">
            <ColImage xs={12} sm={6} data-aos="fade-up">
              <ProjectImage
                src={myImage3}
                alt="profile image"
                className="img-fluid"
              />
            </ColImage>
            <Col xs={12} sm={6} className="mt-4 d-sm-block d-md-flex justify-content-center">
              <StyledCard className="card-body-size" data-aos="fade-up">
                <Card.Body>
                  <CardTitle>03</CardTitle>
                  <CardSubtitle>Node.js Shopping Cart with MongoDB</CardSubtitle>
                  <CardText>
                    Built a sleek shopping cart app using Node.js, Express, and MongoDB. Efficiently manages product browsing, cart organization, and checkout. Powered by MongoDB for scalable data handling.
                  </CardText>
                  <Card.Link href="https://github.com/arjun11120/shopping-cart">
                    <FontAwesomeIcon className="text-white" icon={faShareFromSquare} />
                  </Card.Link>
                </Card.Body>
              </StyledCard>
            </Col>
          </RowWrapperBody>
        </RowWrapper>
      )}
    </>
  );
};
