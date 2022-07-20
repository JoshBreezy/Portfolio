import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Button, Col, Row } from 'reactstrap';
import { PROJECTS } from './shared/projects';
import { baseURL } from './shared/baseURL';
import { isMobile } from 'react-device-detect';

function mob () {
    if (isMobile) {
        return 'flex-nowrap overflow-auto';
    } else {
        return 'desk,'
    }
};

function RenderProjects () {
    return (
        <>
            {PROJECTS.map(({id, name, image, link, repo, description}) => (
                <Col key={id} xs={8} md={5} lg={4}>
                    <Card style={{ backgroundColor: '#F7EFE6', color: '#212529' }}>
                        <CardTitle tag='h3'>{name}</CardTitle>
                        <CardImg top src={baseURL + image} alt={name} />
                        <CardBody>
                            <CardText className='line-clamp'>{description}</CardText>
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
        <Container fluid='lg'>
            <Row className={mob()}>
                <RenderProjects />
            </Row>
        </Container>
    )
}

export default Projects;