import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, Tag } from '../../types';
import { projectsData } from '../../data/projects';

import DivSVG from '../../components/common/DivSVG';

import ProjectShowcase from '../../components/desktop/ProjectShowcase';
import ProjectOthers from '../../components/desktop/ProjectOthers';
import ProjectDisplay from '../../components/desktop/ProjectDisplay';
import ProjectTag from '../../components/common/ProjectTag';

import { blueGradientMedium, blueGradientDarker } from '../../data/animations';

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [activeTags, setActiveTags] = useState<Tag[]>([]);
    const [filterApplied, setFilterApplied] = useState(false);

    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData);

        const tags = extractTags(projectsData);
        setTags(tags);
    }, []);

    // extracts all tags across projects and puts them in an array
    const extractTags = (projects: Project[]): Tag[] => {
        const tagMap = new Map<string, string>();
        projects.forEach(project => {
            project.tags.forEach(tag => {
                if (!tagMap.has(tag)) {
                    const color = "";
                    tagMap.set(tag, color);
                }
            });
        });

        return Array.from(tagMap, ([name, color]) => ({name, color}));
    }

    // effect for filtering when a tag is clicked
    useEffect(() => {
        if (activeTags.length === 0) {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project =>
                activeTags.every(tag => project.tags.includes(tag.name))
            );
            setFilteredProjects(filtered);
        }
    }, [activeTags, projects]);

    // helper function for filtering
    const filterProjects = (tag: Tag) => {
        setActiveTags(prevTags => [...prevTags, tag]);
        setFilterApplied(true);
    };
    
    // helper function: remove current filter
    const removeFilter = (selectedTag: Tag) => {
        setActiveTags(prevTags => prevTags.filter(tag => tag !== selectedTag));
    };

    const getSubtitleText = () => {
        if (activeTags.length === 0) {
            return "SHOWCASE";
        }

        const tagNames = activeTags.map(tag => tag.name.toUpperCase());
        return `${tagNames.join(' AND ').toUpperCase()} PROJECTS`;
    };

    const bodyStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    const tagContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
    }

    const tagRowStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: '10px',
    }

    const filterLabelStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        color: "#919191",
        marginBottom: 'auto',
        marginTop: 'auto',
        marginRight: '9px',
        justifyContent: 'left'
    }

    const headerStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '48px',
        fontWeight: 'bold',
        color: "#a83e32",
        marginTop: '5vh',
        marginBottom: '5vh'
    }

    const subtitleStyle: React.CSSProperties = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        color: "#a83e32",
        justifyContent: 'left',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '8px',
        boxShadow: '3px 3px 0px rgba(0, 0, 0, 1)',
        padding: '5px 10px',
        margin: '15px 10px'
    }

    const projectsStyle: React.CSSProperties = {
        border: '2px solid black',
        borderRadius: '20px',
        padding: '1vw',
        maxWidth: '66vw',
        boxShadow: '3px 3px 0px rgba(0, 0, 0, 1)',
        marginBottom: '10vh',
    }

    const inactiveTags = tags.filter(tag => !activeTags.includes(tag));

    return (
        <div style={bodyStyle}>
            <h1 style={headerStyle}>
                PROJECTS
            </h1>

            <div style={tagContainerStyle}>
                <div style={tagRowStyle}>
                    <div style={filterLabelStyle}>
                        TAGS:
                    </div>

                    {inactiveTags.map(tag => (
                        <ProjectTag tag={tag} onClick={() => filterProjects(tag)} doesHoverAnimation={true} />
                    ))}
                </div>                
                <div style={tagRowStyle}>
                    <div style={filterLabelStyle}>
                        SHOW ONLY:
                    </div>
                    {activeTags.map(tag => (
                        <ProjectTag tag={tag} onClick={() => removeFilter(tag)} doesHoverAnimation={true} />
                    ))}
                </div>
            </div>

            <div style={subtitleStyle}>
                {getSubtitleText()}
            </div>

            <AnimatePresence mode="wait">
                {filteredProjects.length != 0 && 
                    <DivSVG style={projectsStyle} background={blueGradientDarker}>
                        {activeTags.length === 0 ? (
                            <motion.div
                                style={bodyStyle}
                                key="showcase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectShowcase />

                                <div style={subtitleStyle}>
                                    THE REST
                                </div>

                                <ProjectOthers />
                            </motion.div>
                        ) : (
                            <div style={bodyStyle}>
                                <ProjectDisplay projects={filteredProjects} filterApplied={filterApplied} />
                            </div>
                        )}
                    </DivSVG>
                }
            </AnimatePresence>
        </div>
    );
}

export default ProjectsPage;