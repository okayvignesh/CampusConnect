import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        dob: '',
        address: "",
        course: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormvalue(prevFormvalue => ({
            ...prevFormvalue,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formvalue);
        axios.post(`${import.meta.env.VITE_URL}/register`, formvalue, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                navigate('/login');
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <section className='register'>
            <form onSubmit={handleSubmit} action="/">
                <input type='text'
                    placeholder='Username'
                    name='username'
                    value={formvalue.username}
                    onChange={handleChange} />
                <input type='email'
                    placeholder='email'
                    name='email'
                    value={formvalue.email}
                    onChange={handleChange} />
                <input type='password'
                    placeholder='Password'
                    name='password'
                    value={formvalue.password}
                    onChange={handleChange} />
                <input type='number'
                    placeholder='Phone Number'
                    name='phone'
                    value={formvalue.phone}
                    onChange={handleChange} />
                <input type='date'
                    name='dob'
                    value={formvalue.dob}
                    onChange={handleChange} />
                <input type="text"
                    name='course'
                    placeholder='Course'
                    value={formvalue.course}
                    onChange={handleChange} />
                <textarea
                    placeholder='Address'
                    name='address'
                    value={formvalue.address}
                    onChange={handleChange} />
                <button type='submit'>Register</button>
            </form>
        </section>
    )
}

export default Register