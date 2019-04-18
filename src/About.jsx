import React from "react"

const About = () => {
    return (
        <div>
        <div className="intro-wrapper">
            <div className="illustration-wrapper">
                <img src="src/img/zane.png"></img>
            </div>
            <div className="text-wrapper">
                <p className="content-quote">Coffee / ambition driven web developer and graphic designer based in Gothenburg, Sweden.</p>
                <p className="content-quote">Hard at work since 2007.</p>
            </div>
        </div>

        <div className="mt-8">
        <h1 className="content-header">About Me</h1>
        <p className="content-text">I’m Zane Neikena, multi-channel problem solver proficient in designing for print, web and digital signage. Additionally, I know my final arts inside and out, so there’s that. I’m currently attending a coding bootcamp at Craft Academy. Offline, I enjoy running and watching documentaries while cuddling with my two cats.</p>
        <p className="content-text"></p>
        <p className="content-text"></p>

        <h1 className="content-header">What can I do for you?</h1>
        <p className="content-text">Feature rich and beautiful web apps built with user experience as the first priority. Reliable software developed test driven way - it is tested before it is written, literally. Some buzzwords, if that's your thing: Ruby, Ruby on Rails, JavaScript, React, Test Driven Development, Behaviour Driven Development, Agile, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe AfterEffects.</p>
        </div>
        </div>
    )
};

export default About