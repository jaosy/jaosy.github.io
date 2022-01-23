import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './ProjectsData';

export default function Projects() {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "start", gap: "1em" }}>
            {projectsData.map(project => (<ProjectCard key={project.title} project={project} />))}
        </div >
    )
}