import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    const { id, email, name, address, phone, website } = props.user;
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/details/blog/${id}`);
    }


    return (
        <div className='child container'>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address.city}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Button onClick={clickHandler}>More Details</Button>
        </div >
    );
};

export default Blog;