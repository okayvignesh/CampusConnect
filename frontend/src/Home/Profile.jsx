import React, { useState } from 'react'
import cover from '../images/cover.png'
import profile from '../images/cover.png'
import { AiOutlineEdit } from 'react-icons/ai'
import { skilldata } from './skillsdata'
import axios from 'axios'

function Profile() {
    const length = skilldata.length - 6;
    const [pills, setPills] = useState(6)

    function handlexpand() {
        setPills(pills + length)
    }



    return (
        <section className='profile col-3'>
            <div className="profile-card">
                <img src={cover} alt='-' className='cover-img' />
                <img src={profile} alt='-' className='profile-img' />
                <button className='glassbtn p-1 edit-btn '>
                    <AiOutlineEdit color="white" size={20} />
                </button>

                <div className="profile-details">
                    <p className='fw-bold'>username</p>
                    <p className='text-muted'> 2nd year</p>
                    <small >Masters of Computer Applications (MCA)</small>
                    <br />
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores, adipisci laborum animi nam nemo dicta! Voluptatem possimus esse saepe.</small>
                    <button className="glassbtn w-75">
                        My Profile
                    </button>
                </div>
            </div>

            <div className='skills-section'>
                <p className='fw-bold'>Skills:</p>
                <div className="row">
                    {
                        skilldata.slice(0, pills).map((value, index) => {
                            return (
                                <div className="col-2 skill-pills" key={index}>
                                    {value}
                                </div>

                            )
                        })
                    }

                    {pills < skilldata.length &&
                        <button className="col-2 skill-pills" onClick={handlexpand}>
                            {length}+ more
                        </button>
                    }

                </div>
            </div>

            <div className='clubs-section'>
                <p className='fw-bold'>Clubs:</p>
                <a href='/' className="clubs">
                    <img src={profile} alt='-' className='club-img' />
                    <div>
                        <h6>Science club</h6>
                        <small className='text-muted'> hell</small>
                    </div>
                </a>
                <a href='/' className="clubs">
                    <img src={profile} alt='-' className='club-img' />
                    <div>
                        <h6>Science club</h6>
                        <small className='text-muted'> hell</small>
                    </div>
                </a>
                <a href='/' className="clubs">
                    <img src={profile} alt='-' className='club-img' />
                    <div>
                        <h6>Science club</h6>
                        <small className='text-muted'> hell</small>
                    </div>
                </a>

            </div>

        </section>
    )
}
export default Profile