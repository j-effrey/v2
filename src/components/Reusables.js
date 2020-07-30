import styled from 'styled-components';
import { breakpoints } from "./Media";

const Heading = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 129.69%;
  letter-spacing: 0.03em;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 6vw;
  }
`;

const Paragraph = styled.p`

  font-size: 3vw;
  width: 100%;
  line-height: 150%;

  @media (min-width: ${breakpoints.tabletMin}) {
    font-size: 2vw;
    width: 70%;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    width: 35%;
    font-size: 20px;
    line-height: 175%;
  }

`;

export { Heading, Paragraph };