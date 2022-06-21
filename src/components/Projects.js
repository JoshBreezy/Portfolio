import React from 'react';
import { Card, CardImg, CardText, CardBody, CardGoup, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label } from 'reactstrap';
import { PROJECTS } from './shared/projects';
import { baseURL } from './shared/baseURL';
import { Link } from 'react-router-dom';


function RenderProjects () {
    return (
        <div className='col col-md-4'>
            {PROJECTS.map(({id, name, image, link, repo, description}) => (

                    <Card key={id}>
                        <CardTitle tag='h3'>{name}</CardTitle>
                        <CardImg top src={baseURL + image} alt={name} />
                        <CardBody>
                            <CardText>{description}</CardText>
                            <CardText>Check out the page <a href={link}><Button color='primary'>here!</Button></a></CardText>
                            <CardText>Or checkout the github repo <a href={repo}><Button color='primary'>here!</Button></a></CardText>
                        </CardBody>
                    </Card>

            ))}
        </div>
    )
}




function Projects() {
    return (
        <div className='container'>
            <div className='row'>
                <RenderProjects />
            </div>
        </div>
    )
}

export default Projects;