import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { waveBackgroundStaticLightBlue, primaryGradientLight, primaryGradientMedium, primaryGradient, waveBackground25PercentRedIncreasedAmplitude, waveBackground75PercentRedIncreasedAmplitude } from '../../data/animations';

const MobileHeader: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    const SKETCH_HEIGHT = 20;

    const headerContainerStyle: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        padding: '0',
        margin: '5vh auto 1.5vh auto',
        width: '75%',
        backgroundColor: 'black',
        borderRadius: '16px'
    };

    const headerStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, serif',
        fontSize: '9vw',
        fontWeight: 'bold',
        letterSpacing: '3px',
        textAlign: 'center',
        position: 'relative',
        padding: '0',
        backgroundImage: `url("${primaryGradientMedium}")`,
        backgroundSize: 'cover',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        //textShadow: '3px 1px black, 4px 2px black, 5px 3px black, -1px -1px 0 black, 1px -1px 0 black, -1px  1px 0 black, 1px  1px 0 black', // drop shadow
    };
    

    const parentContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        backgroundImage: `url("${waveBackground25PercentRedIncreasedAmplitude}")`,
        backgroundSize: '100% 100%',  // Ensure it scales properly within the parent div
        backgroundClip: 'padding-box',
        WebkitBackgroundClip: 'padding-box',
        width: '100%',
        height: '100%',
        overflow: 'hidden',  // Ensure no overflow issues on Firefox
        borderBottom: '1px solid black',
    };

    return (
        <>
            <style>
                {`
                    @font-face {
                        font-family: 'Felix Titling';
                        src: url('.../public/fonts/FelixTitling.ttf') format('truetype');
                        font-weight: normal;
                        font-style: normal;
                    }
                `}
            </style>
            
            <div style={parentContainerStyle}>
                <AnimatePresence>
                        <motion.div style={headerContainerStyle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={headerStyle}>
                                IBRAHIM SYED
                            </div>
                        </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}

export default MobileHeader;