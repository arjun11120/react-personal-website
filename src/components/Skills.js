import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGit, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const RowWrapper = styled(Row)`
  padding: 100px 0px 100px;
`;
const RowWrapperHeader = styled.div`
  font-size: 48px;
  font-family: "Sora-Bold", sans-serif;
  display: flex;
  justify-content: center;
`;
const StyledCard = styled(Card)`
  padding: 50px 30px;
  margin-top : 20px;
  border: 1px solid black;
`;

const CardTitle = styled(Card.Title)`
  text-align: center;
  font-family: 'Sora-light', sans-serif;
  font-size: 17px;
  margin-top: 20px;
`;

export const Skills = () => {
  return (
    <RowWrapper className="mx-3">
      <Row>
        <RowWrapperHeader>My Skills</RowWrapperHeader>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={6} lg={2}> 
          <StyledCard>
            <FontAwesomeIcon icon={faReact} size="2x" />
              <CardTitle>React JS</CardTitle>
          </StyledCard>
        </Col>
        <Col xs={12} md={6} lg={2}> 
          <StyledCard>
            <FontAwesomeIcon icon={faJs} size="2x" />
              <CardTitle>JavaScript</CardTitle>
          </StyledCard>
        </Col>
        <Col xs={12} md={6} lg={2}> 
          <StyledCard>
            <FontAwesomeIcon icon={faGit} size="2x" />
              <CardTitle>Git</CardTitle>
          </StyledCard>
        </Col>
        <Col xs={12} md={6} lg={2}> 
          <StyledCard>
            <FontAwesomeIcon icon={faHtml5} size="2x" />
              <CardTitle>HTML5</CardTitle>
          </StyledCard>
        </Col>
        <Col xs={12} md={6} lg={2}> 
          <StyledCard>
            <FontAwesomeIcon icon={faCss3} size="2x" />
              <CardTitle>CSS3</CardTitle>
          </StyledCard>
        </Col>
        <Col xs={12} md={6} lg={2}> 
          <StyledCard>
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
              <CardTitle>Node JS</CardTitle>
          </StyledCard>
        </Col>
      </Row>
    </RowWrapper>
  );
};
