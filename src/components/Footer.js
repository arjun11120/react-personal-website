import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

import logoImage from '../assets/images/Vector.png';

const StyledRow = styled(Row)`
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
    width: 40px;
    height: auto;
`;

export const Footer = () => {
  return (
    <StyledRow className="bg-black">
      <LogoImage src={logoImage} alt="Example" />
    </StyledRow>
  )
}
