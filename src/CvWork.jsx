import React from 'react'
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

export default Work