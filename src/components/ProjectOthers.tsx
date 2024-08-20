import React, { useState, useEffect } from 'react';
import ProjectListing from './ProjectCard';
import { projectsData } from '../data/projects';
import { Project, Tag } from '../types';

const ProjectOthers: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData.slice(4));
    }, []);

    return (
        <div>
            {projects.map(project => (
                    <ProjectListing key={project.name} project={project} />
            ))}
        </div>
    );
}

export default ProjectOthers;