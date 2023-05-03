import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import Swal from 'sweetalert2'


const MoreInfo = () => {
    const [disable, setDisable] = useState(false)

    // toast 
    const toastHandle = () => {
        Swal.fire(
            'Thanks for Liked my recipe!',
            'Customer Satisfaction is our Pride',

        )
        setDisable(true)
    }


    const { id } = useParams();
    // console.log(id);
    const INFO = useLoaderData()
    console.log(INFO);
    const [MoreInfoDetails, setMoreInfoDetails] = useState({})
    useEffect(() => {
        if (INFO) {
            const DetailsData = INFO.find(dt => dt.id == id)
            setMoreInfoDetails(DetailsData)
        }
    }, []);
    const {
        name,
        yearsOfExperience,
        rating,
        biodata,
        image,
        image2,
        image3,
        image4,
        ingredients,
        method1,
        method2,
        method3
    } = MoreInfoDetails;
    console.log(MoreInfoDetails);



    return (

        <div>

            <Header></Header>


            <Container className='mt-5'>
                <Row>
                    {/* card part */}
                    <Col lg={6}>
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 1 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                <h6>Years Of Experience: {yearsOfExperience} </h6>
                                                <h6> <strong>Biodata: </strong> {biodata} </h6>
                                                <h6>Ratings: {rating} </h6>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={6}>


                        <div className='row row-col-auto g-2'>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam voluptates aliquam?
                                    </Card.Text>
                                    <Button style={{insetInline: 'block'}} disabled={disable} onClick={toastHandle} variant="primary"><FaThumbsUp></FaThumbsUp> </Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button disabled={disable} onClick={toastHandle} variant="primary"><FaThumbsUp></FaThumbsUp></Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button disabled={disable} onClick={toastHandle} variant="primary"><FaThumbsUp></FaThumbsUp></Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default MoreInfo;