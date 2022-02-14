import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand fs-4" to="/">S<span style={{color: 'red'}}>U</span>PPR<span style={{color: 'red'}}>E</span>ME</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Contact">Contact</NavLink>
                            </li>   
                        </ul>
                        
                        <div className="buttons">
                            <NavLink to="/Login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"> Login</i>
                            </NavLink>
                            <NavLink to="/Register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus"> Register</i>
                            </NavLink>
                            <NavLink to="/Cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"> Cart (0)</i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar