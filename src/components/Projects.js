import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Label } from 'reactstrap';
import { PROJECTS } from './shared/projects';
import { baseURL } from './shared/baseURL';


function Projects() {
    return (
        <>
            {PROJECTS.map(({id, name, image, description}) => (
                <Card key={id}>
                    <CardImg top src={baseURL + image} alt={name} />
                    <CardBody>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}

export default Projects;