import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';


const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make a POST request to your backend server
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                // Display a success message or redirect to a thank-you page
                console.log('Email sent successfully!');
            } else {
                // Display an error message
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
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
                <form>
                        <input
                            type="text"
                            className="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <br /> <br />
                        <input
                            className="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br /> <br />
                        <textarea
                            className="msg"
                            placeholder="Grab a coffee, or work on a project together?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
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
