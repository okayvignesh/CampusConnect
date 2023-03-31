import React, { useState } from 'react'
import { useEffect } from 'react'
import Announcement from './Announcement'
import Feed from './Feed'
import Navbar from './Navbar'
import Profile from './Profile'
import axios from 'axios'

function Home() {
    const [data, setData] = useState('')

    useEffect(() => {
        function fetch() {
            axios.get(`${import.meta.env.VITE_URL}/userdata`)
                .then(response => {
                    setData(response.data[0])
                })
                .catch(error => {
                    console.log(error);
                });
        }

        fetch();

    }, [])

    console.log(data)

    return (
        <>
            <Navbar data={data} />
            <div className="d-flex ">
                <Profile   data={data}/>
                <Feed />
                <Announcement />
            </div>
        </>
    )
}

export default Home