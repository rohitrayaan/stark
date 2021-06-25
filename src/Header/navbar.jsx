import React from 'react'
import { NavLink } from 'react-router-dom'


function navbar() {
    return (
        <>
           
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">𝓢𝓽𝓪𝓻𝓴 𝓘𝓷𝓭𝓾𝓼𝓽𝓻𝓲𝓮𝓼</NavLink>
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <NavLink className="nav-link "  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/article">Articles</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                

                            </ul>
                        </div>
                    </div>
                </nav>

            </section>


        </>
    )
}

export default navbar
