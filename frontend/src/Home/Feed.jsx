import React from 'react'

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

            </div>
        </section>
    )
}

export default Feed