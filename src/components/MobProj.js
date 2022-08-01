import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button, Col, Fade} from 'reactstrap';
import { PROJECTS } from './shared/projects';














export default function MobProj() {

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
                        <Card style={{ backgroundColor: '#F7EFE6', color: '#212529' }}>
                            <CardTitle tag='h3'>{name}</CardTitle>
                            <CardImg top src={process.env.PUBLIC_URL + image} alt={name} onClick={() => select(id)} />
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