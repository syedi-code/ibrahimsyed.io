import React, { useState, useEffect } from 'react';
import { Project, Tag } from '../types';
import { motion } from 'framer-motion';
import { tagColorMap, extractTags } from '../projects/projects';

import ProjectTag from './ProjectTag';
import ProjectDescription from './ProjectDescription';

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
        width: '30vw',
        cursor: 'pointer',        
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
        transition: 'transform 0.3s, bow-shadow 0.3s',
    };

    const nameStyle: React.CSSProperties = {
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
        marginTop: '0px',
        marginBottom: '10px'
    }

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: randomColor,
        zIndex: -1,
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

    const overlayVariants = {
        initial: { scaleX: 0, originX: 0 },
        hover: { scaleX: 1, originX: 0, transition: { duration: 0.5 } },
    };

    const contentVariants = {
        hover: {
            transform: 'translate(-10px, -10px)',
            boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.2)',
        }
    }

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * fillColors.length);

        return fillColors[randomIndex];
    }

    const handleHoverStart = () => {
        const newColor = getRandomColor();
        setRandomColor(newColor);
        setIsHovered(true);
    }

    const handleHoverEnd = () => {
        setIsHovered(false);
    }

    const handleClick = () => {
        setShowDescription(!showDescription);
    }

    return (
        //<a href={project.url} style={{ textDecoration: 'none', color: 'initial' }}target="_blank" rel="noopener noreferrer">
            <motion.div 
                style={containerStyle}
            >
                <motion.div
                    style={contentStyle}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                    variants={contentVariants}
                    onClick={handleClick}
                >
                    <motion.div
                        style={overlayStyle}
                        variants={overlayVariants}
                    />

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
                    
                    <ProjectDescription isHovered={isHovered} project={project} showDescription={showDescription} onClick={handleClick} />
                </motion.div>
            </motion.div>
        // </a>
    );
};



export default ProjectCard;
