import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import profile from '../images/cover.png'

function Myprofile(props) {
    const [data, setData] = useState('')
    const [skillsdata, setSkillsdata] = useState([])

    const isoDate = props.data.dob;
    const dateObj = new Date(isoDate);
    const formattedDate = dateObj.toLocaleDateString('en-GB');





    useEffect(() => {
        setData(props.data)
    }, [props.data]);


    useEffect(() => {
        if (props.data) {
            const skills = JSON.parse(props.data.skills);
            setSkillsdata(skills)
        }
    }, [props.data]);



    return (
        <>
            <Navbar data={data} />
            <div className='container'>
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb mx-5 px-4">
                        <li class="breadcrumb-item "><a href="/">Home</a></li>
                        <li class="breadcrumb-item " aria-current="page">My Profile</li>
                    </ol>
                </nav>
                <section className='myprofile'>
                    <div className="myprofile-banner">
                        <div className="row">
                            <div className="col-3 mx-5">
                                <div className="myprofile-img">
                                    <img src={profile} alt="profile" />
                                </div>
                            </div>
                            <div className="col-7">
                                <form action="/" >
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Name:</p>
                                        <input type='text'
                                            value={data.username}
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Email:</p>
                                        <input type='text'
                                            value={data.email}
                                            name='email'
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Contact:</p>
                                        <input type='text'
                                            value={data.phone_no}
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Address:</p>
                                        <textarea rows={3}
                                            type='text'
                                            value={data.address}
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Date of Birth:</p>
                                        <input type='text'
                                            value={formattedDate}
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Course:</p>
                                        <input type='text'
                                            value={data.course}
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='myprofile-items '>
                                        <p className='m-0 col-3 '>Skills:</p>
                                        <textarea rows={3}
                                            type='text'
                                            value={skillsdata}
                                            className='input-text'
                                            readOnly />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button className='glassbtn w-75' >Back to Home</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Myprofile
