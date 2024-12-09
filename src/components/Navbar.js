import React from 'react';
import Logo from '../assets/images/Sabzi.png';

// Bootstrap Headers 
// https://getbootstrap.com/docs/5.0/examples/headers/
const Navbar = () => {
    return (
        <div className="container-fluid px-5 header sticky-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={Logo} alt="" className="w-25 h-25" />
                </a>
                                       
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 menu-color">Home</a></li>
                    <li><a href="#" className="nav-link px-2 menu-color">Producrs</a></li>
                    <li><a href="#" className="nav-link px-2 menu-color">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    {/* <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button> */}

                    <i className="bi bi-search fs-5 me-3 text-success"></i>
                    <i className="bi bi-cart fs-5 text-success"></i>
                </div>
            </header>                             
        </div>

    );
};

export default Navbar;