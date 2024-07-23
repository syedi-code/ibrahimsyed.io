import React, { useState, } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectShowMoreProps {
    isHovered: boolean;
}

const ProjectShowMore: React.FC<ProjectShowMoreProps> = ({ isHovered }) => {
    const PREVIEW_HEIGHT: string = '50px'
    const getText = () => {
        return "{...}";
    }
    
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1 }
    };

    const arrowStyle: React.CSSProperties = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        maxHeight: PREVIEW_HEIGHT,
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '5px',
        marginTop: '20px',
        marginBottom: '5px'
    };

    return (
        <span style={containerStyle}>
            <AnimatePresence>
                {!isHovered && (
                    <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        key="text"
                    >
                        {getText()}
                    </motion.span>
                )}
                {isHovered && (
                    <motion.svg
                        style={arrowStyle}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial="hidden"
                        animate="visible"
                        variants={draw}
                        transition={{ duration: 0.1 }}
                        key="arrow"
                    >
                        <motion.path
                            d="M4 8 L12 16 L20 8"
                            stroke="#000"
                            strokeWidth="4"
                        />
                    </motion.svg>
                )}
            </AnimatePresence>
        </span>
    );
}

export default ProjectShowMore;