import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LandingSubtitle from './LandingSubtitle';

const LandingHeader: React.FC = () => {
    const [rotateX, setRotateX] = useState<number>(0);
    const [rotateY, setRotateY] = useState<number>(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const rotateX = (-y / height) * 40; // Increase the tilt angle
        const rotateY = (x / width) * 40; // Increase the tilt angle
        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1000px', // Increase perspective for a more dramatic effect
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
        marginBottom: '10px',
    };

    const headshotStyle: React.CSSProperties = {
        width: '200px',
        height: '200px',
        border: '2px solid black',
        boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.3)',
        transformStyle: 'preserve-3d',
    };

    return (
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                <p style={nameStyle}>Ibrahim Syed</p>
                <LandingSubtitle />
            </div>

            <img
                style={headshotStyle}
                src="/img/headshot.JPG"
            />
        </div>
    );
}

export default LandingHeader;