import React, { useState } from 'react'
import cover from '../images/cover.png'
import profile from '../images/cover.png'
import { AiOutlineEdit } from 'react-icons/ai'
// import { skilldata } from './skillsdata'
import axios from 'axios'
import { useEffect } from 'react'

function Profile(props) {
    const [skillsdata, setSkillsdata] = useState([])
    const length = skillsdata.length - 6;
    const [pills, setPills] = useState(6)
    const [data, setData] = useState('')
    const { username } = props;

    function handlexpand() {
        setPills(pills + length)
    }


    useEffect(() => {
        function fetch() {
            axios.get(`${import.meta.env.VITE_URL}/userdata/${'vignesh'}`)
                .then(response => {
                    setData(response.data[0])
                })
                .catch(error => {
                    console.log(error);
                });
        }

        fetch();

    }, [])

    useEffect(() => {
        if (data) {
            const skills = JSON.parse(data.skills);
            setSkillsdata(skills)
        }
    }, [data]);


    return (
        <section className='profile col-3'>
            <div className="profile-card">
                <img src={cover} alt='-' className='cover-img' />
                <img src={profile} alt='-' className='profile-img' />
                <button className='glassbtn p-1 edit-btn '>
                    <AiOutlineEdit color="white" size={20} />
                </button>

                <div className="profile-details">
                    <p className='fw-bold text-capitalize'>{data.username}</p>
                    <p className='text-muted'> 2nd year</p>
                    <small >{data.course}</small>
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