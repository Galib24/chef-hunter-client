import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const BestChefCard = ({info}) => {
    const {name,image,rating,yearsOfExperience,numberOfRecipes} = info;
    return (
        <>
              <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>GradeLevel: {}</Card.Text>
                       <h7> {rating} </h7>
                       <h7>years Of Experience {yearsOfExperience} </h7>
                       <h7>number Of Recipes {numberOfRecipes} </h7>
                        <Button variant="secondary">View Details</Button>

                    </Card.Body>
                </Card>
        </>
    );
};

export default BestChefCard;