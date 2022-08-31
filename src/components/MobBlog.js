import React, { useState } from "react";
import { BLOGS } from "./shared/blogs";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  CardFooter,
  CardText,
  Fade,
} from "reactstrap";

const items = BLOGS;

export default function MobBlog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [visible, setVisible] = useState(false);
  const [zindex, setZIndex] = useState("-100");

  function toggleOut() {
    setVisible(!visible);
    setZIndex("-100");
  }

  function toggleIn() {
    setVisible(!visible);
    setZIndex("100");
  }

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
      <Card
        style={{
          height: "18rem",
          backgroundColor: "#F7EFE6",
          color: "#212529",
        }}
      >
        <CardTitle tag="h3" className="m-2">
          {blog.title}
        </CardTitle>
        <CardSubtitle className="offset-1">{blog.date}</CardSubtitle>
        <CardBody className="my-auto">
          <div className="row h-100">
            <Button color="primary" onClick={toggleIn} className="col-5 m-auto">
              View Blog
            </Button>
          </div>
        </CardBody>
        <CardFooter className="mb-5">Comments coming soon!</CardFooter>
      </Card>
      <Fade
        in={visible}
        exit
        className="card mob-blog-card"
        style={{ zIndex: zindex }}
      >
        <CardBody>
          <CardText onClick={toggleOut} className='p-2'>{blog.content}</CardText>
        </CardBody>
      </Fade>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={0}
      fade
      enableTouch
      dark
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
