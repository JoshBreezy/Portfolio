import React, { useState } from 'react';
import { CardBody, CardText, CardTitle, CardImg, CardFooter, Card, Fade, Button } from 'reactstrap';

export default function CustomCard ({project}) {

    const [visible, setVisible] = useState(false);

    function toggleIn () {
        setVisible(!visible);
    }

    function toggleOut () {
        setVisible(!visible);
    }

    return(
        <Card style={{ backgroundColor: '#F7EFE6', color: '#212529', alignItems: 'center' }} className='mx-1'>
            <CardTitle tag='h6'>{project.name}</CardTitle>
            <div className='d-flex' style={{minHeight: '45%', maxHeight: '45%'}}>
                <CardImg src={process.env.PUBLIC_URL + project.image} alt={project.name} onClick={toggleIn} />
            </div>
            <CardFooter>
                <CardText style={{fontSize: '.8rem'}}>Check out the page <a href={project.link} target="_blank" rel="noopener noreferrer"><Button size='sm' color='primary'>here!</Button></a></CardText>
                <CardText style={{fontSize: '.8rem'}}>Or checkout the github repo <a href={project.repo} target="_blank" rel="noopener noreferrer"><Button size='sm' color='primary'>here!</Button></a></CardText>
            </CardFooter>
            <Fade in={visible} exit className='card custom-card'>
                <CardBody>
                    <CardText onClick={toggleOut}>{project.description}</CardText>
                </CardBody>
            </Fade>
        </Card>
    )
}