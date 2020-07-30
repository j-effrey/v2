import React from 'react';
import styled from 'styled-components';
import { breakpoints } from "./Media";
import yext from '../images/yext1.jpg';
import lm from '../images/lm.jpg';
import cu from '../images/cu.JPG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faTerminal, faWaveSquare, faBasketballBall, faTableTennis, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faFile, faSmileWink } from '@fortawesome/free-regular-svg-icons';
import { Heading } from "./Reusables";

import dynamic from 'next/dynamic';

// import Carousel, { arrowsPlugin, Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

const { default: Carousel, Dots, arrowsPlugin } = dynamic(
    () => require('@brainhubeu/react-carousel'),
    { ssr: false },
);

const ExperiencesWrapper = styled.div`
    width: 100%;
`;

const Read = styled.p`
    transition-duration: 0.5s;
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    font-size: 15px;
    padding-bottom: 3px;
    font-weight: 700;

    display: inline;

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 3.25vw;
    }
`;

const ReadWrapper = styled.div`
    text-align: center;
    margin-top: 10px;
`;

const Experience = styled.div`
    margin: auto;
    padding: 20px;
    width: 50%;
    border-radius: 15px;
    transition-duration: 0.5s;

    @media (max-width: ${breakpoints.mobileMax}) {
        width: 100%;
    }

    :hover {
        transform: scale(1.02);
        ${Read} {
            transition-duration: 0.5s;

            border-bottom: 3px solid dimgray;
        }
    }
`;

const Title = styled(Heading)`
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-align: center;

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 5vw;
    }
`;

const Body = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
    font-size: 4vw;

    @media (min-width: ${breakpoints.tabletMin}) {
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 30px;
        font-size: 18px;
    }
`;

const BulletBody = styled.p`
    line-height: 100%;

    @media (min-width: ${breakpoints.desktopMin}) {
        line-height: 75%;
    }
`;

const Details = styled.p`
    display: flex;
    padding: 0;
    margin: -20px 0;
    margin-right: 10px;
    font-size: 3.5vw;
    font-weight: 700;
    text-align: center;
    
    @media (min-width: ${breakpoints.tabletMin}) {
        font-size: 14px;
    }

    @media (min-width: 1366px) {
        display: inline;
    }
`;

class Experiences extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
            (
                <Experience>
                    <div class="exppanel">
                        <a href="https://medium.com/@j.effrey/reflections-of-a-yextern-a412b8d79066?source=friends_link&sk=e5e91e566ed3a8e3e7e18f265f48783b" target="_blank" rel="noopener noreferrer">
                            <img src={yext} class="banner" style={{borderRadius: '15px 15px 0 0'}} />
                            <Title>Yext 📈</Title>
                            <Body>
                                <BulletBody>Developer — Platform</BulletBody>
                                <BulletBody>Summer 2020 »</BulletBody>
                                <Details><p class="detail"><FontAwesomeIcon icon={faCode} size='xs' style={{marginRight: '5px'}} /> Java</p></Details>
                                <Details><p class="detail"><FontAwesomeIcon icon={faSmileWink} size='xs' style={{marginRight: '5px'}} /> In progress</p></Details>
                                <br /><br />
                                <BulletBody>Intern — Yext Pages</BulletBody>
                                <BulletBody>Summer 2019</BulletBody>
                                <Details><p class="detail"><FontAwesomeIcon icon={faCode} size='xs' style={{marginRight: '5px'}} /> Golang</p></Details>
                                <Details><p class="detail"><FontAwesomeIcon icon={faCode} size='xs' style={{marginRight: '5px'}} /> React.js</p></Details>
                                <Details><p class="detail"><FontAwesomeIcon icon={faFile} size='xs' style={{marginRight: '5px'}} /> Page Builder</p></Details>
                                <br /><br />
                                <ReadWrapper><Read>Read story ›</Read></ReadWrapper>
                            </Body>
                        </a>
                    </div>
                </Experience>
            ),
            (
                <Experience>
                    <div class="exppanel">
                        <a href="https://medium.com/@j.effrey/b8b26b798e2c?source=friends_link&sk=082b69e5b47042df9f9456e93428b7f3" target="_blank" rel="noopener noreferrer">
                            <img src={lm} class="banner" style={{borderRadius: '15px 15px 0 0'}} />
                            <Title>Lockheed Martin 🚀</Title>
                            <Body>
                                <BulletBody>Intern — RMS Databases</BulletBody>
                                <BulletBody>Summer 2018</BulletBody>
                                <Details><p class="detail"><FontAwesomeIcon icon={faCode} size='xs' style={{marginRight: '5px'}} /> Python</p></Details>
                                <Details><p class="detail"><FontAwesomeIcon icon={faTerminal} size='xs' style={{marginRight: '5px'}} /> Bash scripting</p></Details>
                                <Details><p class="detail"><FontAwesomeIcon icon={faWaveSquare} size='xs' style={{marginRight: '5px'}} /> DSP</p></Details>
                                <br /><br />
                                <ReadWrapper><Read>Read story ›</Read></ReadWrapper>
                            </Body>
                        </a>
                    </div>
                </Experience>
            ),
            (
                <Experience>
                    <div class="exppanel">
                        {/* <a href="https://medium.com/@j.effrey/reflections-of-a-yextern-a412b8d79066?source=friends_link&sk=e5e91e566ed3a8e3e7e18f265f48783b" target="_blank" rel="noopener noreferrer"> */}
                            <img src={cu} class="banner" style={{borderRadius: '15px 15px 0 0'}} />
                            <Title>Cornell University 🐻</Title>
                            <Body>
                                <BulletBody>Graduate — CS & Business</BulletBody>
                                <BulletBody>2016 - 2020</BulletBody>
                                <Details><p class="detail"><FontAwesomeIcon icon={faTableTennis} size='xs' style={{marginRight: '5px'}} /> Badminton</p></Details>
                                <Details><p class="detail"><FontAwesomeIcon icon={faBasketballBall} size='xs' style={{marginRight: '5px'}} /> IM Basketball</p></Details>
                                <br /><br />
                                <BulletBody>TA — CS4700</BulletBody>
                                <BulletBody>Fall 2018</BulletBody>
                                <Details><p class="detail"><FontAwesomeIcon icon={faBrain} size='xs' style={{marginRight: '5px'}} /> Artificial Intelligence</p></Details>
                                <br /><br />
                                {/* <ReadWrapper><Read>Read story ›</Read></ReadWrapper> */}
                            </Body>
                        {/* </a> */}
                    </div>
                </Experience>
            ),
            ],
        }
        this.onchange = this.onchange.bind(this);
    }

    onchange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <ExperiencesWrapper>
                <Carousel
                    value={this.state.value}
                    slides={this.state.slides}
                    onChange={this.onchange}
                    plugins={[
                        'fastSwipe',
                        'infinite',
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: <button>«</button>,
                                arrowRight: <button>»</button>,
                                addArrowClickHandler: true,
                            }
                        }
                    ]}
                />
                <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </ExperiencesWrapper>
        );
    }
}

export default Experiences;