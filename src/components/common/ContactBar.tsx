import React from 'react';

import DivSVG from './DivSVG';
import Div3D from './Div3D';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import { projectGradientRed, projectGradientRedDarker } from '../../data/animations';

import './ContactBar.css';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface ContactBarProps {
    iconSize: SizeProp;
    padding?: string;
}

const ContactBar: React.FC<ContactBarProps> = ({ iconSize, padding='5px' }) => {
    // --------- GENERAL STYLING ---------
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px',
        border: '1px solid black',
        borderRadius: '20px',
        whiteSpace: 'nowrap', // Prevent breaking into multiple lines
        overflow: 'hidden',    // Ensure no overflow occurs
    }

    const boxStyle: React.CSSProperties = {
        padding: '5px',
    }

    const iconsContainerStyle: React.CSSProperties = {
        padding: '25px',
    }

    return (
        <DivSVG style={containerStyle} background={projectGradientRedDarker}>
            <div style={iconsContainerStyle}>
                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 1em 0 0'
                >
                    <a href='https://github.com/syedi-code' >
                        <FontAwesomeIcon icon={faGithubSquare} style={boxStyle} size={iconSize} className='github' />
                    </a>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 1em 0 0'
                >
                    <a href='https://www.linkedin.com/in/ibrahim-syed-a93316220/' >
                        <FontAwesomeIcon icon={faLinkedin} style={boxStyle} size={iconSize} className='linkedin' />
                    </a>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 1em 0 0'
                >
                    <a href='mailto:iysyed01@gmail.com' >
                        <FontAwesomeIcon icon={faSquareEnvelope} style={boxStyle} size={iconSize} className='email' />
                    </a>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 0 0 0'
                >
                    <a href='/img/resume.pdf' >
                        <FontAwesomeIcon icon={faFilePdf} style={boxStyle} size={iconSize} className='resume' />
                    </a>
                </Div3D>
            </div>
        </DivSVG>
    );
}

export default ContactBar;