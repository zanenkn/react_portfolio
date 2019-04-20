import axios from "axios"
import React, { Component } from "react"
import './css/tailwind.css'

const Study = (props) => {
    let study = props.study
    return(
        <div key={study.id}>

            <>
                {study.subject}
                {study.school}

            </>
                
            <>
                {study.description}
            </>

            <>
                {study.dates}
            </>

        </div>
    )
}

class StudyList extends Component {
    constructor() {
        super();
        this.state={
            study: []
        };
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
        };
        
        return (
            <>
            {studyList}    
            </>
        )
    }

};

export default StudyList