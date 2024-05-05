import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGit, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import Skeleton from '@mui/material/Skeleton';

const RowWrapper = styled(Row)`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
}
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
const StyledCard = styled(Card)`
  padding: 50px 30px;
  margin-top : 20px;
  height: 200px;
  width: 200px;
  border: 3px solid black;
  transition: background-color 0.15s ease, transform 0.15s ease;
  &:hover {
    transform: scaleX(1.1) scaleY(1.1);
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    font-size: 10px;
    height: 120px;
    width: 120px;
    padding: 30px;
  }
`;

const CardTitle = styled(Card.Title)`
  text-align: center;
  font-family: 'Sora-SemiBold'; 
  font-size: 17px;
  margin-top: 20px;
  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const Skills = ({ref, loading}) => {
  return (
    <>
      {!loading ? (
      <RowWrapper ref={ref}>
        <Row>
          <RowWrapperHeader>My Skills</RowWrapperHeader>
        </Row>
        <Row className="mt-4 d-md-flex justify-content-md-center">
          <Col xs={6} sm={4} lg={2} className="d-flex justify-content-center"> 
            <StyledCard>
              <FontAwesomeIcon icon={faReact} size="2x" />
                <CardTitle>React JS</CardTitle>
            </StyledCard>
          </Col>
          <Col xs={6} sm={4} lg={2} className="d-flex justify-content-center"> 
            <StyledCard>
              <FontAwesomeIcon icon={faJs} size="2x" />
                <CardTitle>JavaScript</CardTitle>
            </StyledCard>
          </Col>
          <Col xs={6} sm={4} lg={2} className="d-flex justify-content-center"> 
            <StyledCard>
              <FontAwesomeIcon icon={faGit} size="2x" />
                <CardTitle>Git</CardTitle>
            </StyledCard>
          </Col>
          <Col xs={6} sm={4} lg={2} className="d-flex justify-content-center"> 
            <StyledCard>
              <FontAwesomeIcon icon={faHtml5} size="2x" />
                <CardTitle>HTML5</CardTitle>
            </StyledCard>
          </Col>
          <Col xs={6} sm={4} lg={2} className="d-flex justify-content-center"> 
            <StyledCard>
              <FontAwesomeIcon icon={faCss3} size="2x" />
                <CardTitle>CSS3</CardTitle>
            </StyledCard>
          </Col>
          <Col xs={6} sm={4} lg={2} className="d-flex justify-content-center"> 
            <StyledCard>
              <FontAwesomeIcon icon={faNodeJs} size="2x" />
                <CardTitle>Node JS</CardTitle>
            </StyledCard>
          </Col>
        </Row>
      </RowWrapper>
      ) : (
        <Skeleton className="mt-2" variant="rectangular" height={500} />
      )}
    </>
  );
};
