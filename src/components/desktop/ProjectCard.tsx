import React, { useState, useEffect } from 'react';
import { Project, Tag } from '../../types';
import { AnimatePresence, motion } from 'framer-motion';
import { tagColorMap, extractTags } from '../../data/projects';

import ProjectTag from '../common/ProjectTag';
import ProjectDescription from './ProjectDescription';
import Div3D from '../common/Div3D';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const fillColors: string[] = ['#bbe0ee', '#ffe8c7', '#efb1a9']
    const tags: Tag[] = extractTags(project.name);
    const [randomColor, setRandomColor] = useState<string>('#c9f7d5');
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [showDescription, setShowDescription] = useState<boolean>(false);

    const containerStyle: React.CSSProperties = {
        margin: '10px',
        marginBottom: '20px',
        width: '700px',
        cursor: 'default',        
        userSelect: 'none',
        WebkitUserSelect: 'none',  // For Safari
        MozUserSelect: 'none',     // For Firefox
        msUserSelect: 'none',      // For Internet Explorer/Edge
    };

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid #000000',
        willChange: 'transform',
    };

    const nameStyle: React.CSSProperties = {
        backgroundColor: 'black',
        padding: '1vh',
        color: 'white',
        fontFamily: 'Aleo, serif',
        fontWeight: 'bold',
        fontSize: '24px',
        marginTop: '5px',
        marginBottom: '5px',
    };

    const yearStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        color: "#a83e32",
        marginTop: '5px',
        marginBottom: '10px'
    };

    const infoContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    };

    const infoChildStyle: React.CSSProperties = {
        width: '10%',
        marginRight: '25px',
        boxSizing: 'border-box',
        display: 'flex',  // Make it a flex container to right-align the image
        justifyContent: 'flex-end',
        alignItems: 'end'
    };

    const thumbnailStyle: React.CSSProperties = {
        maxWidth: '100px',
        height: '50px',
        width: 'auto'
    };

    const descriptionStyle: React.CSSProperties = {
        padding: '10px', // Optional: Add padding inside the wrapper
        borderRadius: '8px', // Optional: Add rounded corners
        color: 'black',
        fontWeight: '500',
        letterSpacing: '0',
        textDecorationColor: 'white',
    }

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * fillColors.length);

        return fillColors[randomIndex];
    }

    return (
        <motion.div 
            style={containerStyle}
        >
            <a href={project.url !== 'coming soon' ? project.url : undefined} target="_blank" rel="noopener noreferrer">
                <Div3D
                    style={contentStyle}
                    inverted={false}
                >
                    <div>
                        <h2 style={nameStyle}>{project.name}</h2>
                        <div style={infoContainerStyle}>
                            <div>
                                <p style={yearStyle}>{project.year}</p>

                                {tags.map(tag => (
                                    <ProjectTag tag={tag} onClick={() => {}} doesHoverAnimation={false}  />
                                ))}
                            </div>

                            <div style={infoChildStyle}>
                                {project.img != "" && (<img style={thumbnailStyle} src={`/img/projects/${project.img}`} />)}
                            </div>
                        </div>
                    </div>
                    
                    <AnimatePresence>
                        <motion.div style={descriptionStyle}>
                            {React.createElement(project.description)}
                        </motion.div>
                    </AnimatePresence>

                    {React.createElement(project.links)}
                </Div3D>
            </a>
        </motion.div>
    );
};



export default ProjectCard;
