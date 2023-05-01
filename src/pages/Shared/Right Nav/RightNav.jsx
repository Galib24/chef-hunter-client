import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RightZone from '../right zone/RightZone';
const RightNav = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefDetails')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>

            <div>
                <Carousel variant="dark" slide={true} className='mx-auto w-75 mt-4'>
                    <Carousel.Item>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/z6YWy2H/sdojd.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/mD2WfwH/sdju.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/YkNQWC6/sju.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>

    );
};

export default RightNav;