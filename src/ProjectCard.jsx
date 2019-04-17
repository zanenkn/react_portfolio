import React from 'react'
import './css/tailwind.css'

const ProjectCard = (props) => {
    let project = props.project
    return(
        <div key={project.id} className="project-card-wrapper">

            <img src={project.image} className="project-card-img" style={{ height: '150 px', objectFit: 'cover' }} />

            <div className="project-card-text" style={{ minHeight: '150px' }}>
                <div className="project-card-header">
                    {project.name}
                </div>
                
                <p className="project-card-paragraph">
                    {project.description}
                </p>
            </div>

            <div className="button-wrapper">
                <button className="button">
                    Details
                </button>
            </div>

        </div>
    )
}

export default ProjectCard