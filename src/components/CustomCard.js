import React, { useState, useRef } from 'react';
import { CardBody, CardText, CardTitle, CardImg, CardFooter, Card, Fade, Button } from 'reactstrap';
import { useSpring, animated, config } from 'react-spring';

export default function CustomCard ({project}) {

    const n = useRef(0)
    const props = useSpring({
        loop: () => 5 > n.current++,
        from: {
            width: '105%',
            height: '55%'
        },
        to: {
            width: '100%',
            height: '50%'
        },
        config: config.wobbly
    })

    const [visible, setVisible] = useState(false);

    function toggleIn () {
        setVisible(!visible);
    }

    function toggleOut () {
        setVisible(!visible);
    }

    return(
        <Card style={{ backgroundColor: '#F7EFE6', color: '#212529', alignItems: 'center'}}>
            <CardTitle tag='h3'>{project.name}</CardTitle>
            <animated.div style={props} className='d-flex position-ablsolute'>
                <CardImg src={process.env.PUBLIC_URL + project.image} alt={project.name} onClick={toggleIn} />
            </animated.div>
            <CardFooter>
                <CardText>Check out the page <a href={project.link} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                <CardText>Or checkout the github repo <a href={project.repo} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
            </CardFooter>
            <Fade in={visible} exit className='card custom-card'>
                <CardBody>
                    <CardText onClick={toggleOut}>{project.description}</CardText>
                </CardBody>
            </Fade>
        </Card>
)
}