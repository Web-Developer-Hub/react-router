import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    const { id, email, name, address, phone, website } = props.user;
    return (
        <div className='child container'>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address.city}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Link to={`/details/blog/${id}`}> More Details...</Link>
        </div >
    );
};

export default Blog;