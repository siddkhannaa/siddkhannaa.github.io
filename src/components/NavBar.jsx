import React from "react";

import { scrollToSection } from "./helpers/scroll"; 
import './css/NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#about" className="nav-link" onClick={() => scrollToSection("about")}>
                        About
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#portfolio" className="nav-link" onClick={() => scrollToSection("portfolio")}>
                        Portfolio
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#contact" className="nav-link" onClick={() => scrollToSection("contact")}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}