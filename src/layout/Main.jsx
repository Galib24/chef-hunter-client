import React, { useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/Right Nav/RightNav';
import RightZone from '../pages/Shared/right zone/RightZone';
import LeftZone from '../pages/Shared/leftZone/LeftZone';
import BestChefCard from '../pages/Shared/Bestchef/BestChefCard';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const [infos, setInfo] = useState([]);
    useEffect(() => {
        fetch('https://chef-hunter-server-galib24.vercel.app/chefDetails')
            .then(res => res.json())
            .then(data => setInfo(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <Header></Header>
            
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            <img className='img-fluid w-75' src="https://i.ibb.co/tMgLZDd/scduwd.png" alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <RightNav></RightNav>
                    </Col>

                </Row>
                <div className=''>
                    <h1 className='text-secondary text-center mt-4'>Our Respected Chef and Instructor</h1>
                </div>
                <div className='row row-cols-auto gap-5 mt-5'>

                    {
                        infos.map(info => <BestChefCard
                            key={info.id}
                            info={info}
                        >

                        </BestChefCard>)
                    }
                </div>



                <div className='d-flex align-items-center'>
                    <p>Hello and welcome to our website! We are thrilled to have you here and hope that you find everything you are looking for.

                        As a customer-focused company, we are committed to providing you with the best possible experience. That's why we have designed our website with you in mind, making it easy to navigate and find the information you need.

                        Whether you are here to shop for our products, learn more about our services, or simply browse our content, we want you to feel comfortable and confident every step of the way.

                        If you have any questions or concerns, please do not hesitate to reach out to our customer support team. We are always here to assist you and ensure that your experience with us is a positive one.

                        Thank you for choosing our website, and we look forward to serving you in the best way possible.</p>

                    <RightZone></RightZone>

                </div>
                <div className='d-flex flex-column mt-5'>
                    <LeftZone></LeftZone>
                    <p className='mt-5'>Dear visitors,

                        As a chef training center, we are dedicated to nurturing the next generation of culinary talent. One of the ways we do this is by providing opportunities for aspiring chefs to gain hands-on experience through our internship program.

                        Our intern chefs are a vital part of our team, bringing with them a passion for food, a desire to learn, and a willingness to work hard. They are given the chance to work alongside our experienced chefs, learning new techniques, and honing their skills in a real-world kitchen environment.

                        Through our internship program, we strive to provide our interns with a comprehensive understanding of the culinary industry, from menu planning to ingredient selection to presentation. Our goal is to equip them with the knowledge and skills they need to become successful chefs in their own right.

                        We are proud of our intern chefs and the contributions they make to our team. They bring a fresh perspective and a willingness to learn that helps us all grow and improve. We look forward to continuing to provide opportunities for aspiring chefs to learn and develop their skills through our internship program.

                        Thank you for visiting our website, and we hope that you will consider joining us as an intern chef in the future.</p>

                </div>
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;