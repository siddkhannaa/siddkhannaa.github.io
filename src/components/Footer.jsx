import React from "react";

import './css/Footer.css';

export const Footer = () => {
    return(
        <div>
            <section id="contact">
                <footer className="footer">
                    <div className="social-icons">
                        <a href="mailto:siddharthkhanna2k@gmail.com" target="_blank">
                            <i class="fab fa-envelope"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/siddharth-khanna-31a90215a/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/siddkhannaa" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </footer>
            </section>
        </div>
    )
}
