import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import './css/tailwind.css'

class Projects extends Component {
    constructor() {
        super();
        this.state={
            projects: []
        }
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
                    <div key={project.id} className="project-card-wrapper">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }
        
        return ( 
            <>
                <h1 className="content-header">Web Development</h1>
                <p className="content-text">Software development as a craftmanship. Not much to talk about there, scroll down and find out yourself. GitHub links are there for the curious. Working software as a measure of progress and beautiful code for the joy of heart. I breathe test driven.</p>
            

                <div className="project-list-wrapper">
                    {projectsList}
                </div>
            </> 
        )
    }
};


export default Projects