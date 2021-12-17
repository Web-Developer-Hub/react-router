import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './BlogDetails.css'

const BlogDetails = () => {
    const { blogID } = useParams();
    const [blog, setBlog] = useState({})
    const history = useHistory()

    useEffect(() => {
        const API = `https://jsonplaceholder.typicode.com/users/${blogID}`
        fetch(API)
            .then((res) => res.json())
            .then((data) => setBlog(data))
    }, [blogID])

    const { id, email, name, address, phone, website } = blog;

    const clickHandler = () => {
        history.push(`/blogs`);
    }


    return (
        <div className='blogDetails-container'>
            <h1>This is my blogs detail....</h1>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address?.city}</p>
            <p>Street: {address?.street}</p>
            <p>Zipcode: {address?.zipcode}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Button onClick={clickHandler}>See All Blogs</Button>
        </div>
    );
};

export default BlogDetails;