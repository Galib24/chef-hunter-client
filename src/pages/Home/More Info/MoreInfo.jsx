import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import Swal from 'sweetalert2'
import Footer from '../../Shared/Footer/Footer';


const MoreInfo = () => {
    const [vanish, setVanish] = useState(false)

    // toast 
    const toastHandle = () => {
        Swal.fire(
            'Added Favorite!',
            'Customer Satisfaction is our Pride',

        )
        setVanish(true)
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
        ingredients1,
        ingredients2,
        ingredients3,
        ingredients4,
        ingredients5,
        method1,
        method2,
        method3,
        recipeName1,
        recipeName2,
        recipeName3

    } = MoreInfoDetails;
    // console.log(ingredients);

    // const item = ingredients.map((items) => <li>{items}</li>)

    return (

        <div>

            <Header></Header>



            <div className='row row-cols-auto'>
                <Row>
                    {/* card part */}
                    <Col lg={6}>
                        <Row xs={1} md={2} className="g-4 sticky-lg-top">
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



                        <Card className='w-75 mb-4'>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <h4 className='text-center'>{recipeName1}</h4>
                                <Card.Title>Ingredient</Card.Title>

                                <Card.Text>

                                    {/* {ingredients.map(lk => <li>{lk}</li>)} */}
                                    <div>
                                        <ul style={{ listStyleType: 'none' }}>
                                            <li><strong>{ingredients1}</strong></li>
                                            <li><strong>{ingredients2}</strong></li>
                                            <li><strong>{ingredients3}</strong></li>
                                            <li><strong>{ingredients4}</strong></li>
                                            <li><strong>{ingredients5}</strong></li>
                                        </ul>

                                        {method1}

                                    </div>
                                </Card.Text>

                                <Button style={{ backgroundColor: 'gray' }} disabled={vanish} onClick={toastHandle}><FaThumbsUp></FaThumbsUp> </Button>
                            </Card.Body>
                        </Card>

                        <Card className='w-75 mb-4'>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <h4 className='text-center'>{recipeName2}</h4>
                                <Card.Title>Ingredient</Card.Title>
                                <Card.Text>
                                    <div>
                                        <ul style={{ listStyleType: 'none' }}>
                                            <li><strong>{ingredients1}</strong></li>
                                            <li><strong>{ingredients2}</strong></li>
                                            <li><strong>{ingredients3}</strong></li>
                                            <li><strong>{ingredients4}</strong></li>
                                            <li><strong>{ingredients5}</strong></li>
                                        </ul>

                                        {method2}

                                    </div>
                                </Card.Text>
                                <Button style={{ backgroundColor: 'gray' }} disabled={vanish} onClick={toastHandle}><FaThumbsUp></FaThumbsUp></Button>
                            </Card.Body>
                        </Card>

                        <Card className='w-75 mb-4'>
                            <Card.Img variant="top" src={image4} />
                            <Card.Body>
                                <h4 className='text-center'>{recipeName3}</h4>
                                <Card.Title>Ingredient</Card.Title>
                                <Card.Text>
                                    <div>
                                        <ul style={{ listStyleType: 'none' }}>
                                            <li><strong>{ingredients1}</strong></li>
                                            <li><strong>{ingredients2}</strong></li>
                                            <li><strong>{ingredients3}</strong></li>
                                            <li><strong>{ingredients4}</strong></li>
                                            <li><strong>{ingredients5}</strong></li>
                                        </ul>

                                        {method3}

                                    </div>
                                </Card.Text>
                                <Button style={{ backgroundColor: 'gray' }} disabled={vanish} onClick={toastHandle}><FaThumbsUp></FaThumbsUp></Button>
                            </Card.Body>
                        </Card>


                    </Col>
                </Row>

            </div>
            <Footer></Footer>


        </div>
    );
};

export default MoreInfo;