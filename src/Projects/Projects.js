import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './ProjectsData';

export default function Projects() {
    return (
        <div sx={{ display: 'flex', flexDirection: 'row' }}>
            {projectsData.map(project => (<ProjectCard key={project.title} project={project} />))}
        </div>
    )
}