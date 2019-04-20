import React, { Component } from "react"
import Work from "./CvWork"
import axios from "axios"

class Cv extends Component {
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
        const work = this.state.work
        let workList

        if(work.length>0) {
            workList = work.map(work => {
                return (
                    <div key={work.id}>
                        <Work work={work} />
                    </div>
                )
            })
        }
        
        return (
                <>
                    {workList}
                </>
                
        )
    }
};

export default Cv