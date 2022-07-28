import React, { useRef} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Button, Col} from 'reactstrap';
import { PROJECTS } from './shared/projects';
import { isMobile } from 'react-device-detect';


function RenderProjects () {


    const mob = () => isMobile? true : false;
    const deskMarg = () => mob()? null : 'me-5';
    const ref = useRef();
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <>
            <div className='row flex-nowrap overflow-auto' style={{scrollBehavior: 'smooth'}} ref={ref}>
                <button className="carousel-control-prev h-25" style={{top: '25%'}} hidden={mob()} type="button" onClick={() => scroll(-300)}>
                    <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                    {PROJECTS.map(({id, name, image, link, repo, description}) => (
                        <Col key={id} xs={9} md={5} lg={4} className={deskMarg()}>
                            <Card style={{ backgroundColor: '#F7EFE6', color: '#212529' }}>
                                <CardTitle tag='h3'>{name}</CardTitle>
                                <CardImg top src={process.env.PUBLIC_URL + image} alt={name} />
                                <CardBody>
                                    <CardText>{description}</CardText>
                                    <CardText>Check out the page <a href={link} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                                    <CardText>Or checkout the github repo <a href={repo} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                <button className="carousel-control-next h-25" style={{top: '25%', right: '-.5%'}} hidden={mob()} type="button" onClick={() => scroll(300)}>
                    <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}



function Projects() {

    return (
        <Container>
                <RenderProjects />
        </Container>
    )
}

export default Projects;