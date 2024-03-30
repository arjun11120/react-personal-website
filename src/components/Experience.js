import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";

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
`;

export const Experience = () => {
  return (
    <RowWrapper className="mx-3">
      <Row>
        <RowWrapperHeader>My Experience</RowWrapperHeader>
      </Row>
    </RowWrapper>
  );
};
