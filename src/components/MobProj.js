import React from 'react';
import { PROJECTS } from './shared/projects';
import CustomCard from './CustomCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function MobProj() {

    const responsive = {
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
    }

    return (
        <>
            <Carousel
                responsive={responsive}
                focusOnSelect={true}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={true}
                arrows={false}
                customTransition="transform 600ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                centerMode = {true}
            >
                {PROJECTS.map(({...project}) => (
                    <CustomCard key={project.id} project={project} />
                ))}
            </Carousel>
        </>
    )
}