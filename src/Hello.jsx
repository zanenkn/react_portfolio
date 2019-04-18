import React from "react"
import { UndrawCreativity } from 'react-undraw-illustrations';

const Hello = () => {
    return (
        
        <div className="intro-wrapper">
                <div className="illustration-wrapper">
                <UndrawCreativity primaryColor='#019ebd' height='200px'/>
                </div>
                <div className="text-wrapper">
                    <p className="content-quote">"A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyse a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects." — Robert Heinlein</p>
                </div>
        </div>
    )
}

export default Hello