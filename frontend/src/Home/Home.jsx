import React from 'react'
import Announcement from './Announcement'
import Feed from './Feed'

import Navbar from './Navbar'
import Profile from './Profile'

function Home() {

    return (
        <>
            <Navbar />
            <div className="d-flex ">
                <Profile />

                <Feed />
                <Announcement />
            </div>
        </>
    )
}

export default Home