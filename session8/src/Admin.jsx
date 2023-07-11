import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Dashborad from './components/admin/Dashborad'
import Events from './components/admin/Events'

export default function Admin() {
    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light">Home</div>
                    <div className="list-group list-group-flush">
                        <Link to={'/'} className='list-group-item list-group-item-action list-group-item-light p-3'>Dashboard</Link>
                        <Link to={'/contact'} className='list-group-item list-group-item-action list-group-item-light p-3'>Contact</Link>
                        <Link to={'/events'} className='list-group-item list-group-item-action list-group-item-light p-3'>Events</Link>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./profile.html"
                        >
                            Profile
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./login.html"
                        >
                            Login
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./register.html"
                        >
                            Register
                        </a>
                    </div>
                </div>
                {/* Page content wrapper*/}
                <div id="page-content-wrapper">
                    {/* Top navigation*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#!">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Link
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <a className="dropdown-item" href="#!">
                                                Action
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                Another action
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#!">
                                                Something else here
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Page content*/}
                    <div className="container-fluid">
                        <Routes>
                            <Route path='/' element={<Dashborad />} />
                            <Route path='/events' element={<Events />} />
                        </Routes>
                    </div>
                </div>
            </div>

        </>
    )
}
