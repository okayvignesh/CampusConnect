import React from 'react'
import { RiHome5Fill, RiMessage3Fill } from 'react-icons/ri'
import { HiBell } from 'react-icons/hi'
import { FaMedal } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">

            <div className="container-fluid px-5 py-2">
                <a className="navbar-brand" href="/">LOGO</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
                    <input className="searchbar" type="search" placeholder="#Explore" aria-label="Search" />
                    <div className='d-flex align-items-center nav-items'>
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
                    <div class="dropdown pe-5">
                        <button class="profile btn5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsFillPersonFill color='white' size={20} className="me-2" />
                            Username
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/">Logout</a></li>
                            <li><a class="dropdown-item" href="/">Change Password</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar