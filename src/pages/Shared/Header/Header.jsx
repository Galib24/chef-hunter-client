import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    // const { signIn } = useContext(AuthContext)
    return (
        <Container>

            <Navbar bg="light" expand="lg" className='mb-4 '>
                <Container fluid>
                    <Navbar.Brand href="/" className='d-flex align-items-center'>
                        <img width={100} height={100} src="https://i.ibb.co/nsvzzfk/wdjdwff.png" alt="" />
                        <h3>Brooklyn Diner</h3>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex flex-row">
                            <Nav>

                                <Link style={{ textDecoration: 'none' }} to={`/`}>Home</Link>
                                <Link style={{ textDecoration: 'none' }} to={`/blog`}>Blog</Link>
                                {/* {user && <Nav.Link>
                                    <img  src="" alt="" />
                                </Nav.Link>}
                                {user ?
                                    <Link style={{ textDecoration: 'none' }}>Logout</Link> :
                                    <Link style={{ textDecoration: 'none' }} to={`/login`}>Login</Link>
                                } */}
                                <Link style={{ textDecoration: 'none' }} to={`/login`}>Login</Link>
                                <Link style={{ textDecoration: 'none' }} to={`/register`}>Signup</Link>

                            </Nav>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <div className='text-center fw-bold'>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex mb-2'>



                <Marquee className='text-black' speed={50}>
                    <div className='mx-5'>
                        <img width={60} src="https://i.ibb.co/b32NwgQ/dwfhd.png" alt="" />
                    </div>

                    <div className='mx-5'>
                        <img width={60} src="https://i.ibb.co/w0pYVsB/sdfhgyde.png" alt="" />
                    </div>

                    <div className='mx-5'>
                        <img width={60} src="https://i.ibb.co/jLjz6ww/wdfurf.png" alt="" />
                    </div>

                    <div className='mx-5'>
                        <img width={60} src="https://i.ibb.co/4RCv4FR/sdfhjwer.png" alt="" />
                    </div>
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;