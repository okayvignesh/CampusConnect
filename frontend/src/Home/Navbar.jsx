import React, { useState, useEffect } from 'react'
import { RiHome5Fill, RiMessage3Fill } from 'react-icons/ri'
import { HiBell } from 'react-icons/hi'
import { FaMedal } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import logo from '../images/logo.png'

function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">

            <div className="container-fluid px-5 py-2">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt='-' width="50px" height="50px" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
                    <input className="searchbar" type="search" placeholder="#Explore" aria-label="Search" />
                    <div className='d-flex align-items-center nav-items me-5'>
                        <a href='/' className='nav-item-btn active'>
                            <RiHome5Fill color='white' size={25} />
                        </a >
                        <a href='/' className='nav-item-btn'>
                            <RiMessage3Fill color='white' size={25} />
                        </a >
                        <a href='/' className='nav-item-btn'>
                            <HiBell color='white' size={25} />
                        </a >
                        <a href='/' className='nav-item-btn'>
                            <FaMedal color='white' size={20} />
                        </a >
                    </div>
                    <div className="dropdown pe-5">
                        <button className="profile btn5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsFillPersonFill color='white' size={20} className="me-2" />
                            {props.data.username}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/login">Logout</a></li>
                            <li><a className="dropdown-item" href="/">Change Password</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar