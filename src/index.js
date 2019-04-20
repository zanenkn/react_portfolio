import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import './css/tailwind.css'
import { BrowserRouter } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Design from "./Design"
import Cv from "./Cv"
import Contact from "./Contact"
import { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/design' component={Design}></Route>
                        <Route exact path='/cv' component={Cv}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                    </Switch>
                </div>
                <Footer />
            </div> 
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"));


