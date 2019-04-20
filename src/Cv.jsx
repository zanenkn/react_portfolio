import React from "react"
import WorkList from "./CvWork"
import StudyList from "./CvEducation"


const Cv = () => {
    return (
        <>
            <div className="mb-24">
            <WorkList/>
            </div>
            <div className="mb-24">
            <StudyList/>
            </div>
        </>
    )
}

export default Cv