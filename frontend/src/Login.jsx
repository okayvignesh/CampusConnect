import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error from './alerts/error';

function Login(props) {
    const [username, setUsername] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({
        username: '',
        password: ''
    })


    function handleSubmit(e) {
        e.preventDefault();
        if (!formvalue.username || !formvalue.password) {
            alert('Please fill out all required fields.');
            return;
        }
        axios.post(`${import.meta.env.VITE_URL}/login`, formvalue, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setUsername(response.data[0].username);
                    props.onUsernameChange(response.data[0].username);
                    navigate('/');
                } else {
                    console.error(response.data.message);
                }
            })

            .catch(error => {
                console.error(error);
                setShowAlert(true)
            });
    }


    function handleChange(e) {
        const { name, value } = e.target;
        setFormvalue(prevformvalue => ({
            ...prevformvalue,
            [name]: value
        }))
    }


    return (
        <section className='login'>
            {showAlert && <Error message={"Invalid Username and Password!"} />}
            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Username'
                    name='username'
                    value={formvalue.username}
                    onChange={handleChange} />
                <input type={'password'}
                    placeholder="password"
                    name='password'
                    value={formvalue.password}
                    onChange={handleChange} />
                <button type='submit'>Login</button>
            </form>
        </section>
    )
}

export default Login