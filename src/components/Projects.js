import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from "@mui/material/Skeleton";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
  }
`;
const ProjectImage = styled.img`
  align-self: flex-end;
  @media (max-width: 767px) {
    justify-content: center;
    display: flex;
    padding-left: 25px;
  }
`;

export const Projects = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Skeleton className="mt-2" variant="rectangular" height={500} />
      ) : (
        <RowWrapper className="p-md-5">
          <RowWrapperHeader>Projects</RowWrapperHeader>
          <RowWrapperBody>
            <ColImage xs={12} sm={6}>
              <ProjectImage
                src={myImage}
                alt="profile image"
                className="img-fluid"
              />
            </ColImage>
            <Col xs={12} sm={6} className="mt-4 d-sm-block d-md-flex justify-content-center">
              <Card className="bg-black text-white">
                <Card.Body>
                  <Card.Title style={{ fontSize: '48px'}}>01</Card.Title>
                  <Card.Subtitle style={{ fontSize: '32px'}} className="mb-2">Crypto Screener Application</Card.Subtitle>
                  <Card.Text style={{ fontSize: '16px'}}>
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </RowWrapperBody>
          <RowWrapperBody>
            <Col xs={12} sm={6} className="mt-4 d-sm-block d-md-flex justify-content-center">
              <Card className="bg-black text-white">
                <Card.Body>
                  <Card.Title style={{ fontSize: '48px'}}>02</Card.Title>
                  <Card.Subtitle style={{ fontSize: '32px'}} className="mb-2">Crypto Screener Application</Card.Subtitle>
                  <Card.Text style={{ fontSize: '16px'}}>
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <ColImage xs={12} sm={6}>
              <ProjectImage
                src={myImage2}
                alt="profile image"
                className="img-fluid"
              />
            </ColImage>
          </RowWrapperBody>
          <RowWrapperBody>
            <ColImage xs={12} sm={6}>
              <ProjectImage
                src={myImage3}
                alt="profile image"
                className="img-fluid"
              />
            </ColImage>
            <Col xs={12} sm={6} className="mt-4 d-sm-block d-md-flex justify-content-center">
              <Card className="bg-black text-white">
                <Card.Body>
                  <Card.Title style={{ fontSize: '48px'}}>01</Card.Title>
                  <Card.Subtitle style={{ fontSize: '32px'}} className="mb-2">Crypto Screener Application</Card.Subtitle>
                  <Card.Text style={{ fontSize: '16px'}}>
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </RowWrapperBody>
        </RowWrapper>
      )}
    </>
  );
};
