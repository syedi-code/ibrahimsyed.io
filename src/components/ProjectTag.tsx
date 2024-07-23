import React from 'react';
import { motion } from 'framer-motion';

import { Tag } from '../types'
import { tagColorMap } from '../projects/projects';
import { hover } from '@testing-library/user-event/dist/hover';

interface ProjectTagProps {
    tag: Tag;
    onClick: () => void;
    doesHoverAnimation: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ tag, onClick, doesHoverAnimation }) => {
    const scaleValue: number = doesHoverAnimation ? 0.9 : 1;
    const hoverVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: scaleValue,
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            }
        }
    };

    const tagStyle: React.CSSProperties = {
        cursor: 'pointer',
        marginRight: '10px',
        marginBottom: '10px',
        padding: '5px 10px',
        backgroundColor: tagColorMap.get(tag.name) || '#000000',
        color: 'white',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '12px',
        fontWeight: 'bold'
    };

    return (
        <motion.span 
            style={tagStyle}
            onClick={onClick}
            variants={hoverVariants}
            initial="initial"
            whileHover="hover"
        >
            {tag.name.toUpperCase()}
        </motion.span>
    );
}

export default ProjectTag;
