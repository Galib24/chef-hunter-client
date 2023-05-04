import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import Footer from '../Shared/Footer/Footer';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const auth = getAuth(app)

const Login = () => {

    // Google function for login
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setSuccess('Successfully LoggedIn');
            })
            .catch(error => {
                console.log('error', error);
            })

    }
    // google sign out
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);

            })
            .catch(error => {
                console.log(error);
            })
    }
    // github method
    const githubProvider = new GithubAuthProvider();
    const handleGithubLogIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user
                setSuccess('Successfully Signup');
            })
            .catch(error => {
                console.log(error);
            })
    }
    //  github signOut
    const handleGithubSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })

    }



    // useState for error
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    // trigger of login button

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);




        // validation function

        setError("")
        setSuccess("")
        form.reset();
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('please add at least two uppercase');
            return
        }

        else if (password.length < 6) {
            setError('Password should be 6 characters');
            return
        }
        // else if(/(?=.*[!@#$&*]) /.test(password)){
        //     setError('please add a special character')
        // return
        // }

        //  signIn method

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Successfully login');
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <>
            <Header></Header>
            <Container className='w-25 mx-auto mt-5 row'>
                <h3>Please Login!!!</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show Password" />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an account? <Link style={{ textDecoration: 'none' }} to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                        <p>{success}</p>
                    </Form.Text>
                    <Form.Text className="text-danger">

                        <p>{error}</p>
                    </Form.Text>
                </Form>
                {/* google and github */}
                <div className='d-flex justify-content-center gap-5'>
                    <Form.Group className='mt-3'>
                        {/* <div >Larger shadow</div> */}
                        <Button onClick={handleGoogleLogIn} className="shadow-lg p-3 mb-5  rounded bg-light ">
                            <FaGoogle style={{ color: 'black' }}></FaGoogle>
                        </Button>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        {/* <div >Larger shadow</div> */}
                        <Button onClick={handleGithubLogIn} className="shadow-lg p-3 mb-5  rounded bg-light ">
                            <FaGithub style={{ color: 'black' }}></FaGithub>
                        </Button>
                    </Form.Group>
                </div>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Login;