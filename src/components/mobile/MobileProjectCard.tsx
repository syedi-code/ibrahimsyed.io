import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Project, Tag } from '../../types';
import { extractTags } from '../../data/projects';
import { headerGradient, projectGradientRed, projectGradientBlue, projectGradientYellow } from '../../data/animations';

import Div3D from '../common/Div3D';
import ProjectTag from '../common/ProjectTag';

interface MobileProjectCardProps {
    project: Project;
}

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({ project }) => {
    const tags: Tag[] = extractTags(project.name);

    // --------- VARIABLES ---------
    const ITEM_MARGIN = '10px';
    const TEXT_COLOR = 'black';
    const POST_COLORS = [projectGradientRed, projectGradientBlue, projectGradientYellow];

    // --------- GENERAL STYLING ---------
    const nameStyle: React.CSSProperties = {
        fontFamily: 'Aleo, serif',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white',
        margin: '0'
    };

    const containerStyle: React.CSSProperties = {
        borderBottom: '1px solid black',
        boxSizing: 'border-box',
        color: `${TEXT_COLOR}`,
        //backgroundColor: POST_COLORS[project.id % POST_COLORS.length],
        backgroundColor: 'white',
    };

    const nameContainerStyle: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        width: 'auto',  // Set width based on text
        backgroundColor: 'black',
        margin: `0 ${ITEM_MARGIN} 0 ${ITEM_MARGIN}`,
        padding: '5px',
    }

    const tagsContainerStyle: React.CSSProperties = {
        margin: `${ITEM_MARGIN}`,
        marginBottom: '0',
    }

    const previewStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, serif',
        margin: `${ITEM_MARGIN}`,
    };

    const yearStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        margin: `${ITEM_MARGIN}`,
        color: "#a83e32",
    };

    const arrowStyle: React.CSSProperties = {
        display: 'flex',       // Use flexbox to control the alignment
        justifyContent: 'center', // Center the arrow horizontally
        padding: `${ITEM_MARGIN} 0 ${ITEM_MARGIN} 0`,
        backgroundImage: `url("${POST_COLORS[project.id % POST_COLORS.length]}")`,
        backgroundSize: 'cover',
        backgroundClip: 'border-box',  // Clips the background to the text
        borderRadius: '8px'
    }

    return (
            <Div3D
                inverted={true}
                maxWidth={'80%'}
                dropShadowColor={'rgba(0, 0, 0, 1)'}
                padding={'12px'}
            >
                <motion.a href={project.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p style={yearStyle}>{project.year}</p>
                    <div style={nameContainerStyle}>
                        <h2 style={nameStyle}>{project.name}</h2>
                    </div>

                    <div style={previewStyle}>
                        {project.preview}
                    </div>

                    <div style={tagsContainerStyle}>
                        {tags.map(tag => (
                            <ProjectTag 
                                tag={tag} 
                                onClick={() => { }} 
                                doesHoverAnimation={false} 
                                fontSize={'0.6em'}
                                //backgroundColor={'black'}
                            />
                        ))}
                    </div>
                    
                    <div style={arrowStyle} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M0 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6h8V5l5 5-5 5v-3z"/></svg>
                    </div>
                </motion.a>
            </Div3D>
    );
};

export default MobileProjectCard;