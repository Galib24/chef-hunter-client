import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/Right Nav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={6}>
                    <img  className='img-fluid w-75' src="https://i.ibb.co/tMgLZDd/scduwd.png" alt="" />
                    </Col>
                    <Col lg={6}>
                        <RightNav></RightNav>
                    </Col>
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;