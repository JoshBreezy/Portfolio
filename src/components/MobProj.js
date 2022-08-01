import React, { useState, useRef } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button, Col, Fade, Container} from 'reactstrap';
import { PROJECTS } from './shared/projects';
import { useSpring, animated, config } from 'react-spring';


export default function MobProj() {

    const n = useRef(0)
    const props = useSpring({
        loop: () => 3 > n.current++,
        from: {
            width: '105%',
            height: '55%'
        },
        to: {
            width: '100%',
            height: '50%'
        },
        delay: 200,
        config: config.wobbly,

    })

    const [hidden, setHidden] = useState(true)
    const [selected, setSelected] = useState(null)
    function select (id) {
        setSelected(id);
        setHidden(false)
    }


    return (
        <>
            <div className='row flex-nowrap overflow-auto' style={{scrollBehavior: 'smooth'}}>
                {PROJECTS.map(({id, name, image, link, repo, description}) => (
                    <Col key={id} xs={9} md={5} lg={4}>
                        <Card style={{ backgroundColor: '#F7EFE6', color: '#212529', alignItems: 'center'}}>
                            <CardTitle tag='h3'>{name}</CardTitle>
                            <animated.div style={props} className='d-flex position-ablsolute'>
                                <CardImg src={process.env.PUBLIC_URL + image} alt={name} onClick={() => select(id)} />
                            </animated.div>
                            <CardBody>
                                {selected === id & hidden === false ? <Fade><CardText onClick={() => setHidden(true)}>{description}</CardText></Fade> : null}
                            </CardBody>
                            <CardFooter>
                                <CardText>Check out the page <a href={link} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                                <CardText>Or checkout the github repo <a href={repo} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </div>
        </>
    )
}