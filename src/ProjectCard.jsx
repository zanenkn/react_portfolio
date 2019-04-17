import React from 'react'
import './css/tailwind.css'

const ProjectCard = (props) => {
    let project = props.project
    return(
        <div key={project.id} className="overflow-hidden border md:m-4 lg:m-4 xl:m-4">

            <img src={project.image} className="block h-64 w-full" style={{ height: '150 px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }}>
                <div className="font-bold text-xl mb-2">
                    {project.name}
                </div>
                
                <p className="text-grey-darker text-base">
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