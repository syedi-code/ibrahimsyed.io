import React from 'react';
import { motion } from 'framer-motion';

interface Div3DProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  backgroundColor?: string;
  cursor?: string;
  borderRadius?: string;
  padding?: string;
  dropShadowColor?: string;
  margin?: string;
  offset?: string;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const Div3D: React.FC<Div3DProps> = ({ children, style, backgroundColor = 'white', cursor, borderRadius = '20px', padding = '15px', dropShadowColor = 'rgba(199, 199, 199, 1)', margin = '0 0 1em 0', offset = '5px', onClick, onHoverStart, onHoverEnd }) => {

    const contentStyle: React.CSSProperties = {
        display: 'inline-block',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        cursor: 'pointer', // change
        border: '2px solid #000000',
        willChange: 'transform',
        padding: '15px',
        margin: margin,
    };

    const contentVariants = {
        initial: {

        },
        hover: {
            transform: `translate(-${offset}, -${offset})`,
            boxShadow: `${offset} ${offset} 0px ${dropShadowColor}`,
        }
    };

    return (
        <motion.div
                    style={contentStyle}
                    variants={contentVariants}
                    initial="initial"
                    whileHover="hover"
                    onClick={onClick}
                    onHoverStart={onHoverStart}
                    onHoverEnd={onHoverEnd}
        >
            {children}
        </motion.div>
    );
};

export default Div3D;
