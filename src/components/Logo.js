import React from "react";
import logoBlack from "../images/Logo-Jeff-Left.png";
import logoWhite from "../images/Logo-Jeff-Left-White.png";
import styled from "styled-components";
import { breakpoints } from "./Media";
import { string } from 'prop-types';

const LogoWrapper = styled.div`
  margin-bottom: 30px;
  width: 50%;

  @media (max-width: ${breakpoints.mobileMax}) {
    margin-bottom: 5px;
  }
`;

const Logo = ({ theme }) => {
  var isLight = theme === 'light';

  return (
    <LogoWrapper>
      <img src={isLight ? logoBlack : logoWhite} class="logo"></img>
    </LogoWrapper>
  )
};

Logo.propTypes = {
  theme: string.isRequired,
}

export default Logo;
