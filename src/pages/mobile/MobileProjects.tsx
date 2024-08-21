import React, { useState, useEffect } from 'react';
import { Project, Tag } from '../../types';
import { projectsData } from '../../data/projects';

import MobileProjectCard from '../../components/mobile/MobileProjectCard';

const MobileProjects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: '3vh'
    };

    const headerStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        color: "#a83e32",
        justifyContent: 'left'
    };

    return (
        <div style={containerStyle}>
            
            {projects.map(project => (
                    <MobileProjectCard key={project.name} project={project} />
            ))}
        </div>
    );
}

export default MobileProjects;
