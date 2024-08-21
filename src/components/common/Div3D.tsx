import React from 'react';
import { motion } from 'framer-motion';

/*
*
*   Div3D
*
*   A wrapper around <div> with a '3-D' effect where
*   a child item will appear to 'pop out' of the screen
*   on hover. Alternatively, if 'inverted' is true, the
*   <div> will instead start 'popped out' and push down
*   on tap.
*
*   Input variables include several individual CSS properties
*   which are then passed down into <div>; maybe a clunky
*   implementation.
*
*/

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
  maxWidth?: string;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  inverted: boolean;
}

const Div3D: React.FC<Div3DProps> = (
    {
        children,
        style,
        backgroundColor = 'white',
        cursor,
        borderRadius = '20px',
        padding = '15px',
        dropShadowColor = 'rgba(0, 0, 0, 1)',
        margin = '0 0 1em 0', offset = '5px',
        maxWidth = '100%',
        onClick,
        onHoverStart,
        onHoverEnd,
        inverted
    }
) => {
    // --------- GENERAL STYLING ---------
    const contentStyle: React.CSSProperties = {
        display: 'inline-block',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        cursor: 'pointer', // change
        border: '2px solid #000000',
        willChange: 'transform',
        padding: padding,
        margin: margin,
        maxWidth: maxWidth,
    };

    const contentVariants = {
        initial: {
            transform: 'none',
            boxShadow: 'none'
        },
        hover: {
            transform: `translate(-${offset}, -${offset})`,
            boxShadow: `${offset} ${offset} 0px ${dropShadowColor}`,
        }
    };

    return (
        inverted ? (
            <motion.div
                style={contentStyle}
                variants={contentVariants}
                initial="hover"
                whileTap="initial"
                onClick={onClick}
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
            >
                {children}
            </motion.div>
        ) : (
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
        )
    );
};

export default Div3D;
