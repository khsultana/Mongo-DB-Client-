import { Toast } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const User = () => {
    const [user, setUser] = useState({ name: 'default', email: 'default@gmail.com' })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'constent-type': 'applcation/json'
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
                <button className='bg-sky-400' type='btn' >Added</button>
            </form>


        </div>
    );
};

export default User;