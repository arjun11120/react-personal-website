import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from "@mui/material/Skeleton";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import myImage from "../assets/images/ProjectImage1.png";

const RowWrapper = styled(Row)`
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
const ProjectImage = styled.img`
  padding: 20px 70px;
  @media (max-width: 767px) {
    padding: 10px;
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
          <Row>
            <Col xs={12} sm={6}>
              <ProjectImage
                src={myImage}
                alt="profile image"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} sm={6} className="mt-4">
              <Card>
                <Card.Body>
                  <Card.Title>01</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Crypto Screener Application</Card.Subtitle>
                  <Card.Text>
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </RowWrapper>
      )}
    </>
  );
};
