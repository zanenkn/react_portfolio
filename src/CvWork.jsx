import axios from "axios"
import React, { Component } from "react"
import './css/tailwind.css'

const Work = (props) => {
    let work = props.work
    return(
        <div key={work.id}>

            <>
                {work.title}
                {work.company}

            </>
                
            <>
                {work.description}
            </>

            <>
                {work.dates}
            </>

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
            {workList}    
            </>
        )
    }
};

export default WorkList