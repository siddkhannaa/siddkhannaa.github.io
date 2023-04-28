import React from "react";

import { scrollToSection } from "./helpers/scroll";
import './css/Home.css';
import mnimiLogo from '../assets/mnimi-logo.png';
import boblovLogo from '../assets/boblov-logo.png';
import ccLogo from '../assets/canadacomputers-logo.png';


export const Home = () => {

    return(
        <div>
            <section id="hero">
                <div className="hero">
                    <h1>Hi, I'm Siddharth</h1>
                    <p>{'>'} cs student_</p>
                    <a href="#portfolio" class="cta" onClick={() => scrollToSection("portfolio")}>View My Portfolio</a>
                </div>
            </section>

            <section id="about">
                <div className="about">
                    <h2>About Me</h2>
                    <p>I'm a passionate developer who loves a challenge and enjoys creating functional software and websites. I have experience with a variety of industries, including 💻 webdev, 🎮 gamedev, and 🔒 security</p>
                </div>
            </section>

            <section id="portfolio">
                <div className="portfolio">
                    <h2>Portfolio</h2>
                    <div class="portfolio-items">
                        <div class="portfolio-item">
                            <img src={mnimiLogo} alt="Mnimi Logo" style={{ width: '15%', height: 'auto' }} />
                            <div class="portfolio-item-info">
                                <h3>Mnimi</h3>
                                <p>A flashcard webapp to help students memorize terms and definitions in preparation for tests or exams.</p>
                                <a href="https://github.com/LaurierCS/Mnimi"class="cta">View Project</a>
                            </div>
                        </div>

                        <div class="portfolio-item">
                            <img src={ccLogo} alt="CCAPI Logo" style={{ width: '15%', height: 'auto' }}/>
                            <div class="portfolio-item-info">
                                <h3>Canada Computers Unofficial API</h3>
                                <p>A RESTful API that scrapes PC part and peripherial data from the Canada Computers website via search queries.</p>
                                <a href="https://github.com/siddkhannaa/CanadaComputersAPI"class="cta">View Project</a>
                            </div>
                        </div>

                        <div class="portfolio-item">
                            <img src={boblovLogo} alt="boblov Logo" style={{ width: '50%', height: 'auto' }} />
                            <div class="portfolio-item-info">
                                <h3>Boblov</h3>
                                <p>A Chrome extension that translates japanese manga.</p>
                                <a href="https://github.com/0x534b/boblov"class="cta">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}