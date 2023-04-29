import React from "react";

import './css/Footer.css';

export const Footer = () => {
    return(
        <div>
            <section id="contact">
                <footer className="footer">
                    <div className="social-icons">
                        <a href="mailto:siddharthkhanna2k@gmail.com" target="_blank" rel="noreferrer" >
                            <i class="fa-solid fa-envelope"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/siddharth-khanna-31a90215a/" target="_blank" rel="noreferrer" >
                            <i class="fa-brands fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/siddkhannaa" target="_blank" rel="noreferrer" >
                            <i class="fa-brands fa-github"></i>
                        </a>

                        <a href="https://drive.google.com/file/d/1Btyl_VeDa4vPMDWTo7EsJ8w5KB1QqyFc/view?usp=share_link" target="_blank" rel="noreferrer" >
                            <i class="fa-solid fa-file"></i>
                        </a>
                    </div>
                </footer>
            </section>
        </div>
    )
}
