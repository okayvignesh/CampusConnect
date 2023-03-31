import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';

function Mycourse(props) {
    const [data, setData] = useState('')

    useEffect(() => {
        setData(props.data)
    }, [props.data]);

    return (

        <>
            <Navbar data={data} />
            <section className='mycourse'>
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb mx-5 px-5">
                            <li class="breadcrumb-item "><a href="/">Home</a></li>
                            <li class="breadcrumb-item " aria-current="page">My Course</li>
                        </ol>
                    </nav>
                    <div className=' d-flex flex-column align-items-center'>
                        <div className="mycourse-banner">
                            <h4 className='text-center '>My Course</h4>
                            <hr />
                            <div className="row d-flex justify-content-around">
                                <div className="col-4">
                                    <h5 className='mx-3 mb-3'>Semester 1</h5>
                                    <ul>
                                        <li>C</li>
                                        <li>Python</li>
                                        <li>Operating system</li>
                                        <li>Digital logics</li>
                                        <li>Probability and statistics</li>
                                        <li>Holistic education</li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h5 className='mx-3 mb-3'>Semester 2</h5>
                                    <ul>
                                        <li>DBMS</li>
                                        <li>Microprocessor</li>
                                        <li>Web stack development</li>
                                        <li>Software engineering</li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h5 className='mx-3 mb-3'>Semester 3</h5>
                                    <ul>
                                        <li>DBMS Project</li>
                                        <li>Java programming</li>
                                        <li>Data structures</li>
                                        <li>Elective</li>
                                        <li>Computer networks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Mycourse