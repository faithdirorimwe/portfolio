import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';


const Footer = () => {
   
    return (
        <footer>
            <div className="connect">
                <div className="infor">
                    <h1>Reach Out!</h1>
                    <p>
                        Text, or call:{' '}
                        <Link to="tel:+263785585342"> <br />
                            +263 785 585 342</Link>
                    </p>
                    <br />
                    <p>
                        My Email Address:{' '}
                        <Link to="mailto:taithdone@gmail.com"> <br />
                            taithdone@gmail.com
                        </Link>
                    </p>
                </div>

                <div className="reach-out">
                <form action="https://data.endpoint.space/clpv87sca000008l7cy98syjn" method="POST">
                        <input
                            type="text"
                            className="name"
                            placeholder="Name"
                            name="name"
                            required
                        />
                        <br /> <br />
                        <input
                            className="email"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            required
                        />
                        <br /> <br />
                        <textarea
                            className="msg"
                            placeholder="Grab a coffee, or work on a project together?"
                            name="msg"
                            required
                        />
                        <br /> <br />
                        <div className="submit-container">
                            <button type="submit"
                                className="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-inner">
                <div className="home-links">
                    <div className="name">
                        <p>Faith Dirorimwe</p>
                        <h1>Frontend Web Developer.</h1>
                    </div>
                    <div className="links">
                        <div className="nav-links">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/About">About Me</NavLink>
                        </div>
                        <div className="nav-links">
                            <NavLink to="/Work">My Work</NavLink>
                            <Link to="https://drive.google.com/file/d/1uwrKxU4OLdzhZ2Iuni45BhVb-KfnPLq0/view?usp=drive_link">My Resume</Link>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <Link>Instagram</Link>
                    <Link>WhatsApp</Link>
                    <Link>Facebook</Link>
                    <Link>LinkedIn</Link>
                    <Link>GitHub</Link>
                </div>
            </div>
            <p>Copyright (c) 2023 Faith Dirorimwe - Frontend Web Developer. All Rights Reserved. designed by Denzel.</p>
        </footer>
    );
};

export default Footer;
