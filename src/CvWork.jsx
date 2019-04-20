import axios from "axios"
import React, { Component } from "react"
import './css/tailwind.css'

const Work = (props) => {
    let work = props.work
    return(
        <div key={work.id} className="cv-section-wrapper">

            <div className="cv-title">{work.title}</div>
            <div className="cv-job">
                <a href={work.website} target="_blank" className="content-link">{work.company}</a>
                <p className="content-text">{work.dates}</p>
            </div>
                
            <div className="cv-description">
                <div className="content-text">{work.description}</div>    
            </div>

        </div>
    )
}

class WorkList extends Component {
    constructor() {
        super();
        this.state={
            work: []
        };
    }

    componentDidMount(){
        axios.get('./src/data/cv.work.json')
        .then(response => {
            this.setState({
                work: response.data
            })
        })
    }

    render() {
        let work = this.state.work
        let workList

        if(work.length>0) {
            workList = work.map(work => {
                return (
                    <div key={work.id}>
                        <Work work={work} />
                    </div>
                )
            })
        };
        
        return (
            <>
            <div className="cv-section-title">Work experience</div>
            {workList}    
            </>
        )
    }
};

export default WorkList