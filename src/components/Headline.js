import React from "react";
import waving from "../images/Waving.png";
import styled from "styled-components";
import "../App.css";
import { breakpoints } from "./Media";

const Heading = styled.h1`
    width: 100%;
    font-size: 70px;
    font-weight: 900;
    line-height: 135%;
    letter-spacing: 0.03em;

    @media (max-width: ${breakpoints.tabletMax}) {
        font-size: 7vw;
    }
`;

function Headline() {
    return (
        <Heading>
            Hey, I'm Jeffrey <img src={waving} class="wave" /><br />
            Software <span id="highlight">Engineer</span>, <br />
            Cornellian and New Yorker. <span class="cursor"><i></i></span>
        </Heading>
    );
}

export default Headline;