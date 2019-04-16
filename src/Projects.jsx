import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"

// const Projects = () => {
//     return (
//         <div>
//             <h1 className="content-text">My Projects</h1>
//             <p className="content-text">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//         </div>
//     )
// };

class Projects extends Component {
    constructor() {
        super();
        this.state={
            projects: []
        };
    }

    componentDidMount(){
        axios.get('./src/data/projects.json')
        .then(response => {
            this.setState({
                projects: response.data
            })
        })
    }

    render() {
        const projects = this.state.projects
        let projectsList

        if(projects.length>0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }
        
        return (
            <div>
                <h1 className="content-text">My Projects</h1>
                {projectsList}
            </div>
        )
    }
};


export default Projects