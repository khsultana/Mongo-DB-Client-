import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {

    const users = useLoaderData()
    const [displayUser, setDisplay] = useState(users)
    const handleDelete = user => {
        const agree = window.confirm(`are you sure${user.name}`)
        console.log(agree)
        if (agree) {
            // console.log('Deleete', user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        alert('user Deleted Success')
                    const remainUser = displayUser.filter(usr =>
                        usr._id !== user._id)
                    setDisplay(remainUser)
                })
        }
    }
    return (
        <div>
            <h2>User : {displayUser.length}</h2>
            <div>
                {displayUser.map(user => <p key={user._id}>

                    {user.name}
                    <br />
                    {user.email}
                    <Link to={`/update/${user._id}`}>
                        <Button type='btn'>Update</Button>
                    </Link>
                    <Button onClick={() => handleDelete(user)} type='btn'>X</Button>
                </p>)}
            </div>
        </div>
    );
};

export default Product;