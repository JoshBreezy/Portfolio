import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Col } from 'reactstrap';
import { PROJECTS } from './shared/projects';
import { baseURL } from './shared/baseURL';
import { Link } from 'react-router-dom';


function RenderProjects () {
    return (
        <>
            {PROJECTS.map(({id, name, image, link, repo, description}) => (
                <Col sm='6' md='4' lg='3' key={id}>
                    <Card style={{ backgroundColor: '#F7EFE6' }}>
                        <CardTitle tag='h3'>{name}</CardTitle>
                        <CardImg top src={baseURL + image} alt={name} />
                        <CardBody>
                            <CardText>{description}</CardText>
                            <CardText>Check out the page <a href={link} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                            <CardText>Or checkout the github repo <a href={repo} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}




function Projects() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <RenderProjects />
            </div>
        </div>
    )
}

export default Projects;