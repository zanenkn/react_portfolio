import React, { Component } from "react"

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
            projects: [
                {
                    "id": 1,
                    "name": "My First Website"
                },
                {
                    "id": 2,
                    "name": "FizzBuzz"
                }
            ]
        };
    }

    render() {
        const projects = this.state.projects
        let projectsList

        if(projects.length>0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id}>
                        <h3 className="content-text">
                            {project.name}
                        </h3>
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