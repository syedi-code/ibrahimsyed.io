import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import './LandingContact.css';

const LandingContact: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px'
    }

    const boxStyle: React.CSSProperties = {
        padding: '25px'
    }

    return (
        <div style={containerStyle}>
            <a href='https://github.com/syedi-code' >
                <FontAwesomeIcon icon={faGithubSquare} style={boxStyle} size='4x' className='github'/>
            </a>
            <a href='https://www.linkedin.com/in/ibrahim-syed-a93316220/' >
                <FontAwesomeIcon icon={faLinkedin} style={boxStyle} size='4x' className='linkedin'/>
            </a>
            <a href='mailto:iysyed01@gmail.com' >
                <FontAwesomeIcon icon={faSquareEnvelope} style={boxStyle} size='4x' className='email'/>
            </a>
            <a href='/img/resume.pdf' >
                <FontAwesomeIcon icon={faFilePdf} style={boxStyle} size='4x' className='resume'/>
            </a>
        </div>
    );
}

export default LandingContact;