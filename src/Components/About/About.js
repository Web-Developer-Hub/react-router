import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import './About.css'

const About = () => {


    return (
        <div className='about-container'>
            <h2 className='title'>This is my about page </h2>
            <div className='image'>
                <img src="./Images/achive-1.jpg" alt="profile" srcset="" />
                <img src="./Images/achive-2.jpg" alt="profile" srcset="" />
            </div>

            <div className='about'>
                <section className='prograss'>
                    <Container>
                        <p> JavaScript <ProgressBar variant="warning" animated now={75} /></p>
                        <p> React Js <ProgressBar variant="info" animated now={78} /></p>
                        <p> Python <ProgressBar variant="success" animated now={70} /></p>
                        <p> PHP <ProgressBar variant="defualt" animated now={60} /></p>
                        <p> C++ <ProgressBar variant="danger" animated now={65} /></p>
                        <p> Django <ProgressBar variant="success" animated now={55} /></p>
                        <p> C <ProgressBar variant="success" animated now={70} /></p>
                    </Container>
                </section>

                <section>
                    <div className='profile'>
                        <img src="./Images/me.jpg" alt="avater" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;