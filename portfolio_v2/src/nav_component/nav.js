import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav className="navbar">
           <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <span className="nav-text">Works</span>
                    </a>
                </li>
           </ul>
        </nav>
    )

}


export default Nav