import React from 'react'
import './css/tailwind.css'

const DesignCard = (props) => {
    let project = props.project
    return(
        <div key={project.id}>

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
                    See more
                </button>
            </div>

        </div>
    )
}

export default DesignCard