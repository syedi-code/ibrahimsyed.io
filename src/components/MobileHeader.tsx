import React, { useRef, useEffect, useState } from 'react';

import { waveBackgroundStaticLightBlue, primaryGradientLight, primaryGradientMedium, primaryGradient } from '../projects/animations';

const MobileHeader: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    const SKETCH_HEIGHT = 20;

    const headerContainerStyle: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        padding: '0',
        margin: '5vh auto 1.5vh auto',  // Center the header horizontally
        width: '75%',  // Set width based on text
        backgroundColor: 'black'
    };

    const headerStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, serif',
        fontSize: '9vw',
        fontWeight: 'bold',
        letterSpacing: '3px',
        textAlign: 'center',
        position: 'relative',  // Stack above the background
        padding: '0',
        backgroundImage: `url("${primaryGradientLight}")`,
        backgroundSize: 'cover',
        backgroundClip: 'text',  // Clips the background to the text
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
        backgroundImage: `url("${waveBackgroundStaticLightBlue}")`,
        backgroundSize: 'cover',
        backgroundClip: 'text',  // Clips the background to the text
    }

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
                <div style={headerContainerStyle}>
                    <div style={headerStyle}>
                        IBRAHIM SYED
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileHeader;