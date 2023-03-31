import React from 'react'
import { postdata } from './Postdata';

function Feed() {
    return (
        <section className='feed col-6'>
            <div className="d-flex justify-content-around feed-container">
                <button className='glassbtn active m-0'>Personal </button>
                <button className='glassbtn  m-0'>Certificates </button>
                <button className='glassbtn  m-0'>Interests </button>
                <button className='glassbtn  m-0'>Internships </button>
            </div>
            <hr />
            <div className="posts-container">
                {
                    postdata.map((value, index) => {
                        return (
                            <div className="post" key={index}>
                                <div className="post-header">
                                    <img src={value.profile} loading="lazy" alt='-' className='post-profile' />
                                    <p className='m-0'>{value.username}</p>
                                </div>
                                <div className='post-pic'>
                                    <img src={value.img} loading="lazy" alt='-' />
                                </div>
                                <div className='post-footer'>
                                    {
                                        value.desc
                                    }

                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </section >
    )
}

export default Feed