import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import DivSVG from '../common/DivSVG';
import LandingSubtitle from '../common/LandingSubtitle';

import { waveBackground50PercentRed, waveBackground75PercentRedIncreasedAmplitude } from '../../data/animations';

const LandingHeader: React.FC = () => {
    const [rotateX, setRotateX] = useState<number>(0);
    const [rotateY, setRotateY] = useState<number>(0);

    // --------- GENERAL STYLING ---------
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        border: '1px solid black',
    };

    const textContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: '50vw',
        minWidth: '40vw',
    };

    const nameStyle: React.CSSProperties = {
        fontFamily: 'Aleo, serif',
        fontWeight: 'bold',
        fontSize: '64px',
        color: 'white',
        margin: '0'
    };

    const nameContainerStyle: React.CSSProperties = {
        backgroundColor: 'black',
        marginBottom: '2vh',
        marginTop: '0',
        padding: '1vh'
    }

    return (
        <DivSVG style={containerStyle} background={waveBackground50PercentRed}>
            <div style={textContainerStyle}>
                <div style={nameContainerStyle}>
                    <p style={nameStyle}>Ibrahim Syed</p>
                </div>

                <LandingSubtitle fontSize={'2vw'} color={'white'} />
            </div>
        </DivSVG>
    );
}

export default LandingHeader;