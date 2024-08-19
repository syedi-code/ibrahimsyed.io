import React from 'react';
import LandingSubtitle from '../components/LandingSubtitle';

import Div3D from '../components/Div3D';

import { primaryGradientLight, primaryGradientMedium } from '../projects/animations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const MobileLanding: React.FC = () => {
    const TAG_SPACING = '3px';

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '75vw', 
        margin: '2vw auto', // Centers the container horizontally
    };

    const bodyStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '4vw',
        textAlign: 'left',
        color: 'white',
        marginBottom: '2vh',
        backgroundColor: 'transparent'
    };

    const subtitleWrapperStyle: React.CSSProperties = {
        width: '100%',
        marginTop: '3vw',
        marginBottom: '3vw',
        minHeight: '12vw', // Adjust this to match the height of two lines of text
        lineHeight: '5vw', // Ensure consistent line height
    };

    const linksContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed', // Anchor to the bottom
        bottom: 0, // Align with the bottom of the page
        width: '100%', // Ensure it spans the full width of the page
        borderTop: '1px solid black', // Page-long top border
        padding: '3vh 0', // Optional: add padding
        zIndex: 1000, // Ensure it stays above other content
        backgroundImage: `url("${primaryGradientLight}")`,
        backgroundSize: 'cover',        
        backgroundClip: 'padding-box',  // Clips the background to the text
    };

    const bodyWrapperStyle: React.CSSProperties = {
        backgroundColor: 'black', // Black background
        padding: '20px', // Optional: Add padding inside the wrapper
        borderRadius: '8px', // Optional: Add rounded corners
    };

    const whitespaceStyle: React.CSSProperties = {
        height: '15vh',
    }

    // Define different styles for each phrase
    const dataScienceStyle: React.CSSProperties = {
        backgroundColor: '#F0A8D0', // Red background
        padding: `0 ${TAG_SPACING}`,
    };

    const webDevelopmentStyle: React.CSSProperties = {
        backgroundColor: '#4793AF', // Blue background
        padding: `0 ${TAG_SPACING}`,
    };

    const programmingMultimediaStyle: React.CSSProperties = {
        backgroundColor: '#DD5746', // Green background
        padding: `0 ${TAG_SPACING}`,
    };

    const generativeArtStyle: React.CSSProperties = {
        backgroundColor: '#8B322C', // Yellow background
        padding: `0 ${TAG_SPACING}`,
    };

    const projectsStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 'bold',
    };

    const boxStyle: React.CSSProperties = {
        padding: '0',
    }

    return (
        <div style={containerStyle}>
            <div style={subtitleWrapperStyle}>
                <LandingSubtitle color="black" fontSize="6vw" backgroundColor='transparent' fontWeight='600' cursor={false} />
            </div>
            
            <div style={bodyWrapperStyle}>
                <div style={bodyStyle}>
                    Hi, I'm Ibrahim, a double major in Computer Science and Music Technology at Oregon State University.
                </div>

                <div style={bodyStyle}>
                    I have a strong background in many disciplines of computer science, including <span style={dataScienceStyle}>data science</span>, <span style={webDevelopmentStyle}>web development</span>, and <span style={programmingMultimediaStyle}>programming for multimedia</span>, <span style={generativeArtStyle}>generative art</span>. These are further detailed on the <span style={projectsStyle}>PROJECTS</span> page.
                </div>

                <div style={bodyStyle}>
                    I graduated from OSU in the spring, and I am currently looking for job opportunities. I would love to hear from you! Send me an email at <b>iysyed01@gmail.com</b> or download my resume below.
                </div>
            </div>

            <div style={whitespaceStyle}></div>

            <div style={linksContainerStyle}>
                <Div3D
                        borderRadius='20px'
                        dropShadowColor='rgba(0, 0, 0, 1)'
                        inverted={true}
                        padding='10px'
                        margin='0 1em 1em 0'
                    >
                    <a href='https://github.com/syedi-code' >
                            <FontAwesomeIcon icon={faGithubSquare} style={boxStyle} size='3x' className='github'/>
                    </a>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 1em 1em 0'
                >
                    <a href='https://www.linkedin.com/in/ibrahim-syed-a93316220/' >
                        <FontAwesomeIcon icon={faLinkedin} style={boxStyle} size='3x' className='linkedin' />
                    </a>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 1em 1em 0'
                >
                    <a href='mailto:iysyed01@gmail.com' >
                        <FontAwesomeIcon icon={faSquareEnvelope} style={boxStyle} size='3x' className='email' />
                    </a>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                    padding='10px'
                    margin='0 0 1em 0'
                >
                    <a href='/img/resume.pdf' >
                        <FontAwesomeIcon icon={faFilePdf} style={boxStyle} size='3x' className='resume' />
                    </a>
                </Div3D>
            </div>
        </div>
    );
}

export default MobileLanding;
