import React from 'react';
import { motion } from 'framer-motion';

import Div3D from '../../components/common/Div3D';

import LandingSubtitle from '../../components/common/LandingSubtitle';
import ContactBar from '../../components/common/ContactBar';

import { primaryGradientLight, primaryGradientMedium } from '../../data/animations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const MobileLanding: React.FC = () => {
    const TAG_SPACING = '3px';

    // --------- GENERAL STYLING ---------
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
        padding: '2vh 0', // Optional: add padding
        zIndex: 1000, // Ensure it stays above other content
        backgroundImage: `url("${primaryGradientLight}")`,
        backgroundSize: 'cover',        
        backgroundClip: 'padding-box',  // Clips the background to the text
        gap: '6vw'
    };

    const bodyWrapperStyle: React.CSSProperties = {
        backgroundColor: 'black', // Black background
        padding: '20px', // Optional: Add padding inside the wrapper
        borderRadius: '8px', // Optional: Add rounded corners
        marginBottom: '3vh'
    };

    const whitespaceStyle: React.CSSProperties = {
        height: '20vh',
    }

    const boxStyle: React.CSSProperties = {
        padding: '0',
    }

    // --------- TAG STYLING ---------
    const dataScienceStyle: React.CSSProperties = {
        backgroundColor: '#3a0ca3', // Red background
        padding: `0 ${TAG_SPACING}`,
    };

    const webDevelopmentStyle: React.CSSProperties = {
        backgroundColor: '#274c77', // Blue background
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

    // --------- FRAMER-MOTION VARIANTS ---------
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1, // Adjust the stagger timing as needed
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div style={containerStyle}>
            <div style={subtitleWrapperStyle}>
                <LandingSubtitle color="black" fontSize="6vw" backgroundColor='transparent' fontWeight='600' cursor={false} />
            </div>

            <motion.div
                style={bodyWrapperStyle}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div style={bodyStyle} variants={itemVariants}>
                    Hi, I'm Ibrahim, a double major in Computer Science and Music Technology at Oregon State University.
                </motion.div>

                <motion.div style={bodyStyle} variants={itemVariants}>
                    I have a strong background in many disciplines of computer science, including <span style={dataScienceStyle}>data science</span>, <span style={webDevelopmentStyle}>web development</span>, and <span style={programmingMultimediaStyle}>programming for multimedia</span>, <span style={generativeArtStyle}>generative art</span>. These are further detailed on the <span style={projectsStyle}>PROJECTS</span> page.
                </motion.div>

                <motion.div style={bodyStyle} variants={itemVariants}>
                    I graduated from OSU in the spring, and I am currently looking for job opportunities. I would love to hear from you! Send me an email at <b>iysyed01@gmail.com</b> or download my resume below.
                </motion.div>
            </motion.div>

            <ContactBar iconSize='2x' padding='0px' />
        </div>
    );
}

export default MobileLanding;
