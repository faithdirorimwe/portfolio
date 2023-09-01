import { Link } from "react-router-dom";

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
                    <form>
                        <input type="text"
                            className="name"
                            required
                            value="Name"
                            onChange={(e) => {
                                Name = e.target.value;
                            }}
                        />
                        <br /> <br />
                        <input type="email"
                            className="email"
                            required
                            value="Email Address"
                            onChange={(e) => {
                                Email_Address = e.target.value;
                            }}
                        />
                        <br /> <br />
                        <textarea
                            className="msg"
                            required
                            value="Grab a coffee, or work on a project together?"
                            onChange={(e) => {
                                Message = e.target.value;
                            }}
                        />
                        <br /> <br />
                        <div className="submit-container">
                            <button type="submit"
                                className="submit"
                                onChange={(e) => {
                                    submit = e.target.value;
                                }}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div  className="footer-inner">
                <div className="home-links">
                    <div className="name">
                        <p>Faith Dirorimwe</p>
                        <h1>Frontend Web Developer.</h1>
                    </div>
                    <div className="links">
                        <div className="nav-links">
                            <Link>Home</Link>
                            <Link>About Me</Link>
                            <Link>My Work</Link>
                        </div>
                        <div className="nav-links">
                            <Link>My Resume</Link>
                            <Link>Invoices</Link>
                            <Link>Privacy Policy</Link>
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
