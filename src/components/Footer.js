import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Pdf from '../images/Resume-2020.pdf'
import { breakpoints } from "./Media";
import { string } from 'prop-types';

import { Heading, Paragraph } from './Reusables';

const FooterWrapper = styled.div`
    margin-top: 100px;

    @media (max-width: ${breakpoints.mobileMax}) {
        margin-top: 30px;
    }
`;

const Email = styled.div`

    font-size: 3.5vw;
    margin-top: 30px;
    font-weight: 700;
    padding-bottom: 5px;
    display: inline-block;

    @media (min-width: ${breakpoints.tabletMin}) {
        font-size: 2.5vw;
    }

    @media (min-width: ${breakpoints.desktopMin}) {
        font-size: 20px;
    }

`;

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Social = styled.div`
    a {
        margin: 0 0 0 15px;
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        text-decoration: none;
        padding-bottom: 3px;
        font-weight: 700;
        font-size: 13px;

        @media (min-width: ${breakpoints.mobileMin}) {
            font-size: 15px;
        }

        @media (min-width: ${breakpoints.tabletMin}) {
            margin: 0 0 0 30px;
            font-size: 19px;
        }

    }
`;

const Footer = ({ theme }) => {

    const isLight = theme === 'light';

    return (
        <FooterWrapper>
            <Heading>Want to grab a drink? 🍻</Heading>
            <Paragraph>Still interested? Feel free to reach out if you want to connect or have more questions. Let's chat.</Paragraph>
            <a href="mailto: jhw263@cornell.edu" class="email"><Email>jhw263@cornell.edu</Email></a>

            <Container>
                    <Logo theme={theme} />
                    <Social>
                        <a
                            title='Resume - Jeffrey Wong 2020'
                            target='_blank'
                            rel='noreferrer'
                            href={Pdf}
                            class="footer"
                        >
                            résumé
                        </a>
                        <a
                            title='Github - @j-effrey'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/j-effrey'
                            class="footer"
                        >
                            github
                        </a>
                        <a
                            title='Linkedin - Jeffrey Wong'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.linkedin.com/in/wongjeffrey'
                            class="footer"
                        >
                            linkedin
                        </a>
                    </Social>
                </Container>

        </FooterWrapper>
    );
}

Footer.propTypes = {
    theme: string.isRequired,
}

export default Footer;