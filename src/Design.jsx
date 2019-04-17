import React, { Component } from "react"
import axios from "axios"
import DesignCard from "./DesignCard"
import './css/tailwind.css'

class Design extends Component {
    constructor() {
        super();
        this.state={
            design: []
        };
    }

    componentDidMount(){
        axios.get('./src/data/design.json')
        .then(response => {
            this.setState({
                design: response.data
            })
        })
    }

    render() {
        const design = this.state.design
        let designList

        if(design.length>0) {
            designList = design.map(project => {
                return (
                    <div key={project.id} className="project-card-box-wrapper">
                        <DesignCard project={project} />
                    </div>
                )
            })
        }
        
        return (
            <div className="projects-box">
                <div className="text-wrapper">
                    <h1 className="content-header">My Projects</h1>
                    <p className="content-text">This is a selection of some of my projects I have been working on.</p>
                </div>

            <div className="project-list-wrapper">
                {designList}
            </div>
        </div>

        )
    }
};



export default Design