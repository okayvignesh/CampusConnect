import React from 'react'

import Navbar from './Navbar'
import Profile from './Profile'

function Home() {
    return (
        <>
            <Navbar />
            <div className="d-flex ">
                <Profile />

                <div className="col-6">
                    feed
                </div>
                <div className="col-3">
                    announcement
                </div>
            </div>
        </>
    )
}

export default Home