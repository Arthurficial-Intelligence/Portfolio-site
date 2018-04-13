import React, {Component} from 'react';
import Logo from '../images/small-logo.png';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';



let NavBar = (props) => {
    return (
        <nav className="container mt-5">
            <ul className="nav justify-content-between text-center">
                <li className="nav-item">
                    <img src={props.Logo} width="100" height="70"  alt="" />
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>


            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />

        </nav>
    )
}


class Nav extends Component {
    render() {
        return(
            <BrowserRouter>
                <NavBar Logo={Logo}/>
            </BrowserRouter>
        )
    }
}

export default Nav;