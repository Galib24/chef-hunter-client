import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header';
import ReactPdf from '../ReactPdf/ReactPdf';
import Footer from '../Footer/Footer';

const Blog = () => {
    
  
    return (
        <>
        <Header></Header>
            <div className='d-flex justify-content-center mt-5 gap-5'>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header> <strong>Question answer 1</strong> </Card.Header>
                    <Card.Body>
                        <Card.Title> <strong>Difference between controlled and uncontrolled components</strong> </Card.Title>
                        <Card.Text>
                            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header><strong>Question answer 2</strong></Card.Header>
                    <Card.Body>
                        <Card.Title> <strong>How to validation react props using propsType?</strong> </Card.Title>
                        <Card.Text>
                            <p>Once you have defined the propTypes object for your component, React will automatically check the types of the props passed to the component and warn you in the console if a prop has an invalid type or is missing a required prop. This can help you catch errors early in the development process.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header><strong>Question answer 3</strong></Card.Header>
                    <Card.Body>
                        <Card.Title> <strong>Tell about different between node.js and express.js?</strong> </Card.Title>
                        <Card.Text>
                            <p>Node.js is a server-side JavaScript runtime that allows developers to run   JavaScript code on the server.
                                Express.js on the other hand, is a web application framework built on top of Nodejs. It provides a set of tools and features that make it easier to build web applications with Node.js.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header><strong>Question answer 4</strong></Card.Header>
                    <Card.Body>
                        <Card.Title> <strong>What is custom hook and why will you create a custome hook</strong> </Card.Title>
                        <Card.Text>
                            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications..</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

              

            </div>
            <ReactPdf></ReactPdf>
            <Footer></Footer>
        </>
    );
};

export default Blog;