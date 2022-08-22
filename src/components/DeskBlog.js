import React, { useState } from "react";
import { BLOGS } from "./shared/blogs";
import {
  Card,
  CardSubtitle,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl
} from "reactstrap";

const items = BLOGS

export default function DeskBlog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(({ ...blog }) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={blog.id}
    >
      <Card className='p-5'>
        <CardTitle tag='h3'>{blog.title}</CardTitle>
        <CardSubtitle>{blog.date}</CardSubtitle>
        <CardBody className="p-5">
          <CardText className='px-5'>{blog.content}</CardText>
        </CardBody>
        <CardFooter>Comments comming soon</CardFooter>
      </Card>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      fade
      enableTouch
      dark
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        style={{ filter: 'invert(1)' }}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        style={{ filter: 'invert(1)' }}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        style={{ filter: 'invert(1)' }}
      />
    </Carousel>
  );
}
