import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt="" width="180px" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link mr-3" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#portfolio" class="nav-link mr-3" href="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#our-team" className="nav-link mr-3">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#contact-us" className="nav-link mr-3">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/login' className="btn btn-dark px-4">Login</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;