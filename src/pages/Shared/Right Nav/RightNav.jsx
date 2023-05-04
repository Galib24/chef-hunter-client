import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RightZone from '../right zone/RightZone';
const RightNav = () => {
    // const [infos, setInfo] = useState([]);
    // useEffect(() => {
    //     fetch('https://chef-hunter-server-galib24.vercel.app/chefDetails')
    //         .then(res => res.json())
    //         .then(data => setInfo(data))
    //         .catch(error => console.log(error))
    // }, [])
    return (
        <div>
{/* {
    infos.map(info => <p>{info.name}</p> )
} */}
            <div>
                <Carousel variant="dark" slide={true} className='mx-auto w-75 mt-4'>
                    <Carousel.Item>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/z6YWy2H/sdojd.png" />
                            <Card.Body>
                                
                                <Card.Text>
                                 We are here for give customer best food and we are happy to serve them, thanks for being with us
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/mD2WfwH/sdju.png" />
                            <Card.Body>
                                
                                <Card.Text>
                                We are here for give customer best food and we are happy to serve them, thanks for being with us
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>


                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/YkNQWC6/sju.png" />
                            <Card.Body>
                                
                                <Card.Text>
                                We are here for give customer best food and we are happy to serve them, thanks for being with us
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>

    );
};

export default RightNav;