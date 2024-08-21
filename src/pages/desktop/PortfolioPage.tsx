import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Cursor from '../../components/common/Cursor';

// Utility function to interpolate between two colors
const interpolateColor = (color1: string, color2: string, factor: number): string => {
    const hex = (color: string) => {
        const hex = color.replace('#', '');
        return hex.length === 3
            ? hex.split('').map(c => c + c).join('')
            : hex;
    };

    const h1 = hex(color1);
    const h2 = hex(color2);

    const r1 = parseInt(h1.substring(0, 2), 16);
    const g1 = parseInt(h1.substring(2, 4), 16);
    const b1 = parseInt(h1.substring(4, 6), 16);

    const r2 = parseInt(h2.substring(0, 2), 16);
    const g2 = parseInt(h2.substring(2, 4), 16);
    const b2 = parseInt(h2.substring(4, 6), 16);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Function to create a gradient given two colors and number of sections
const createGradient = (color1: string, color2: string, sections: number): string[] => {
    const gradient = [];
    for (let i = 0; i < sections; i++) {
        const factor = i / (sections - 1);
        gradient.push(interpolateColor(color1, color2, factor));
    }
    return gradient;
};

const PortfolioPage: React.FC = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    const startColor = "#ff4040";
    const endColor = "#4070ff";
    const colors = createGradient(startColor, endColor, items.length);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to My Portfolio</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{ backgroundColor: colors[index], padding: '10px', margin: '5px 0' }}>
                        {item}
                    </li>
                ))}
            </ul>
            <Cursor />
        </div>
    );
}

export default PortfolioPage;
