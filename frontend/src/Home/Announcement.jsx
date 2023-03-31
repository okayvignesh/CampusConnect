import React from 'react'
import { AiFillNotification } from 'react-icons/ai'
import img from '../images/image3.jpg'
import { andata } from './AnnouncementData'

function Announcement() {
    return (
        <section className='announcement col-3'>
            <div className="announcement-card">
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold m-0'>Announcements</p>
                    <AiFillNotification color="white" className='mx-2' />
                </div>
                <hr />


                <div className="announcement-list">
                    {
                        andata.map((value, index) => {
                            return (
                                <div className="announcement-item" key={index}>
                                    <div className='announcement-img'><img src={value.img} loading="lazy" alt='-' /></div>
                                    <p className='m-0'>{value.desc}</p>
                                    <button className='glassbtn m-2 w-75'><a href={'//'+value.link} target="_blank">Apply now</a></button>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </section>
    )
}

export default Announcement