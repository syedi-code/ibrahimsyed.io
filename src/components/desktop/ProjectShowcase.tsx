import React, { useState, useEffect } from 'react';
import ProjectListing from './ProjectCard';
import { projectsData } from '../data/projects';
import { Project, Tag } from '../types';

const ProjectShowcase: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData.slice(0, 4));
    }, []);

    const containerStyle: React.CSSProperties = {
        marginBottom: '75px',
    }

    return (
        <div style={containerStyle}>
            {projects.map(project => (
                    <ProjectListing key={project.name} project={project} />
            ))}
        </div>
    );
}

export default ProjectShowcase;