import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import LandingHeader from '../../components/desktop/LandingHeader';
import ContactBar from '../../components/common/ContactBar';

import { text } from 'stream/consumers';
import { flattenDiagnosticMessageText } from 'typescript';

const LandingPage: React.FC = () => {
    const TAG_SPACING = '3px';

    // --------- GENERAL STYLING ---------
    const containerStyle: React.CSSProperties = {
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const textStyle: React.CSSProperties = {
        marginTop: '12px',
        marginBottom: '12px',
        width: '48vw',
        color: 'white',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '18px',
        textAlign: 'left',
    };

    const bodyWrapperStyle: React.CSSProperties = {
        backgroundColor: 'black', // Black background
        padding: '20px', // Optional: Add padding inside the wrapper
        borderRadius: '8px', // Optional: Add rounded corners
    };

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
            <AnimatePresence mode="wait">
                <motion.div
                    key="showcase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <LandingHeader />

                    <hr style={{ width: '50vw', color: 'black', marginTop: '25px' }}/>

                    <motion.div
                        style={bodyWrapperStyle}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div style={textStyle} variants={itemVariants}>
                            Hi, I'm Ibrahim, an Oregon State University graduate with a dual Bachelors of Science in Computer Science and Music Technology.
                        </motion.div>

                        <motion.div style={textStyle} variants={itemVariants}>
                            I have a strong background in many disciplines of computer science, including <span style={dataScienceStyle}>data science</span> (Pandas, NumPy, MatPlotLib, scikit-learn), <span style={webDevelopmentStyle}>web development</span> (Node.js, React, SQL), <span style={programmingMultimediaStyle}>programming for multimedia</span>, and <span style={generativeArtStyle}>generative art</span> (Max/MSP, Processing, p5.js). These are further detailed on the <span style={projectsStyle}>PROJECTS</span> page.
                        </motion.div>

                        <motion.div style={textStyle} variants={itemVariants}>
                            I graduated from OSU in the spring, and I am currently looking for job opportunities. I would love to hear from you! Send me an email at <b>iysyed01@gmail.com</b> or download my resume below.
                        </motion.div>
                    </motion.div>

                    <hr style={{ width: '50vw', color: 'black', marginTop: '25px' }}/>

                    <ContactBar iconSize={'4x'}/>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default LandingPage;