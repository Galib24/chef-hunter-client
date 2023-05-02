import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Registration = () => {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("");

    // signup method

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);


        // reset field
        setError("")
        setSuccess("")
        form.reset();

        // validation part

        if (password.length < 6) {
            setError('Password should be 6 characters');
            return
        }

        // crete user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Successfully Created Account');
            })
            .catch(error => {
                setError(error.message);
            })
    }




    // checked method
    const [accepted, setAccepted] = useState(false);
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (
        <>
            <Header></Header>
            <Container className='w-25 mx-auto mt-3'>
                <h3 className="text-secondary">Please Signup!!!</h3>
                <Form onSubmit={handleSignUp}>
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
                        <Form.Check type="checkbox" onClick={handleAccepted} name='accept' label={<>Accepts<Link className='mx-2' style={{ textDecoration: 'none' }} to='/terms'>terms and conditions</Link> </>} />
                    </Form.Group>

                    <Button variant="secondary" disabled={!accepted} type="submit">
                        Signup
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                        <p>{success}</p>
                    </Form.Text>
                    <Form.Text className="text-danger">
                        <p>{error}</p>
                    </Form.Text>
                </Form>
            </Container>
        </>
    );
};

export default Registration;