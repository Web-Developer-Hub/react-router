import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const API = `https://jsonplaceholder.typicode.com/users`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])


    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center' }}>This is my blogs page</h2>
            <div className='main'>
                {
                    users.map((user) => <Blog user={user} key={user.id}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;