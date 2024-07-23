import React from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {  
    const cursorContainerStyle: React.CSSProperties = {
        display: 'inline-block', // Set the container to a block display to apply width and height
    };

    const cursorStyle: React.CSSProperties = {
        width: '10px',
        height: '20px',
        backgroundColor: 'black',
    };

    return (
        <motion.div style={cursorContainerStyle}>
            <motion.div
                style={cursorStyle}
                animate={{ opacity: 0 }} // Animation for cursor blinking off
                transition={{ duration: 1, repeat: Infinity }} // Blinking animation
            />
        </motion.div>
    );
}

export default Cursor;