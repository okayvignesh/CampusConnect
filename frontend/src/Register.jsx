import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Error from './alerts/error';
import Select from 'react-select';
import { skills } from './skillsdata';

function Register() {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const [formvalue, setFormvalue] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        dob: '',
        address: "",
        course: "",
    });

    const [selectedSkills, setSelectedSkills] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormvalue(prevFormvalue => ({
            ...prevFormvalue,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_URL}/register`, {
            ...formvalue,
            skills: selectedSkills.map(skill => skill.value) 
        }, {
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
                setShowAlert(true)
                console.log(showAlert)
            });
    }

    function handleSelectChange(selectedOptions) {
        setSelectedSkills(selectedOptions);
    }


    return (
        <section className='register'>
            {showAlert && <Error message={"Username already exists! Try a different username"} />}
            <form onSubmit={handleSubmit} action="/">
                <input type='text'
                    placeholder='Username'
                    name='username'
                    value={formvalue.username}
                    onChange={handleChange}
                    required />
                <input type='email'
                    placeholder='email'
                    name='email'
                    value={formvalue.email}
                    onChange={handleChange}
                    required multiple />
                <input type='password'
                    placeholder='Password'
                    name='password'
                    value={formvalue.password}
                    onChange={handleChange}
                    required />
                <input type='number'
                    placeholder='Phone Number'
                    name='phone'
                    value={formvalue.phone}
                    onChange={handleChange}
                    required />
                <input type='date'
                    name='dob'
                    value={formvalue.dob}
                    onChange={handleChange}
                    required />
                <input type="text"
                    name='course'
                    placeholder='Course'
                    value={formvalue.course}
                    onChange={handleChange}
                    required />

                <Select
                    isMulti
                    name="skill"
                    options={skills}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={selectedSkills}
                    onChange={handleSelectChange}
                />

                <textarea
                    placeholder='Address'
                    name='address'
                    value={formvalue.address}
                    onChange={handleChange}
                    required />
                <button type='submit'>Register</button>
            </form>
        </section>
    )
}

export default Register;