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
                    <h1 className="content-header">Graphic design</h1>
                    <p className="content-text">Starting off as an exclusively print focused graphic designer ten years ago and ending up passionate about all things digital and responsive. It's been a wild ride! Check out some of my favourite gigs.</p>
                </div>

                <div className="project-list-wrapper">
                    {designList}
                </div>
                
            </div>

        )
    }
};



export default Design