import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import LandingHeader from '../components/LandingHeader';
import LandingContact from '../components/LandingContact';

import { text } from 'stream/consumers';
import { flattenDiagnosticMessageText } from 'typescript';

const LandingPage: React.FC = () => {
    const bodyStyle: React.CSSProperties = {
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const textStyle: React.CSSProperties = {
        marginTop: '25px',
        width: '48vw',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '18px',
        textAlign: 'left',
    }

    return (
        <div style={bodyStyle}>
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

                    <div style={textStyle}>
                        Hi, I'm Ibrahim, a double major in Computer Science and Music Technology at Oregon State University. 
                        <br />
                        <br />
                        I have a strong background in many disciplines of computer science, including data science (Pandas, NumPy, MatPlotLib, scikit-learn), web development (Node.js, React, SQL), and programming for multimedia and generative art (Max/MSP, Processing, p5.js). In addition to these skills, I have extensive coursework in C, C++, and Python. Furthermore, throughout my time at OSU, I was involved in many interdisciplinary sound programming projects, mainly in the field of robotic sonification, which are detailed on my 'Projects' page.
                        <br />
                        <br />
                        I graduated from OSU in the spring, and I am currently looking for job opportunities. I would love to hear from you! Send me an email at <b>iysyed01@gmail.com</b> or download my resume below.
                    </div>

                    <LandingContact />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default LandingPage;