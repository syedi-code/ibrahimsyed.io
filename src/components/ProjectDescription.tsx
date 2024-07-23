import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectDescriptionProps {
    project: Project;
    isHovered: boolean;
    showDescription: boolean;
    onClick: () => void;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ project, isHovered, showDescription, onClick }) => {
    const PREVIEW_HEIGHT: string = '50px'    
    const [contentHeight, setContentHeight] = useState(PREVIEW_HEIGHT);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(`${height}px`);
        }
    }, [showDescription]);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1 }
    };

    const descVariants = {
        preview: { height: PREVIEW_HEIGHT },
        expanded: { height: contentHeight }
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '5px',
        marginTop: '20px',
        marginBottom: '10px',
    };

    const previewStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, serif',
    };

    const arrowStyle: React.CSSProperties = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        maxHeight: PREVIEW_HEIGHT,
    };
    
    return (
        <motion.div onClick={onClick}>
            <motion.div 
                style={containerStyle}
                animate={showDescription ? "expanded" : "preview"}
                variants={descVariants}
                transition={({ duration: 0.5 })}
            >
                <AnimatePresence>
                    {!showDescription && !isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={previewStyle}
                        >
                            {project.preview}
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isHovered && !showDescription && (
                        <motion.svg
                            style={arrowStyle}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            key="arrow"
                        >
                            <motion.path
                                d="M4 8 L12 16 L20 8"
                                stroke="#000"
                                strokeWidth="4"
                                key="path"
                                initial="hidden"
                                animate={isHovered ? "visible" : "hidden"}
                                variants={draw}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {showDescription && (
                        <motion.div 
                            ref={contentRef}
                        >
                            {React.createElement(project.description)}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {React.createElement(project.links)}
        </motion.div>
    );
};

export default ProjectDescription;
