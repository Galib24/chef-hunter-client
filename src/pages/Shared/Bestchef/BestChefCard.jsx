import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const BestChefCard = ({info}) => {
    const navigate = useNavigate()
    const {id,name,image,rating,yearsOfExperience,numberOfRecipes} = info;
    return (
        <>
              <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>

                        <h7>Ratings: {rating} </h7>
                        <br />
                       <h7>Years Of Experience: {yearsOfExperience} </h7>
                       <br />
                       <h7>Number Of Recipes {numberOfRecipes} </h7>

                        </Card.Text>
                       
                        <Button variant="secondary" onClick={()=>navigate(`/moreDetails/${id}`)}>View Details</Button>

                    </Card.Body>
                </Card>
        </>
    );
};

export default BestChefCard;