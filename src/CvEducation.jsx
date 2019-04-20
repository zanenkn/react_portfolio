import axios from "axios"
import React, { Component } from "react"
import './css/tailwind.css'

const Study = (props) => {
    let study = props.study
    return(
        <div key={study.id} className="cv-section-wrapper">

            <div className="cv-title">{study.subject}</div>
            <div className="cv-job">
                <a href={study.website} target="_blank" className="content-link">{study.school}</a>
                <p className="content-text">{study.dates}</p>
            </div>
                
            <div className="cv-description">
                <div className="content-text">{study.description}</div>    
            </div>

        </div>
    )
}

class StudyList extends Component {
    constructor() {
        super();
        this.state={
            study: []
        }
    }

    componentDidMount(){
        axios.get('./src/data/cv.education.json')
        .then(response => {
            this.setState({
                study: response.data
            })
        })
    }

    render() {
        let study = this.state.study
        let studyList

        if(study.length>0) {
            studyList = study.map(study => {
                return (
                    <div key={study.id}>
                        <Study study={study} />
                    </div>
                )
            })
        }
        
        return (
            <>
            <div className="cv-section-title">Education</div>
            {studyList}    
            </>
        )
    }

}

export default StudyList