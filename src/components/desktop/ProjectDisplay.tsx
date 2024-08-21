import React, { useState, useEffect } from 'react';
import ProjectListing from './ProjectCard';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectDisplayProps {
    projects: Project[];
    filterApplied: boolean;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects, filterApplied }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: filterApplied ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            {projects.map(project => (
                <ProjectListing key={project.name} project={project} />
            ))}
        </motion.div>
    );
}

export default ProjectDisplay;