import React from 'react';
import { PROJECTS } from './shared/projects';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function DeskProj() {

    const responsive = {
        xtraLrg: {
            breakpoint: { max: 6000, min: 1700 },
            items: 4,
            slidesToSlide: 4
        },
        desktop: {
          breakpoint: { max: 1700, min: 1200 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1200, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 600ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            renderDotsOutside={false}
            centerMode = {true}
        >
            {
                PROJECTS.map(({...project}) => (
                        <Card className='mx-3'>
                            <CardTitle tag='h3'>{project.name}</CardTitle>
                            <div className='d-flex' style={{minHeight: '45%'}}>
                                <CardImg top src={process.env.PUBLIC_URL + project.image} alt={project.name} className='d-flex' style={{height: '100%'}} />
                            </div>
                            <CardBody style={{ display: 'flex', height: '30%', flexShrink: 'auto' }}>
                                <CardText>{project.description}</CardText>
                            </CardBody>
                            <CardFooter>
                                <CardText>Check out the page <a href={project.link} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                                <CardText>Or checkout the github repo <a href={project.repo} target="_blank" rel="noopener noreferrer"><Button color='primary'>here!</Button></a></CardText>
                            </CardFooter>
                        </Card> 
                    )
                )
            }
        </Carousel>
    )
}