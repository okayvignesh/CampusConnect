import React, { useLayoutEffect, useState } from 'react'
import cover from '../images/cover.png'
import profile from '../images/img1.jpg'
import { AiOutlineEdit } from 'react-icons/ai'
// import { skilldata } from './skillsdata'
import axios from 'axios'
import { useEffect } from 'react'
import img1 from '../images/image1.jpg'
import img2 from '../images/image3.jpg'
import img3 from '../images/image4.jpg'





function Profile(props) {
    const [skillsdata, setSkillsdata] = useState([])
    const length = skillsdata.length - 6;
    const [pills, setPills] = useState(6)
    const [data, setData] = useState('')

    function handlexpand() {
        setPills(pills + length)
    }



    useEffect(() => {
        if (props.data) {
            const skills = JSON.parse(props.data.skills);
            setSkillsdata(skills)
        }
    }, [props.data]);



    return (
        <section className='profile col-3'>
            <div className="profile-card">
                <img src={cover} alt='-' className='cover-img' />
                <div className='profile-img' ><img src={profile} alt='-' /></div>
                <button className='glassbtn p-1 edit-btn '>
                    <AiOutlineEdit color="white" size={20} />
                </button>

                <div className="profile-details">
                    <p className='fw-bold text-capitalize'>{props.data.username}</p>
                    <p className='text-muted'> 2nd year</p>
                    <small >{props.data.course}</small>
                    <br />
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores, adipisci laborum animi nam nemo dicta! Voluptatem possimus esse saepe.</small>
                    <a href="/profile">
                        <button className="glassbtn w-75">
                            My Profile
                        </button>
                    </a>
                    <a href="/course">
                        <button className="glassbtn m-1 w-75">
                            My Course
                        </button>
                    </a>
                </div>
            </div>

            <div className='skills-section'>
                <p className='fw-bold'>Skills:</p>
                <div className="row">
                    {
                        skillsdata.slice(0, pills).map((value, index) => {
                            return (
                                <div className="col-2 skill-pills" key={index}>
                                    {value}
                                </div>

                            )
                        })
                    }

                    {pills < skillsdata.length &&
                        <button className="col-2 skill-pills" onClick={handlexpand}>
                            {length}+ more
                        </button>
                    }

                </div>
            </div>

            <div className='clubs-section'>
                <p className='fw-bold'>Clubs:</p>
                <a href='/' className="clubs">
                    <img src={img1} alt='-' className='club-img' />
                    <div>
                        <h6>Science club</h6>
                        <small className='text-muted'> Science & Technology</small>
                    </div>
                </a>
                <a href='/' className="clubs">
                    <img src={img3} alt='-' className='club-img' />
                    <div>
                        <h6>Arts club</h6>
                        <small className='text-muted'> Arts </small>
                    </div>
                </a>
                <a href='/' className="clubs">
                    <img src={img2} alt='-' className='club-img' />
                    <div>
                        <h6>Theatre club</h6>
                        <small className='text-muted'> Theatrics </small>
                    </div>
                </a>

            </div>

        </section>
    )
}
export default Profile