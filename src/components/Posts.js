import React from 'react';
import styled from 'styled-components';
import { breakpoints } from "./Media.js";

import { Heading } from "./Reusables";

const PostsWrapper = styled.div`
  margin-top: 100px;

  @media (max-width: ${breakpoints.mobileMax}) {
    margin-top: 50px;
  }
`;

const Container = styled.div`
    margin: 0 0 100px 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    // background-color: aqua;

    @media (min-width: ${breakpoints.desktopMin}) {
        flex-wrap: nowrap;
    }
`;

const AboutWrapper = styled.div`
  
      font-size: 3vw;
      text-align: left;
      line-height: 150%;
      width: 100%;
      margin: 0;

      @media (min-width: ${breakpoints.tabletMin}) {
        font-size: 2vw;
        line-height: 150%;
      }

      @media (min-width: ${breakpoints.desktopMin}) {
        width: 50%;
        font-size: 20px;
        text-align: justify;
        line-height: 175%;
      }

      :nth-child(1) {
        @media (min-width: ${breakpoints.desktopMin}) {
            margin-right: 40px;
        }
      }
  
      :nth-child(2) {
        @media (min-width: ${breakpoints.desktopMin}) {
            margin-left: 40px;
        }
      }
`;

function Posts() {
    return (
        <PostsWrapper>
            <Heading>What I've been up to 👨‍💻</Heading>
            
            <Container>
              <AboutWrapper>
                I work on Platform at Yext NYC. 
                <br />
                <br />
                Beyond tech, I enjoy hooping, running & skiing — pretty much anything active.
                If I'm not with friends in real life, chances are I'm gaming with them online.
                Games I enjoy playing in my current rotation are: Modern Warfare, Warzone (10+ wins), 
                CS:GO (DMG rank), and Valorant.
                <br />
                <br />
              </AboutWrapper>
              <AboutWrapper> 
                My journey, from college to a few internships, has allowed me to 
                create products that I am proud to stand by, and deploy production
                level code that impacts users meaningfully.
                The opportunity to learn new technologies and to grow as a developer
                is something I continually look forward to. 
                Going forward, I hope to use computer science as a tool for providing 
                futureproof and beautiful solutions to modern day endeavors.
              </AboutWrapper>
            </Container>
                      

        </PostsWrapper>
    );
}

export default Posts;
