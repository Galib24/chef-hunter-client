import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
const Registration = () => {
    const [accepted, setAccepted] = useState(false);
    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }
    return (
        <>
        <Header></Header>
            <Container className='w-25 mx-auto mt-3'>
                <h3 className="text-secondary">Please Signup!!!</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" onClick={handleAccepted} name='accept' label={<>Accepts<Link className='mx-2'style={{textDecoration: 'none'}} to='/terms'>terms and conditions</Link> </>} />
                    </Form.Group>

                    <Button variant="secondary" disabled={!accepted} type="submit">
                        Signup
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </>
    );
};

export default Registration;