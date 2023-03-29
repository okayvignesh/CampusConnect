import React from 'react'
import Announcement from './Announcement'
import Feed from './Feed'

import Navbar from './Navbar'
import Profile from './Profile'

function Home(props) {
    const { username } = props;
    return (
        <>
            <Navbar />
            <div className="d-flex ">
                <Profile username={username} />

                <Feed />
                <Announcement />
            </div>
        </>
    )
}

export default Home