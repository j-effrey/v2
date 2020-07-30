import React from 'react';
import BannerPic from '../images/banner2.jpg';
import styled from "styled-components";
import { breakpoints } from "./Media";

const BannerWrapper = styled.div`
    width: 100%;
    margin-top: 70px;

    @media (max-width: ${breakpoints.mobileMax}) {
        margin-top: 30px;
    }
`;

function Banner() {
    return (
        <BannerWrapper>
            <img src={BannerPic} class="banner" />
        </BannerWrapper>
    );
}

export default Banner;