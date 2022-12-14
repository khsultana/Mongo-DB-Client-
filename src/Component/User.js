import { Button } from 'flowbite-react';
import React, { useState } from 'react';

const User = () => {
    const [user, setUser] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Added Success')
                }
                console.log(data)
            })

    }

    const handleSubmitBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);

    }

    return (
        <div>
            <h2>This is User</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleSubmitBlur} type="text" name='name' placeholder='Your Name' required /> <br />
                <br />
                <input onBlur={handleSubmitBlur} type="email" name="email" placeholder='Your Email' required />
                <br />
                <br />
                <center><Button type='btn'>Added User</Button></center>
            </form>


        </div>
    );
};

export default User;