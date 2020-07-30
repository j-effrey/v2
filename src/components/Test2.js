import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

function Test2() {
    return (
        <div>
            <FontAwesomeIcon icon={faGithub} size='lg'/>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
            <FontAwesomeIcon icon={faMedium} size='lg' />
            <FontAwesomeIcon icon={faInstagram} size='lg' />
        </div>
    );
}

export default Test2;