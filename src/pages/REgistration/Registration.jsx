import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const auth = getAuth(app);
const user = auth.currentUser;

const Registration = () => {

    // Google function for login
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error =>{
                console.log('error',error);
            })

    }
    // google sign out
    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);

        })
        .catch(error =>{
            console.log(error);
        })
    }
    // github method
    const githubProvider = new GithubAuthProvider();
     const handleGithubLogIn =() =>{
        signInWithPopup(auth,githubProvider )
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
     }
    //  github signOut
    const handleGithubSignOut = ()=>{
        signOut(auth)
        .then(result =>{
console.log(result);
        })
        .catch(error =>{
            console.log(error.message);
        })

    }

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // signUp method

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (!email) {
            return alert('Please provide an email')
        }
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
                console.log(loggedUser);

                setSuccess('Successfully Created Account');
                updateUserData(result.user, name, photo)

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

    // update user name
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('user name updated', name, photo);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // updated user photo URL



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
                        <Form.Control type="email" name='email' placeholder="Enter your email" />
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

            {/* facebook and github */}
            <div className='d-flex justify-content-center gap-5'>
                <Form.Group className='mt-3'>
                    {/* <div >Larger shadow</div> */}
                    <Button onClick={handleGoogleLogIn} className="shadow-lg p-3 mb-5  rounded bg-light ">
                      <FaGoogle style={{color: 'black'}}></FaGoogle>
                    </Button>
                </Form.Group>
                <Form.Group className='mt-3'>
                    {/* <div >Larger shadow</div> */}
                    <Button onClick={handleGithubLogIn} className="shadow-lg p-3 mb-5  rounded bg-light ">
                        <FaGithub style={{ color: 'black' }}></FaGithub>
                    </Button>
                </Form.Group>
            </div>
        </>
    );
};

export default Registration;